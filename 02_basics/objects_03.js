// singleton
// Object.create

// objects literals

const mySym = Symbol("key1");

let user = {
  name: "rohan",
  "full name": "rohan rai",
  age: 18,
  [mySym]: "mykey1",
  location: "raipur",
  email: "rohan@example.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "friday"],
};
// console.log(user["isLoggedIn"]);
console.log(user.name);
console.log(user["full name"]);
console.log(user[mySym]);
console.log(typeof user[mySym]);

user.email = "rohan@gmail.com";
// console.log(user);

// Object.freeze(user);
user.email = "rohan@ms.com";
// console.log(user);

user.greeting = function () {
  return "hello user";
};
user.greeting2 = function () {
  return `hello user ${this.name}`;
};

console.log(user.greeting());
console.log(user.greeting2());
