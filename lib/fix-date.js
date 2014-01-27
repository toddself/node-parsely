'use strict';

module.exports = function(date){
  var d;
  if(typeof date === 'object' && date.toISOString){
    d = date;
  } else {
    d = new Date(date);
  }

  if(isNaN(d)){
    return undefined;
  }

  return d.toISOString().split('T')[0];
};