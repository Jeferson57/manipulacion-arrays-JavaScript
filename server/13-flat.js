const matriz = [
    [1, 2, 3, [2, 4, 5, [6, 7, 8]]],
    [4, 5, 6],
    [7, 8, 9]
]

const rta = matriz.flat(3);
console.log(rta);