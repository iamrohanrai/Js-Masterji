const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce((accu, currentVal) => {
  console.log(`acc value is ${accu} and currentval is :- ${currentVal}`);

  return accu + currentVal;
}, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: "2999",
  },
  {
    itemName: "python course",
    price: "999",
  },
  {
    itemName: "mobile dev course",
    price: "5999",
  },
  {
    itemName: "data scientist course",
    price: "12999",
  },
];
const total = shoppingCart.reduce((acc, item) => {
  return acc + parseInt(item.price); // or Number(item.price)
}, 0);
console.log(total);
