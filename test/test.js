var segmentize = require('../'),
  test = require('tape'),
  glob = require('glob'),
  fc = require('turf-featurecollection')
  fs = require('fs');



test('segmentize -- uneven', function (t) {
  glob.sync(__dirname + '/fixtures/in/*.geojson').forEach(function(input) {
    var line = JSON.parse(fs.readFileSync(input));

    var result = segmentize(line, 15, 'miles');
    t.deepEqual(result, JSON.parse(fs.readFileSync(__dirname+"/fixtures/out/uneven.geojson")));
  });
  t.end();
});

test('segmentize -- line shorter than segment', function (t) {
  glob.sync(__dirname + '/fixtures/in/*.geojson').forEach(function(input) {
    var line = JSON.parse(fs.readFileSync(__dirname+"/fixtures/in/geometry.geojson"));

    var result = segmentize(line, 40, 'miles');
    t.deepEqual(result, JSON.parse(fs.readFileSync(__dirname+"/fixtures/out/shorter.geojson")));
  });
  t.end();
});