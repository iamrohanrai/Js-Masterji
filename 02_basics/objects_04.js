const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isloggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "rohan",
      lastName: "rai",
    },
  },
};
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "4",
};
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

console.log(Object.keys(tinderUser)); // get keys in array
console.log(Object.values(tinderUser)); // get values in array
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));
