const elements = ["Fire", "Air", "Water"];

// Unir el array de elementos con un --
const rta = elements.join('--');
console.log(rta);

// Separar el string tile por cada espacio y cada elemento será parte de un array
const title = 'Curso de mnipulación de arrays';
const urlFinal = title.split(' ').join('-').toLowerCase();

console.log(urlFinal);