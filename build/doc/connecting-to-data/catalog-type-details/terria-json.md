!!! note
TerriaJsonCatalogFunction's inputs property, and expects to receive back TerriaJS catalog/share JSON.

When this `CatalogFunction` is added to the catalog, TerriaJS automatically creates a user interface for it
based on the inputs. When the user clicks "Run Analysis", it issues an HTTP GET with the user-specified
inputs supplied as part of the query string. The returned TerriaJS catalog/share JSON can add items
to the workbench, configure the catalog, change the camera view, and more.

Example:

```
{
  "name": "Simple Example",
  "type": "terria-json",
  "url": "https://putsreq.com/PK2GvS6jHfWhlBmkadrG",
  "inputs": [
    {
      "id": "position",
      "type": "point",
      "name": "Position",
      "description": "The position to pass to the service.",
      "formatter": "longitudeCommaLatitude"
    },
    {
      "id": "someOtherParameter",
      "type": "string",
      "name": "Some Other Parameter",
      "description": "This is another parameter that will be passed to the service."
    }
  ]
}
```

For this `CatalogFunction` TerriaJS will present a user interface with two elements: a position on the map
and a string. When invoked, TerriaJS will GET a URL like:
`https://putsreq.com/PK2GvS6jHfWhlBmkadrG?position=151.0%2C-33.0&someOtherParameter=some%20text`

The service is expected to return JSON using the `application/json` content type, and have a body
with any of the following:

   * A single catalog member

For example:

```
{
  "type": "csv",
  "data": "POSTCODE,value\n2000,1"
}
```

The catalog member will be added to the catalog inside a catalog group directly below this
`CatalogFunction`. Catalog items will also be added to the workbench unless `isEnabled` is
explicitly set to false.

If the catalog item does not have a name, as in the above example, its name will be the name of
this `CatalogFunction` followed by the date and time it was invoked in ISO8601 format. If the catalog item
does not have a description, it will be given a description explaining that this is the result of executing
a service and will include the input parameters sent to the service.

   * An array of catalog members

An array of catalog members as described above.

For example:

```
[
  {
    "type": "csv",
    "data": "POSTCODE,value\n2000,1"
  },
  {
    "name": "My Result WMS Layer",
    "type": "wms",
    "url": "http://ereeftds.bom.gov.au/ereefs/tds/wms/ereefs/mwq_gridAgg_P1A",
    "layers": "Chl_MIM_mean"
  }
]
```

   * A catalog file

For example:

```
{
  "catalog": [
    {
      "name": "National Datasets",
      "type": "group",
      "items": [
        {
          "name": "My Result WMS Layer",
          "type": "wms",
          "url": "http://ereeftds.bom.gov.au/ereefs/tds/wms/ereefs/mwq_gridAgg_P1A",
          "layers": "Chl_MIM_mean",
          "isEnabled": true
        }
      ]
    }
  ],
  "initialCamera": {
    "west": 141.0,
    "south": -26.0,
    "east": 157.0,
    "north": -9.0
  }
}
```

Please note that in this case, catalog items are _not_ automatically enabled or named.
The `name` property is required. If `isEnabled` is not set to `true`, the catalog item
will not appear on the workbench.

   * Share data

Similar to the above except that it allows multiple init sources (catalog files) and has a
version property for backward compatibility. For example:

```
{
  "version": "0.0.05",
  "initSources": [
    {
      "catalog": [
        {
          "name": "National Datasets",
          "type": "group",
          "items": [
            {
              "name": "My Result WMS Layer",
              "type": "wms",
              "url": "http://ereeftds.bom.gov.au/ereefs/tds/wms/ereefs/mwq_gridAgg_P1A",
              "layers": "Chl_MIM_mean",
              "isEnabled": true
            }
          ]
        }
      ],
    },
    {
      "initialCamera": {
        "west": 141.0,
        "south": -26.0,
        "east": 157.0,
        "north": -9.0
      }
    }
  ]
}
```
This property is observed.
CatalogMember's data. This should be overridden by children of this class.
forever.  The duration is expressed as a Varnish-like duration string, such as '1d' (one day) or '10000s' (ten thousand seconds).
This property is not observable.
can just look at the network requests).
Use uniqueId to get the canonical unique id for this CatalogMember, which is present even if there is no id.
The object is of the form {title:string, content:string, key: string, confirmation: boolean, confirmText: string, width: number, height: number}.
property is observable.
is observable.
Terria's initSources.  User-supplied members must be serialized completely when, for example,
serializing enabled members for sharing.