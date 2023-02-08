const words = ['spray', 'limit', 'elite', 'exuberant'];
const rta = words.filter(item => item.length >= 6);

console.log('Respuesta de filter():', rta);
console.log('Array original', words);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
    },
];

const rta2 = orders.filter(item => item.delivered && item.total >= 100);
console.log(rta2, orders);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    });
}

console.log(search('Nico'));