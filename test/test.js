var segmentize = require('../'),
  test = require('tape'),
  fc = require('turf-featurecollection')
  fs = require('fs');

test('segmentize -- uneven', function (t) {
  var line = JSON.parse(fs.readFileSync(__dirname+"/fixtures/in/line.geojson"));

  var result = segmentize(line, 15, 'miles');
  t.deepEqual(result, JSON.parse(fs.readFileSync(__dirname+"/fixtures/out/uneven.geojson")));
  t.end();
});

test('segmentize -- line shorter than segment', function (t) {
  var line = JSON.parse(fs.readFileSync(__dirname+"/fixtures/in/line.geojson"));

  var result = segmentize(line, 40, 'miles');
  t.deepEqual(result, fc([line]));
  t.end();
});