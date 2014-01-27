'use strict';

var test = require('tap').test;
var fixDate = require('../lib/fix-date');

test('fix-date', function(t){
  t.equal(fixDate(new Date('May 5, 2001')), '2001-05-05', 'dates match');
  t.equal(fixDate(new Date('your mom')), undefined, 'undefined');
  t.equal(fixDate('May 5, 2001'), '2001-05-05', 'dates match');
  t.end();
});