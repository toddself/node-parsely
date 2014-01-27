'use strict';

var test = require('tap').test;
var cleanObj = require('../lib/clean-obj');

test('clean-obj', function(t){
  var dirty = {
    a: 'aaron',
    b: 'banana',
    c: null,
    d: 'dog'
  };

  var clean = {
    a: 'aaron',
    b: 'banana',
    d: 'dog'
  };

  t.deepEqual(cleanObj(dirty), clean, 'matching');
  t.end();
});
