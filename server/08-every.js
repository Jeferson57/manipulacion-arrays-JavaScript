const numbers = [1, 30, 49, 29, 10, 13];
const rta = numbers.every(item => item <= 40);
console.log('¿Todo los elementos son menores a 40?: ' + rta);

// Reto: evalua si todos los miembros del equipo son manores a 15 años
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 15,
    },
];

const rta2 = team.every(member => member.age <= 15);
console.log('¿Todos los miembros son menores de 15 años?: ' + rta2);