'use strict';

function BinarioADecimal(num) {
   let dec = 0;

   for (let i = 0; i < num.length; i++) {
      dec += num[i] * (Math.pow(2, (num.length - 1 - i)));
   }
   return dec;
}

function DecimalABinario(num) {
   let div = num;
   let rest = "";

   while (div !== 0) {
      let restDiv = div%2;
      div = Math.floor(div/2);
      rest = restDiv + rest;
   }

   return rest;

   //return num.toString(2);
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
