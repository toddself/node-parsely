'use strict';

var test = require('tap').test;
var np = require('../');

test('all attached', function(t){
  var libs = ['track', 'analytics', 'referrers', 'shares', 'search', 'recommendations'];
  libs.forEach(function(lib){
    t.ok(np[lib], lib+' lib was not loaded');
  });
  t.end();
});