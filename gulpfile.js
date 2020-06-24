'use strict';

var gulp = require('gulp');

gulp.task('make-schema', function() {
    var genSchema = require('generate-terriajs-schema');
    var schemaSourceGlob = require('leylinesjs/buildprocess/schemaSourceGlob');

    return genSchema({
        sourceGlob: schemaSourceGlob,
        dest: 'docroot/schema',
        noversionsubdir: true,
        quiet: true
    });
});

gulp.task('reference-guide', function(done) {
    var runExternalModule = require('leylinesjs/buildprocess/runExternalModule');

    runExternalModule('jsdoc/jsdoc.js', [
        '-c', './buildprocess/jsdoc.json'
    ]);

    done();
});

gulp.task('cli-docs', function(done) {
    var runExternalModule = require('leylinesjs/buildprocess/runExternalModule');

    runExternalModule('jsdoc/jsdoc.js', [
        '-c', './buildprocess/jsdoc-cli.json'
    ]);

    done();
});

gulp.task('geodesy-docs', function(done) {
    var runExternalModule = require('leylinesjs/buildprocess/runExternalModule');

    runExternalModule('jsdoc/jsdoc.js', [
        '-c', './buildprocess/jsdoc-geodesy.json'
    ]);

    done();
});

gulp.task('code-attribution', function userAttribution(done) {
    var spawnSync = require('child_process').spawnSync;
    
    var result = spawnSync('node_modules/.bin/yarn', ['licenses generate-disclaimer > node_modules/leylinesjs/doc/acknowledgements/attributions.md'], {
        stdio: 'inherit',
        shell: true
    });
    if (result.status !== 0) {
        throw new Error('Generating code attribution exited with an error.\n' + result.stderr.toString(), { showStack: false });
    }
    done();

})

gulp.task('user-guide', gulp.series(gulp.parallel('make-schema', 'code-attribution'), function userGuide(done) {
    var fse = require('fs-extra');
    var klawSync = require('klaw-sync');
    var path = require('path');
    var PluginError = require('plugin-error');
    var spawnSync = require('child_process').spawnSync;

    fse.copySync('node_modules/leylinesjs/doc/mkdocs.yml', 'build/mkdocs.yml');
    fse.copySync('node_modules/leylinesjs/doc', 'build/doc');

    var files = klawSync('build/doc').map(o => o.path);
    var markdown = files.filter(name => path.extname(name) === '.md');
    var readmes = markdown.filter(name => name.indexOf('README.md') === name.length - 'README.md'.length);

    // Rename all README.md to index.md
    readmes.forEach(readme => fse.renameSync(readme, path.join(path.dirname(readme), 'index.md')));

    // Replace links to README.md with links to index.md
    markdown.forEach(function(name) {
        name = name.replace(/README\.md/, 'index.md');
        var content = fse.readFileSync(name, 'UTF-8');
        var replaced = content.replace(/README\.md/g, 'index.md');
        if (content !== replaced) {
            fse.writeFileSync(name, replaced, 'UTF-8');
        }
    });

    // Replace README.md with index.md in mkdocs.yml.
    // Also replace swap in the actual path to mkdocs-material in node_modules.
    var mkdocsyml = fse.readFileSync('build/mkdocs.yml', 'UTF-8');
    mkdocsyml = mkdocsyml.replace(/README\.md/g, 'index.md');
    fse.writeFileSync('build/mkdocs.yml', mkdocsyml, 'UTF-8');

    generateCatalogMemberPages('docroot/schema', 'build/doc/connecting-to-data/catalog-type-details');

    var result = spawnSync('mkdocs', ['build', '--clean', '--config-file', 'mkdocs.yml'], {
        cwd: 'build',
        stdio: 'inherit',
        shell: false
    });
    if (result.status !== 0) {
        throw new PluginError('user-doc', 'External module exited with an error.', { showStack: false });
    }

    done();
}));

gulp.task('docs', gulp.series('user-guide', 'reference-guide', function docs(done) {
    var fse = require('fs-extra');
    fse.copySync('node_modules/leylinesjs/doc/index-built.html', 'docroot/index.html');
    fse.copySync('node_modules/leylinesjs/doc/CNAME', 'docroot/CNAME');
    done();
}));

function generateCatalogMemberPages(schemaPath, outputPath) {
    var fse = require('fs-extra');
    var klawSync = require('klaw-sync');
    var path = require('path');

    var schemaFiles = klawSync(schemaPath).map(o => o.path);
    var typeFiles = schemaFiles.filter(name => name.endsWith('_type.json'));

    typeFiles.forEach(function(typeFile) {
        var json = JSON.parse(fse.readFileSync(typeFile, 'UTF-8'));
        var type = json.properties.type.enum[0];
        var file = path.join(outputPath, type + '.md');
        var propertiesFile = typeFile.replace(/_type\.json/, '.json');

        var properties = {};
        addProperties(propertiesFile, properties);

        var content = '!!! note\r\r' +
                      '    This page is automatically generated from the source code, and is a bit rough.  If you have\r' +
                      '    trouble, check the [source code for this type](https://github.com/TerriaJS/terriajs/blob/master/lib/Models/' + path.basename(propertiesFile, '.json') + '.js) or post a message to the [forum](https://groups.google.com/forum/#!forum/terriajs).\r\r';
        content += json.description + '\r\r';
        content += '## [Initialization File](../../customizing/initialization-files.md) properties:\r\r';
        content += '`"type": "' + type + '"`\r\r';

        var propertyKeys = Object.keys(properties);
        propertyKeys.sort().forEach(function(property) {
            var details = properties[property];
            content += '`' + property + '`\r\r';
            content += details.description + '\r\r';
        });

        fse.writeFileSync(file, content, 'UTF-8');
    });
}

function addProperties(file, result) {
    var fse = require('fs-extra');
    var path = require('path');

    var propertiesJson = JSON.parse(fse.readFileSync(file, 'UTF-8'));

    if (propertiesJson.allOf) {
        propertiesJson.allOf.forEach(function(allOf) {
            addProperties(path.join(path.dirname(file), allOf['$ref']), result);
        });
    }

    for (var property in propertiesJson.properties) {
        result[property] = propertiesJson.properties[property];
    }
}

gulp.task('default', gulp.series('docs', 'cli-docs', 'geodesy-docs'));
