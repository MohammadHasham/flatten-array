'use strict';

/**
 * Flattens deeply nested arrays
 * @param {array} array
 * @return {array}
 */

 module.exports = function flatten(arr,flat=[]){
     if(Array.isArray(arr)){
         let length = arr.length;
         for(let i=0;i<length;i++){
             flatten(arr[i],flat);
         }
     }
     else{
         flat.push(arr);
     }
     return flat;
 }