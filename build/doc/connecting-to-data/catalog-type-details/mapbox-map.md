!!! note
This property is observed.
CatalogMember's data. This should be overridden by children of this class.
forever.  The duration is expressed as a Varnish-like duration string, such as '1d' (one day) or '10000s' (ten thousand seconds).
If true, no part of the dataset will be displayed outside the rectangle.  This property is true by default,
leading to better performance and avoiding tile request errors that might occur when requesting tiles outside the
server-specified rectangle.  However, it may also cause features to be cut off in some cases, such as if a server
reports an extent that does not take into account that the representation of features sometimes require a larger
spatial extent than the features themselves.  For example, if a point feature on the edge of the extent is drawn
as a circle with a radius of 5 pixels, half of that circle will be cut off.
This property is an HTML string that must be sanitized before display to the user.
this data item is not available.
source is not available.
Valid values are:
 * `direct` - A direct link to the data.
 * `wfs` - A Web Feature Service (WFS) base URL.  If CatalogItem's dataUrl is not
           specified, the base URL will be this data item's URL.
 * `wfs-complete` - A complete, ready-to-use link to download features from a WFS server.
 * `none` - There is no data link.
   currentTime   // Current time in time slider will be shown in this format. For example "mmmm yyyy" for Jan 2016.
   timelineTic   // Timeline tics will have this label. For example "yyyy" will cause each tic to be labelled with the year.
Default false.
May be a string or an object with template, name and/or partials properties.
that indicates the times at which this layer covers this position. For example, historical and
near-real-time satellite imagery often comes as daily swaths, with a given area on the globe
potentially only covered every number of days.
This property is not observable.
can just look at the network requests).
Use uniqueId to get the canonical unique id for this CatalogMember, which is present even if there is no id.
last resort, for dealing with odd cases such as data sources that return non-images (eg XML) with a 200 status code.
No error messages will be shown to the user.
The object is of the form {title:string, content:string, key: string, confirmation: boolean, confirmText: string, width: number, height: number}.
    initialTimeSource: "present"                            // closest to today's date
    initialTimeSource: "start"                              // start of time range of animation
    initialTimeSource: "end"                                // end of time range of animation
    initialTimeSource: An ISO8601 date e.g. "2015-08-08"    // specified date or nearest if date is outside range
"Now Viewing" pane, but is not necessarily shown on the map.
property is observable.
for instance, which can only be shown in a chart).
tiles to which they're attached can be rendered.  This should usually be set to true for base layers and
false for all others.
the item must also be enabled.
Terria's initSources.  User-supplied members must be serialized completely when, for example,
serializing enabled members for sharing.
legend URL, this property returns the first one.
Defaults to terria.configParameters.defaultMaximumShownFeatureInfos
metadata is not available for this data item.  The format of the metadata depends on the type of data item.
For example, Web Map Service (WMS) data items provide their metadata via their GetCapabilities document.
This property is used intenally to save/restore the Now Viewing order and is not intended for general use.
fully opaque.
before disabling the layer.
treated as an error.  If false, 403s are assumed to just be missing tiles and need not be
reported to the user.
treated as an error.  If false, 404s are assumed to just be missing tiles and need not be
reported to the user.
or, if false, the terria clock (whose current time is shown in the timeline UI). Default false.

Note that within a single init source:

* Catalog items with both `isEnabled` and `zoomOnEnable` set to true will override the top-level `initialCamera` property.
* If multiple catalog items have both `isEnabled` and `zoomOnEnable` set to true, it is undefined which one will affect the camera.

In the case of multiple init sources, however, the camera will reflect whatever happens in the _last_ init source, whether
it is a result of a `zoomOnEnable` or an `initialCamera`,