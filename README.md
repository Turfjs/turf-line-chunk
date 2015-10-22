# turf-line-chunk

Divide a linestring into chunks of a specified length


### `turf.line-chunk(line, segment_length, units)`

Divides a LineString into chunks of a specified length.

### Parameters

| parameter        | type                    | description                                   |
| ---------------- | ----------------------- | --------------------------------------------- |
| `line`           | Feature\.\<LineString\> | the line to split                             |
| `segment_length` | Number                  | how long to make each segment                 |
| `units`          | String                  | can be degrees, radians, miles, or kilometers |


### Example

```js
var line = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        -86.28524780273438,
        40.250184183819854
      ],
      [
        -85.98587036132812,
        40.17887331434696
      ],
      [
        -85.97213745117188,
        40.08857859823707
      ],
      [
        -85.77987670898438,
        40.15578608609647
      ]
    ]
  }
};

//= line 

var segments = turf.lineChunk(line, 15, 'miles');

segments.features.forEach(function(ft, ind) {
  ft.properties.stroke = (ind % 2 === 0) ? '#f40' : '#389979';
});

//= segments
```


**Returns** `FeatureCollection.<LineString>`, collection of line segments

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-line-chunk
```

## Tests

```sh
$ npm test
```


