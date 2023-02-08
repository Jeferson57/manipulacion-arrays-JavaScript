# Curso manipulacion de Arrays

## Mutabilidad e inmutabilidad

Los conceptos de **mutabilidad** e **inmutabilidad** son muy importantes para los siguientes métodos de arrays. Existen métodos mutables que cambian el array original; e inmutables que devuelven un array diferente al original. 

### Referencia en memoria

En JavaScript, cada estructura está guardad en una referencia en memoria, por lo que, si cambiamos un elemento de array, también lo hacemos en esa referencia. Al clonar arrays, se crea un nuevo array que tiene las mismas referencias en memoria que el original, por lo que, si se realizan un cambio en el original, también cambiará en la copia. 

- Mutable es aquella acción que cambia el valor en la referencia en memoria del elemento del array origina.
- Inmutable es la acción en la que se cambia el valor, pero en una referencia diferente del original.

## forEach()

El método `.forEach()` nos sirve para hacer un recorrido de los elementos de un array. 

Algo que debemos de entender es que, este método y cualquier otro los podríamos hacer con un simple ciclo `for` pero estos métodos que nos ofrece JavaScript nos permiten tener una sintaxis mucho más reducida de la que tendríamos con un ciclo `for`.

Con el método `.forEach()` solo debemos de enviar una `arrow function` como parámetro:

```jsx
const letters = ['a', 'b', 'c'];
letters.forEach(item => console.log(item));
```

## map()

El método `.map()` es el más útil para hacer transformaciones en JavaScript.  Este método lo que hace es transformar cada elemento de un array a otro elemento diferente. 

Hay que tener en cuenta que `.máp()` es **inmutable**, quiere decir que no modificar el array original, sino que crea uno nuevo con los resultados de la transformación. Otra cosa a tener en cuanta es que cuando se ejecute esta transformación vamos a recibir un array con la misma cantidad de elemento, no más ni menos.

```jsx
const letters = ['a', 'b', 'c'];
const newArray = letters.map(item => item + '++');

console.log(newArray);
```