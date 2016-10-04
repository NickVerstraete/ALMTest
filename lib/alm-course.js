'use strict';

exports.sum = function(a,b) {
   if (typeof a === 'undefined') {
       throw "not a number";
   }

   return a + b;
};
