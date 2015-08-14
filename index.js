var along = require('turf-along');
var lineDistance = require('turf-line-distance');
var linestring = require('turf-linestring');
var fc = require('turf-featurecollection');


module.exports = function(line, segment_length, units) {

  var coordinates = (line.coordinates || line.geometry.coordinates).slice();

  var result = [];

  while (coordinates.length > 1) {
    var endpt = along(linestring(coordinates), segment_length, units);
    var tempcoords = [];
    for (var i = 0; i < coordinates.length; i++) {
      tempcoords.push(coordinates[i]);

      if (lineDistance(linestring(tempcoords), units) >= segment_length) {
        tempcoords.pop();
        tempcoords.push(endpt.geometry.coordinates);
        coordinates = coordinates.slice(i);
        coordinates.unshift(endpt.geometry.coordinates);
        result.push(tempcoords);
        break;
      }

      if (i == coordinates.length - 1) {
        coordinates = [];
        result.push(tempcoords);
      }
    }
  }
  
  return fc(result.map(function(coords) {
    return linestring(coords);
  }));
};