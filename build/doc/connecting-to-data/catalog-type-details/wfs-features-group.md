!!! note
Service (WFS) server. By contrast to a WebFeatureServiceCatalogGroup, which creates one
WebFeatureServiceCatalogItem per feature *type* (eg, one item for rivers, one for lakes),
this group creates one WebFeatureServiceCatalogItem per *feature* (eg, one item for each
individual river).
This property is observed.
CatalogMember's data. This should be overridden by children of this class.
will not be shown to the user.  In this hash, the keys should be the Title of the layers to blacklist,
and the values should be "true".
forever.  The duration is expressed as a Varnish-like duration string, such as '1d' (one day) or '10000s' (ten thousand seconds).
This property is an HTML string that must be sanitized before display to the user.
This property is not observable.
is undefined, all catalog items are added at the top level.
can just look at the network requests).
Use uniqueId to get the canonical unique id for this CatalogMember, which is present even if there is no id.
The object is of the form {title:string, content:string, key: string, confirmation: boolean, confirmText: string, width: number, height: number}.
property is observable.
its children.
Terria's initSources.  User-supplied members must be serialized completely when, for example,
serializing enabled members for sharing.
This property must be set.
ID-less features on some servers. When disabled, nameProperty is used for matching features, and will give
incorrect results if its values are not unique.