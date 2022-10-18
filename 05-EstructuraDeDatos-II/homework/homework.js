'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  let node = new Node(value),
  current = this.head;

  if (!current) {
    this.head = node;
    this._length++;

    return node;
  }

  while (current.next) {
    current = current.next;
  }

  current.next = node;
  this._length++;

  return node;
}

LinkedList.prototype.remove = function () {
  let current = this.head;

  if (!current) return null;

  if (current.next) {
  
    while (current.next) {
      current = current.next;
    }
  
    let dev = current.value;
    this.head.next = null;
    this._length--;
    return dev;
  
  }

  let dev = current.value;
  this.head = null;
  this._length--;
  return dev;

}

LinkedList.prototype.search = function (input) { //search input === parametro función.
  let current = this.head; 
  
  /* if (!current) return null;

  if (current.value) {

    while (current.next) {
      
      if (typeof input === "function") {
        if (input(current.value)) return current.value;
      }
    
      if (current.value === input) return current.value;

      current = current.next;
    }

    if (typeof input === "function") {
      if (input(current.value)) return current.value;
    }
    
    if (current.value === input) return current.value;
    return null;
  } */

  while (current) {
    if (typeof input === "function") {
      if (input(current.value)) return current.value;
    }

    if (current.value === input) return current.value;

    current = current.next;  
  }

  return null;

}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (key) { //"Debería hash correctament" (Necesita un método hash). Necesita una key.
  let acumulador = 0;

  for (const char of key) { //Con esto recorremos cada caracter del key, dandole char como resultado. Ej. "nombre", char = n; char = o; ...
    let num = char.charCodeAt();
    acumulador += num;
  }

  return acumulador % this.numBuckets; //Debemos de retornar el mod del num/resto de una división.
} //Nos dice donde guardar los argumentos.

HashTable.prototype.set = function (key, value) { //Este recibirá 2 arg. Una clave y un valor.
  if (typeof key !== "string") throw TypeError("Keys must be strings");

  //Primero deberemos de hashear la clave.
  let index = this.hash(key); //Tenemos un índice que se hasheará.
  
  //Si no tenemos nada en el bucket (posición), agregamos una propiedad nueva a nuestro bucket.
  if (!this.buckets[index]) this.buckets[index] = {};
  //A este punto, bucket es un objeto.
  this.buckets[index][key] = value; //Guardaremos la clave con el valor al objeto. Ej. {nombre: "Max"}, si se agrega más al bucket, dará {nombre: "Max", edad: 22};
} //Siempre se guardará un objeto.

HashTable.prototype.get = function (key) {
  let index = this.hash(key); //Hasheamos la clave que esté buscando.
  let bucket = this.buckets[index]; //Buscamos la posición de la clave que nos pide.
  
  if (bucket) { //Si existe la caja.
    return bucket[key]; //Devuelve el valor de esta.
  }

  return null; //Sino, devolvé null.
}

HashTable.prototype.hasKey = function (key) {
  let index = this.hash(key);
  let bucket = this.buckets[index];

  if (bucket) {
    return bucket.hasOwnProperty(key);
  }
  
  return null;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
