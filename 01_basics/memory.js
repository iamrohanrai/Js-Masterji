// stack memory and heap memory

// primitve type uses stack memory
// non primitive type uses heap memory

// in stack memory you will get a copy and in heap memory you get reference of that memory

let myName = "rohan";
let myFullName = myName;
// console.log(myFullName);
myFullName = "rohan rai";
// console.log(myFullName);
// console.log(myName);

// let user1 = {
//   name: "rohan",
//   email: "rohan@example.com",
// };
// let user2 = user1;
// console.log(user2);

// user2.name = "rohan rai";
// console.log(user2);
// console.log(user1);

let user1 = {
  name: "rohan",
  email: "rohan@example.com",
};
let user2 = user1;
console.log(user2);

user2 = { name: "rohan rai" };
console.log(user2);
console.log(user1);
