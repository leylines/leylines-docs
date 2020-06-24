!!! note    This page is automatically generated from the source code, and is a bit rough.  If you have    trouble, check the [source code for this type](https://github.com/TerriaJS/terriajs/blob/master/lib/Models/MapboxStyleCatalogItem.js) or post a message to the [forum](https://groups.google.com/forum/#!forum/terriajs).undefined## [Initialization File](../../customizing/initialization-files.md) properties:`"type": "mapbox-style"``_nameInCatalog`The name of the item to show in the catalog, if different from `name`. Default undefined.
This property is observed.`_sourceInfoItemNames`The names of items in the CatalogMember's info array that contain details of the source of this
CatalogMember's data. This should be overridden by children of this class.`accessToken`The public access token for the imagery.
[optional]`cacheDuration`The cache duration to use for proxied URLs for this catalog member.  If undefined, proxied URLs are effectively cachable
forever.  The duration is expressed as a Varnish-like duration string, such as '1d' (one day) or '10000s' (ten thousand seconds).`chartColor`The color of how the dataset will displayed on the chart`chartType`The name style of how the item will be rendered on the chart`clipToRectangle`A value indicating whether this dataset should be clipped to the CatalogItem's rectangle.
If true, no part of the dataset will be displayed outside the rectangle.  This property is true by default,
leading to better performance and avoiding tile request errors that might occur when requesting tiles outside the
server-specified rectangle.  However, it may also cause features to be cut off in some cases, such as if a server
reports an extent that does not take into account that the representation of features sometimes require a larger
spatial extent than the features themselves.  For example, if a point feature on the edge of the extent is drawn
as a circle with a radius of 5 pixels, half of that circle will be cut off.`credit`A credit for the data source, which is displayed on the canvas
[optional]`customProperties`The dictionary of custom item properties.`dataCustodian`A description of the custodian of this data item.
This property is an HTML string that must be sanitized before display to the user.`dataUrl`The URL from which this data item's raw data can be retrieved, or undefined if raw data for
this data item is not available.`dataUrlType`The type of the CatalogItem's dataUrl, or undefined if raw data for this data
source is not available.
Valid values are:
 * `direct` - A direct link to the data.
 * `wfs` - A Web Feature Service (WFS) base URL.  If CatalogItem's dataUrl is not
           specified, the base URL will be this data item's URL.
 * `wfs-complete` - A complete, ready-to-use link to download features from a WFS server.
 * `none` - There is no data link.`dateFormat`Options for formatting current time and timeline tic labels. Options are:
   currentTime   // Current time in time slider will be shown in this format. For example "mmmm yyyy" for Jan 2016.
   timelineTic   // Timeline tics will have this label. For example "yyyy" will cause each tic to be labelled with the year.`description`The description of the item.`displayChoicesBeforeLegend`A flag which determines whether the legend comes before (false) or after (true) the display variable choice.
Default false.`dontChartAlone`Whether this layer is sufficient to warrant a chart.`featureInfoTemplate`A template to display message in a info box.
May be a string or an object with template, name and/or partials properties.`featureTimesProperty`The name of a property in a feature returned from this layer's feature query service
that indicates the times at which this layer covers this position. For example, historical and
near-real-time satellite imagery often comes as daily swaths, with a given area on the globe
potentially only covered every number of days.`forceProxy`Gets or sets whether or not this member should be forced to use a proxy.
This property is not observable.`hideSource`Indicates that the source of this data should be hidden from the UI (obviously this isn't super-secure as you
can just look at the network requests).`id`An optional unique id for this member, that is stable across renames and moves.
Use uniqueId to get the canonical unique id for this CatalogMember, which is present even if there is no id.`ignoreUnknownTileErrors`A value indicating whether non-specific (no HTTP status code) tile errors should be ignored. This is a
last resort, for dealing with odd cases such as data sources that return non-images (eg XML) with a 200 status code.
No error messages will be shown to the user.`initialMessage`A message object that is presented to the user when an item or group is initially clicked
The object is of the form {title:string, content:string, key: string, confirmation: boolean, confirmText: string, width: number, height: number}.`initialTimeSource`Options for the value of the animation timeline at start. Valid options in config file are:
    initialTimeSource: "present"                            // closest to today's date
    initialTimeSource: "start"                              // start of time range of animation
    initialTimeSource: "end"                                // end of time range of animation
    initialTimeSource: An ISO8601 date e.g. "2015-08-08"    // specified date or nearest if date is outside range`isEnabled`A value indicating whether this data item is enabled.  An enabled data item appears in the
"Now Viewing" pane, but is not necessarily shown on the map.`isHidden`A value indicating whether this item is hidden from the catalog.  This
property is observable.`isLegendVisible`A value indicating whether the legend for this data item is currently visible.`isLoading`A value indicating whether this data source is currently loading.`isMappable`A value indicating whether this data source can be shown on the map (as opposed to a time-series dataset,
for instance, which can only be shown in a chart).`isPromoted`A value indicating whether this item is kept above other non-promoted items.`isRequiredForRendering`A value indicating whether tiles of this catalog item are required to be loaded before terrain
tiles to which they're attached can be rendered.  This should usually be set to true for base layers and
false for all others.`isShown`A value indicating whether this data item is currently shown on the map.  In order to be shown,
the item must also be enabled.`isUserSupplied`A value indicating whether this member was supplied by the user rather than loaded from one of the
Terria's initSources.  User-supplied members must be serialized completely when, for example,
serializing enabled members for sharing.`isWaitingForDisclaimer`Whether this catalog member is waiting for a disclaimer to be accepted before showing itself.`keepOnTop`Keeps the layer on top of all other imagery layers.`legendUrl`The URL of the legend to show when this catalog item is enabled.  If there is more than one
legend URL, this property returns the first one.`legendUrls`The URLs of the legends to show when this catalog item is enabled.`maximumLevel`The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.
[optional]`maximumShownFeatureInfos`The maximum number of features whose information can be shown at one time in the Feature Info Panel, from this item.
Defaults to terria.configParameters.defaultMaximumShownFeatureInfos`metadataUrl`The URL from which this data item's metadata description can be retrieved, or undefined if
metadata is not available for this data item.  The format of the metadata depends on the type of data item.
For example, Web Map Service (WMS) data items provide their metadata via their GetCapabilities document.`minimumLevel`The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.
[optional]`name`The name of the item.`nameInCatalog`The name of this catalog member in the catalog. By default this is just `name`, but can be overridden.`nowViewingIndex`The index of the item in the Now Viewing list.  Setting this property does not automatically change the order.
This property is used intenally to save/restore the Now Viewing order and is not intended for general use.`nowViewingMessage`A message to show when this item is enabled for the first time in order to call attention to the Now Viewing panel.`opacity`The opacity (alpha) of the data item, where 0.0 is fully transparent and 1.0 is
fully opaque.`rectangle`The rectangle, in radians, covered by the image.
[optional]`scaleFactor`Determines if tiles are rendered at a @2x scale factor.
[optional]`shortReport`A short report to show on the now viewing tab.`showOnChart`Whether to show imagery availability on charts.`showsInfo`A value indicating whether this data source should show an info icon.`styleId`The Mapbox Style ID.`tileErrorThresholdBeforeDisabling`Allow a threshold to be configured for the number of tile fails
before disabling the layer.`tilesize`The size of the image tiles.
[optional]`treat403AsError`A value indicating whether a 403 response code when requesting a tile should be
treated as an error.  If false, 403s are assumed to just be missing tiles and need not be
reported to the user.`treat404AsError`A value indicating whether a 404 response code when requesting a tile should be
treated as an error.  If false, 404s are assumed to just be missing tiles and need not be
reported to the user.`url`The URL of this data.`useOwnClock`A flag indicating whether imagery should be displayed using this item's own clock (currentTime, multiplier),
or, if false, the terria clock (whose current time is shown in the timeline UI). Default false.`username`The username of the map account.
[optional]`zoomOnEnable`A value indicating whether the map will automatically zoom to this catalog item when it is enabled.

Note that within a single init source:

* Catalog items with both `isEnabled` and `zoomOnEnable` set to true will override the top-level `initialCamera` property.
* If multiple catalog items have both `isEnabled` and `zoomOnEnable` set to true, it is undefined which one will affect the camera.

In the case of multiple init sources, however, the camera will reflect whatever happens in the _last_ init source, whether
it is a result of a `zoomOnEnable` or an `initialCamera`,