'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {
   
   if (value < this.value) { //left.
      
      if (this.left) { //Hay algo en left?
         this.left.insert(value); //Agregamos el valor al lado izq. Recursión.
      } else {
         this.left = new BinarySearchTree(value); //Agregamos un nuevo nodo.
      }

   }

   if (value > this.value) { //right.
      
      if (this.right) { //Hay algo en right?
         this.right.insert(value); //Agregamos el valor al lado der. Recursión.
      } else {
         this.right = new BinarySearchTree(value); //Agregamos un nuevo nodo.
      }

   }

   return false;
}
//
let arbol = new BinarySearchTree(10);
arbol.insert(5);
arbol.insert(3);
arbol.insert(11);
arbol.insert (4);
console.log(arbol);
//
BinarySearchTree.prototype.size = function () {
   let contar = 0; //Creo contador.
   contar++;

   if (this.left) { //Si hay algo a la izq.
      contar += this.left.size(); //Sumalo al contador y volvé a preguntar.
   }

   if (this.right) { //Si hay algo a la der.
      contar += this.right.size(); //Sumalo al contador y volvé a preguntar.
   }

   return contar; //Retorna cuenta.
} //Siempre utilizando recursión en los if.
//
console.log(arbol.size());
//
BinarySearchTree.prototype.contains = function (value) {
   
   if (this.value === value) return true; //Es el nodo raíz?

   if (value < this.value && this.left) { //El valor es menor que el valor anterior? (Evita buscar el lado izq si el valor es mayor) Algo a izq?
      if (this.left.contains(value)) return true; //Si encuentra el valor, retorna true.
   } //Sino, seguí buscando.

   if (value > this.value && this.right) { //El valor es mayor que el valor anterior? (Evita buscar el lado der si el valor es menor) Algo a der?
      if (this.right.contains(value)) return true; //Si encuentra el valor, retorna true.
   }

   return false; //No encontró.
} 
//
console.log(arbol.contains(11));
console.log(arbol.contains(4));
console.log(arbol.contains(6));
//
BinarySearchTree.prototype.depthFirstForEach = function (cb, type) { //Callback y el tipo de orden (In, post o pre)
   //Si no tenemos tipo, hacer, por defecto, in-order (i - n - d). Sino, el tipo puede ser un pre o un post.

   switch (type) {
      case "pre-order": //Guardamos n - i - d.
         cb(this.value); //Le pasamos el valor a la callback
         if (this.left) this.left.depthFirstForEach(cb, type); //Si hay algo en left, entramos al nodo y preguntamos si, este nuevo nodo de la izq al anterior, tiene algo a su izq (No sin antes guardar el valor en la callback).
         if (this.right) this.right.depthFirstForEach(cb, type); //Pasa lo mismo, pero con la derecha.

         break;
      
      case "post-order": //Guardamos i - d - n.
         if (this.left) this.left.depthFirstForEach(cb, type); //Si hay algo en left, entramos al nodo y preguntamos si, este nuevo nodo de la izq al anterior, tiene algo a su izq. Si hay algo a su izq, entramos a este.
         if (this.right) this.right.depthFirstForEach(cb, type); //Pasa lo mismo, pero con la derecha.
         cb(this.value); //Una vez que no tengamos más nodos a la izq o der, guardamos el nodo.

         break;
   
      default: //Este sería el caso de no saber el tipo (in / i - n - d).
         if (this.left) this.left.depthFirstForEach(cb, type); //Si hay algo en left, entramos al nodo y preguntamos si, este nuevo nodo de la izq al anterior, tiene algo a su izq. Si hay algo a su izq, entramos a este.
         cb(this.value); //Guardamos el nodo de la izq.
         if (this.right) this.right.depthFirstForEach(cb, type); //Al terminar de guardar todo de la izq, pregunta si hay algo a la der. Recién entonces va a preguntar si hay algo a la der.
      
         break;
   }
}
//
BinarySearchTree.prototype.breadthFirstForEach = function (cb, pend) {
   if (!pend) { //Si no hay lista, entonces creamos la primera lista.
      var pend = []; //Nodos pendientes a procesar.
   };
   cb(this.value); //Pasamos las cb, con el nodo procesandose.

   if (this.left) pend.push(this.left); //Si hay algo en la izq, lo agregamos al pend (Así no agregamos null).
   if (this.right) pend.push(this.right); //Si hay algo en la izq, lo agregamos al pend (Así no agregamos null).

   if (pend.length > 0) return pend.shift().breadthFirstForEach(cb, pend); //No solo pasamos el cb, sino que pasamos la lista de pendientes. Esto es para que los nodos no arman su lista por separado, sin importarles si antes habían otros pendientes.
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
