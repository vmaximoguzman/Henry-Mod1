'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n === 1 || n === 0) {
      return 1;
   } else if (n < 0) {
      return 0;
   }

   return n * nFactorial(n - 1);
}

// EJERCICIO 2
function nFibonacci(n) {
   if (n <= 1) {
      return n;
   }
   return nFibonacci(n-1) + nFibonacci(n-2);
}

// EJERCICIO 3
function Queue() {
   let queue = []
   this.enqueue = enqueue;
   this.dequeue = dequeue;
   this.size = size;

   function enqueue(el) {
      return queue.push(el);
   }

   function dequeue() {
      return queue.shift();
   }

   function size() {
      return queue.length;
   }
   
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
