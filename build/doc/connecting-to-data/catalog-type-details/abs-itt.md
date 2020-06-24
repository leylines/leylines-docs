!!! note
(ABS) ITT query interface.  Documentation for the query interface is found here: http://stat.abs.gov.au/itt/r.jsp?api
This property is observed.
CatalogMember's data. This should be overridden by children of this class.
forever.  The duration is expressed as a Varnish-like duration string, such as '1d' (one day) or '10000s' (ten thousand seconds).
If this property is set, CatalogItem's url is ignored.
This property is an HTML string that must be sanitized before display to the user.
used.  This propery is observable.
this data item is not available.
source is not available.
Valid values are:
 * `direct` - A direct link to the data.
 * `wfs` - A Web Feature Service (WFS) base URL.  If CatalogItem's dataUrl is not
           specified, the base URL will be this data item's URL.
 * `wfs-complete` - A complete, ready-to-use link to download features from a WFS server.
 * `none` - There is no data link.
http://stat.abs.gov.au/itt/query.jsp?method=GetDatasetList (or equivalent).  This property
is observable.
   currentTime   // Current time in time slider will be shown in this format. For example "mmmm yyyy" for Jan 2016.
   timelineTic   // Timeline tics will have this label. For example "yyyy" will cause each tic to be labelled with the year.
Default false.
May be a string or an object with template, name and/or partials properties.
concepts for a dataset by querying http://stat.abs.gov.au/itt/query.jsp?method=GetDatasetConcepts&datasetid=ABS_CENSUS2011_B25
(or equivalent) and a list of the possible values for a concept by querying
http://stat.abs.gov.au/itt/query.jsp?method=GetCodeListValue&datasetid=ABS_CENSUS2011_B25&concept=MEASURE&format=json.
This property is not observable.
can just look at the network requests).
Use uniqueId to get the canonical unique id for this CatalogMember, which is present even if there is no id.
The object is of the form {title:string, content:string, key: string, confirmation: boolean, confirmText: string, width: number, height: number}.
"Now Viewing" pane, but is not necessarily shown on the map.
property is observable.
for instance, which can only be shown in a chart).
This only makes a difference if there is a time column and idColumns.
In this case, if isSampled is true, then feature position, color and size are interpolated
to produce smooth animation of the features over time.
If isSampled is false, then times are treated as the start of periods, so that
feature positions, color and size are kept constant from one time until the next,
then change suddenly.
Color and size are never interpolated when they are drawn from a text column.
the item must also be enabled.
Terria's initSources.  User-supplied members must be serialized completely when, for example,
serializing enabled members for sharing.
legend URL, this property returns the first one.
Defaults to terria.configParameters.defaultMaximumShownFeatureInfos
metadata is not available for this data item.  The format of the metadata depends on the type of data item.
For example, Web Map Service (WMS) data items provide their metadata via their GetCapabilities document.
This property is used intenally to save/restore the Now Viewing order and is not intended for general use.
fully opaque.
SA4,Tot_P_M,Tot_P_F,Tot_P_P
101,100000,23450,123450
102,130000,100000,234560
The region code and '.csv' are appended to the end of this URL for the request, eg.
'data/2011Census_TOT_' -> 'data/2011Census_TOT_SA4.csv' (and other region types).
Usually defaults to 'REGIONTYPE'.
or, if false, the terria clock (whose current time is shown in the timeline UI). Default false.

Note that within a single init source:

* Catalog items with both `isEnabled` and `zoomOnEnable` set to true will override the top-level `initialCamera` property.
* If multiple catalog items have both `isEnabled` and `zoomOnEnable` set to true, it is undefined which one will affect the camera.

In the case of multiple init sources, however, the camera will reflect whatever happens in the _last_ init source, whether
it is a result of a `zoomOnEnable` or an `initialCamera`,