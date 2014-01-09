/* jshint unused:false */
'use strict';

var test = require('tap').test;
var querystring = require('querystring');
var nock = require('nock');

var track = require('../track');
var urlPath;

function setup(){
  nock('http://pixel.parsely.com:80')
  .filteringPath(function(path){
    urlPath = path;
    return '/plogger';
  })
  .get('/plogger')
  .reply(200, 'OK');
}

function tearDown(){
  urlPath = undefined;
  nock.restore();
}

test('requires idsite', function(t){
  t.plan(1);
  t.throws(function(){
    track();
  }, 'requires an idsite');
});

test('generates dates', function(t){
  setup();
  var params = {idsite: 'test'};

  track(params, function(err){
    if(err){
      t.fail(err);
    }

    var date = new Date(querystring.parse(urlPath).date);
    t.ok(!isNaN(date), 'date generated');

    t.end();
  });
});

// test('deals with bad dates', function(t){
//   var urlData;
//   var pixel = nock('http://pixel.parsely.com')
//     .filteringPath(function(path){
//       console.log(path);
//       return '/plogger';
//     })
//     .get('/plogger')
//     .reply(200, 'OK');
//   var params = {idsite: 'test', date: 'bad'};
//   track(params, function(err){
//     if(err){
//       t.fail(err);
//     }
//     var qs = url.parse(urlData, true);
//     var date = new Date(qs.query.date);
//     t.ok(!isNaN(date), 'date corrected');
//     t.end();
//   });
//   nock.restore();
// });