!!! note
This property is observed.
CatalogMember's data. This should be overridden by children of this class.
added to the catalog; otherwise, false.
added to the catalog; otherwise, false.
will not be shown to the user.  In this hash, the keys should be the names of the groups and data sources to blacklist,
and the values should be "true".
forever.  The duration is expressed as a Varnish-like duration string, such as '1d' (one day) or '10000s' (ten thousand seconds).
This property is an HTML string that must be sanitized before display to the user.
referenced WMS server and excluding datasets not found therein.
array causes an independent request to the CKAN, and the results are concatenated.  The
search string is equivalent to what would be in the parameters segment of the url calling the CKAN search api.
See the [Solr documentation](http://wiki.apache.org/solr/CommonQueryParameters#fq) for information about filter queries.
Each item can be either a URL-encoded string ("fq=res_format%3awms") or an object ({ fq: 'res_format:wms' }). The latter
format is easier to work with.
  To get all the datasets with wms resources: [{ fq: 'res_format%3awms' }]
  To get all wms/WMS datasets in the Surface Water group: [{q: 'groups=Surface Water', fq: 'res_format:WMS' }]
  To get both wms and esri-mapService datasets: [{q: 'res_format:WMS'}, {q: 'res_format:"Esri REST"' }]
  To get all datasets with no filter, you can use ['']
This property is required.
This property is not observable.
* `none` - Datasets are put in a flat list; they are not grouped at all.
* `group` - Datasets are grouped according to their CKAN group.  Datasets that are not in any groups are put at the top level.
* `organization` - Datasets are grouped by their CKAN organization.  Datasets that are not associated with an organization are put at the top level.
can just look at the network requests).
Use uniqueId to get the canonical unique id for this CatalogMember, which is present even if there is no id.
The object is of the form {title:string, content:string, key: string, confirmation: boolean, confirmText: string, width: number, height: number}.
property is observable.
its children.
Terria's initSources.  User-supplied members must be serialized completely when, for example,
serializing enabled members for sharing.
For example, { "treat404AsError": false }
If this property is undefined or if CkanCatalogGroup's filterByWmsGetCapabilities is false, no
filtering based on MaxScaleDenominator is performed.
these items will be left at the top level, not grouped.
individual resources and the CKAN dataset where the are multiple resources for a single dataset.
individual resources instead of from the CKAN dataset.
If this property is undefined then no extra parameters are added.