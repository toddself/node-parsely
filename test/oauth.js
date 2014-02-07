'use strict';

var test = require('tap').test;
var oauth = require('../lib/oauth');

test('oauth tests', function(t){
  var qs = {
    zed: 'dead',
    brad: 'tasty burger',
    mia: 'wallace',
    secretKey: 'pulp',
    consumerKey: 'fiction'
  };

  var hash = oauth(qs);

  t.equal(hash, '202a483bb59356ec4730b6e92954004de610e6ed', 'matching');
  t.end();
});
