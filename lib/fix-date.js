'use strict';

/**
 * Ensures that dates are formatted as YYYY-MM-DD
 * @method  fixDate
 * @private
 * @param   {mixed} date String or date object
 * @returns {string} Date formatted as YYYY-MM-DD
 */
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

  var year = d.getFullYear();
  var month = d.getMonth()+1;
  var day = d.getDate();

  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;

  return [year, month, day].join('-');
};