// Array

const myArr = [1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];
const myArrTwo = new Array(1, 2, 3, 4, 5);

// console.log(myArr[0]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(0);
// myArr.shift();

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join();
// console.log(typeof newArr);

// console.log(myArr);

// +++++ Slice and Splice ++++++++++

console.log("a-", myArr); // original array
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("b-", myArr); // original array unchanged in slice

const myn2 = myArr.splice(1, 3); // splice changes the original array
console.log("c-", myArr);
console.log(myn2); // original array changed
// above is the main difference in splice and slice
