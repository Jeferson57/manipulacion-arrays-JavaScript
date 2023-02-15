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

// Output: a
//         b
//         c
```

## map()

El método `.map()` es el más útil para hacer transformaciones en JavaScript.  Este método lo que hace es transformar cada elemento de un array a otro elemento diferente. 

Hay que tener en cuenta que `.máp()` es **inmutable**, quiere decir que no modificar el array original, sino que crea uno nuevo con los resultados de la transformación. Otra cosa a tener en cuanta es que cuando se ejecute esta transformación vamos a recibir un array con la misma cantidad de elemento, no más ni menos.

```jsx
const letters = ['a', 'b', 'c'];
const newArray = letters.map(item => item + '++');

// Output: [ 'a++', 'b++', 'c++' ]
```

## Map Reloaded

Cuando trabajamos con objetos en el método `.map()` estamos generando una modificación a la referencia del objeto que está en memoria. Así que cuando hacemos una transformación a un objeto con el método `.map()` estamos transformando la referencia del objeto y, por ende, también se va a modificar el objeto original.

Para poder crear una copia sin modificar la referencia en memoria vamos a asegurarnos de generar un nuevo objeto con el `spread operador`. Por ejemplo, si queremos agregar una nueva propiedad a un objeto vamos a clonar los atributos del objeto con el `spread operador` y luego agregamos la propiedad que deseamos:

```jsx
// Tenemos un array de objetos, donde cada objeto es una orden y queremos agregar una nueva propieda a cada objeto
orders.map((item) => {
        return {
            // Para evitar modificar la referencia en momoria clonamos todas las propiedades del objeto en un nuevo objeto
            ...item,
            // Agregamos la propiedade que queremos
            tax: .19
        };
    }
)

// De esta forma nos aseguramos de que el array original se queda igual pero el array que nos devuelve .map() es totalmente distinto
```

## filter()

EL método `.filter()` nos ayuda a filtrar los elementos de un array con base a un condicional. Los elementos que cumplan ese condicional van a ser parte de ese nuevo array.

Quiere decir que este método es inmutable, ósea que no cambia el array original, sino que crear uno nuevo con los elementos que cumplan con la condición.

```jsx
// Aquí filtramos el array word para que nos devuelva un nuevo array que tenga solo los elementos que tangan más y 6 letras.
const words = ['spray', 'limit', 'elite', 'exuberant'];
const rta = words.filter(item => item.length >= 6);

// Output: [ 'exuberant' ]
```

## reduce()

El método `.reduce()` hace exactamente como su nombre lo dice, reduce un array de elementos a un solo valor. Este método no devuelve otro array, en algunos casos si lo hace, pero depende más del algoritmo que estemos programando.

Este método recibe dos parámetros; el primero es una función y el segundo es el estado inicial. La función que recibe debe de recibir dos parámetros que es; el valor acumulado (el resultado de la operación que ejecuta) y el valor actual (cada elemento del array), y el estado inicial representa el valor con el cual empieza la operación. 

```jsx
const totals = [1, 2, 3, 4];
const rta = totals.reduce((sum, element) => sum + element, 0);

// Output: 10
```

## some()

El método `.some()` precisamente nos dice “si **alguno** cumple con la condicional” nos retorna un valor booleano.

```jsx
const numbers = [1, 2, 3, 4];

// "Si algun elemento es número par"
const rta = numbers.some(item => item % 2 === 0);

// Output: true
```

## every()

El método `.every()` es totalmente lo opuesto de `.some()`. En el caso de este elemento, todos los elementos deben de cumplir la condición para retornar un valor booleano.

```jsx
const numbers = [1, 30, 49, 29, 10, 13];
const rta = numbers.every(item => item <= 40);

// Output: false
```