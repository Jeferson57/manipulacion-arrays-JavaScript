const numbers = [1, 30, 49, 29, 10, 13, 30];
const rta = numbers.find(item => item === 30);

console.log(rta);


// Devuelve el objeto que tenga dicho id 
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const rta2 = products.find(item => item.id === '🍔');
console.log(rta2);

const rta3 = products.findIndex(item => item.id === '🍔');
console.log(rta3);