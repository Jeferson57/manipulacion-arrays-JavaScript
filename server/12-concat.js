const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];
const moreElements = [5, 5, 6, 6];

// Fusionamos los array con el método .concat()
const rta = elements.concat(otherElements, moreElements);
console.log('concat', rta);


// Fusionamos los array con el spread operator
const rta2 = [...elements, ...otherElements];
console.log('...', rta2);

// Fusionamos los array con un push usando el spread operator
elements.push(...otherElements);
console.log(elements);