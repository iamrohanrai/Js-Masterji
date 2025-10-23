const score = 400;

const balance = new Number(100.5264);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++ MATHS +++++++++++++

// console.log(Math);
// console.log(Math.abs(-752)); // - to +, but + will remain +

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6)); // 4 se thoda bhi upar toh 5 ho jayega (badi value)
// console.log(Math.floor(4.9)); // 4 hi lega, decimal will be removed

// console.log(Math.min(4, 3, 6, 9, 5));
// console.log(Math.max(4, 3, 6, 9, 5));

console.log(Math.round(Math.random() * 10 + 1));

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
