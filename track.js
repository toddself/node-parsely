'use strict';

var querystring = require('querystring');
var hyperquest = require('hyperquest');

function validateParams(params){
    if(!params.idsite){
    throw new Error('You must supply the idsite in params');
  }

  if(!(params.date instanceof Date)){
    params.date = new Date(params.date);
  }

  if(isNaN(params.date)){
    params.date = new Date();
  }

  params.date = params.date.toISOString();

  return params;
}

module.exports = function(params, user_agent, cb){
  if(typeof user_agent === 'function'){
    cb = user_agent;
    user_agent = 'node-parsely/'+require('./package').version;
  }

  if(typeof cb !== 'function'){
    cb = function(){};
  }

  params = validateParams(params);
  params.rand = Math.floor(Math.random()*(1000000000));

  var query = querystring.stringify(params);
  var url = 'http://pixel.parsely.com/plogger?'+query;
  var opts = {
    headers: {
      'User-Agent': user_agent
    }
  };

  hyperquest(url, opts)
    .on('error', function(err){
      cb(err);
    })
    .on('end', function(){
      cb(null);
    });
};