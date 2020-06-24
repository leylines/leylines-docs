!!! note

Descriptions of this format are available at:
- https://data.oecd.org/api/sdmx-json-documentation/
- https://github.com/sdmx-twg/sdmx-json/tree/master/data-message/docs
- https://sdmx.org/
- http://stats.oecd.org/sdmx-json/ (hosts a handy query builder)

The URL can be of two types, eg:
1. http://example.com/sdmx-json/data/DATASETID/BD1+BD2.LGA.1+2.A/all?startTime=2013&endTime=2013
2. http://example.com/sdmx-json/data/DATASETID

For #2, the dimension names and codes come from (in json format):
http://example.com/sdmx-json/dataflow/DATASETID
This property is observed.
CatalogMember's data. This should be overridden by children of this class.
instead, their values should be aggregated and treated as a single value.
Eg. useful if a dimension is repeated (eg. STATE and REGION).
NOTE: Currently only a single aggregatedDimensionId is supported.
This should not be applied to regions or time periods.
If not defined, all values are allowed (subject to the whitelist).
If a dimension is not present, all values for that dimension are allowed (subject to the whitelist).
Note this will not be applied to regions or time periods.
If the same value is in both the whitelist and the blacklist, the blacklist wins.
The expression is first matched as a regular expression (sandwiched between ^ and &);
if that fails, it is matched as a literal string.  So eg. "[0-9]+" will match 015 but not A015.
forever.  The duration is expressed as a Varnish-like duration string, such as '1d' (one day) or '10000s' (ten thousand seconds).
This is set to true automatically if total value ids are available on all necessary columns.
Defaults to none.
If one of these values is chosen:
- Does not show the "canDisplayPercent" option.
- Explains to the user that it can't show multiple values of concepts.
eg. {"MEASURE": ["rate"]}.
Can also be the boolean "true", if it should apply to all selections.
Defaults to none.
If true, for example, "Total responses(c)" would be replaced with "Total responses".
This is a workaround for an ABS-specific issue.
Default false.
If this property is set, CatalogItem's url is ignored.
This property is an HTML string that must be sanitized before display to the user.
used.  This propery is observable.
this data item is not available.
Defaults to 'data'.
source is not available.
Valid values are:
 * `direct` - A direct link to the data.
 * `wfs` - A Web Feature Service (WFS) base URL.  If CatalogItem's dataUrl is not
           specified, the base URL will be this data item's URL.
 * `wfs-complete` - A complete, ready-to-use link to download features from a WFS server.
 * `none` - There is no data link.
Defaults to 'dataflow'.
   currentTime   // Current time in time slider will be shown in this format. For example "mmmm yyyy" for Jan 2016.
   timelineTic   // Timeline tics will have this label. For example "yyyy" will cause each tic to be labelled with the year.
Default true.
Currently a string, but could be extended to be an object with frequency codes as keys.
By default this is undefined, and not used as part of the query.
May be a string or an object with template, name and/or partials properties.
This property is not observable.
This is useful if the name of the dataset doesn't convey what is in it, but one of the dimension values does. Eg. ['MEASURE'].
Default [].
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
Defaults to 'MEASURE'.
metadata is not available for this data item.  The format of the metadata depends on the type of data item.
For example, Web Map Service (WMS) data items provide their metadata via their GetCapabilities document.
This property is used intenally to save/restore the Now Viewing order and is not intended for general use.
fully opaque.
Defaults to 'all'.
into a csv-geo-au-compliant column name. The Mustache variable "{{name}}" holds the original name.
You can use this to specify a year in the name, even if it is absent on the server.
Eg. "{{name}}_code_2016" converts STE to STE_code_2016.
By default this is undefined. If it is undefined, the following rules are applied:
  - If there's a _, replace the last one with _code_; else append _code. So SA4 -> SA4_code; SA4_2011 -> SA4_code_2011.
  - If the name ends in 4 digits without an underscore, insert "_code_", eg. LGA2011 -> LGA_code_2011.
Eg. "cnt3" would tell us that we should use cnt3 as the table column name.
By default this is undefined.
Usually defaults to 'REGIONTYPE'.
Defaults to 2.0.
Defaults to the first value in each dimension (when undefined).
The default is null, so that the order is maintained (except for totalValueIds, which are moved to the top).
By setting this to 'name' or 'id', the values are sorted into alphabetical and/or numerical order either by name or by id,
respectively.
Currently a string, but could be extended to be an object with frequency codes as keys.
By default this is undefined, and not used as part of the query.
Place the grand total first.
If all dimensions (except region-type, region and frequency) have totals
available, then a "Display as a percentage of regional total" option becomes available.
Eg. Suppose AGE had "10" for 10 year olds, etc, plus "ALL" for all ages, "U21" and "21PLUS" for under and over 21 year olds.
Then you would want to specify {"AGE": ["ALL", "U21", "21PLUS"]}.
In this case, when the user selects one of these values, any other values will be unselected.
And when the user selects any other value (eg. "10"), if any of these values were selected, they will be unselected.
In addition, any values provided under a wildcard "*" key are used for _all_ dimensions, and are shown first in the list,
if present, eg. {"*": ["ALL"], "AGE": ["U21", "21PLUS"]}.
or, if false, the terria clock (whose current time is shown in the timeline UI). Default false.
If not defined, all values are allowed.
If a dimension is not present, all values for that dimension are allowed.
Note this will not be applied to regions or time periods.
The expression is first matched as a regular expression (sandwiched between ^ and &);
if that fails, it is matched as a literal string.  So eg. "[0-9]+" will match 015 but not A015.

Note that within a single init source:

* Catalog items with both `isEnabled` and `zoomOnEnable` set to true will override the top-level `initialCamera` property.
* If multiple catalog items have both `isEnabled` and `zoomOnEnable` set to true, it is undefined which one will affect the camera.

In the case of multiple init sources, however, the camera will reflect whatever happens in the _last_ init source, whether
it is a result of a `zoomOnEnable` or an `initialCamera`,