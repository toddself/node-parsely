'use strict';

var nock = require('nock');
var test = require('tap').test;
var analytics = require('../analytics');
var urlPath;

function setUp(){
  nock('http://api.parsely.com:80')
    .filteringPath(function(path){
      urlPath = path;
      return '/test';
    })
    .get('/test')
    .reply(200, '{}');
}

test('by type', function(t){
  setUp();
  analytics.byType('test', 'posts', null, null, function(){
    console.log('url', urlPath);
  });
  t.end();
});