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


