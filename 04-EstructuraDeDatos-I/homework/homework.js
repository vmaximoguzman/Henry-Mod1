'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n === 1 || n === 0) {
      return 1;
   } else if (n < 0) {
      return 0;
   }

   return n * nFactorial(n - 1);
   //Si n es cualquier num positivo, el factorial de este será igual a n * factorial de (n-1).
   //No es necesario, pero también pensar que si fuera decimal, sería bueno utilizar parseInt o Math.floor para averiguar si es, o no, decimal.
}

// EJERCICIO 2
function nFibonacci(n) {
   if (n <= 1) return n;
   if (n < 0) return null;

   return nFibonacci(n-1) + nFibonacci(n-2);
   //Debe de retornar la suma de lo que haya en el último elementos más el anteúltimo.

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
