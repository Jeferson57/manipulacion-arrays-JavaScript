const numbers = [1, 2, 3, 4];

// "Si algun elemento es número par"
const rta = numbers.some(item => item % 2 === 0);
console.log(rta);

// Método .some() con objetos
// ¿Hay alguna orden que fue entregada?
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

const rta2 = orders.some(item => item.delivered);
console.log('¿Hay alguna orden entregada?: ' + rta2);


// En este ejercico queremos saber si ALGUNA fecha esta cruzada con otra
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')
const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {
                start: date.startDate,
                end: date.endDate
            },
            {
                start: newDate.startDate,
                end: newDate.endDate
            }
        );
    });
};

console.log('¿Alguna nueva fecha se sobrepone?: ' + isOverlap(newAppointment));