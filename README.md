# Curso manipulacion de Arrays

#3 Resumen

El método `.forEach()` nos sirve para hacer un recorrido de los elementos de un array. 

Algo que debemos de entender es que, este método y cualquier otro los podríamos hacer con un simple ciclo `for` pero estos métodos que nos ofrece JavaScript nos permiten tener una sintaxis mucho más reducida de la que tendríamos con un ciclo `for`.

Con el método `.forEach()` solo debemos de enviar una `arrow function` como parámetro:

```jsx
const letters = ['a', 'b', 'c'];
letters.forEach(item => console.log(item));
```