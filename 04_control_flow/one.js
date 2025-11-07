// if
if (true) {
}
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`user power ${power}`);
// }

// const balance = 1000;

// if(balance > 500) console.log("test");

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const cardDetails = true;
const loggedInFromGoogle = false;

if ((userLoggedIn || loggedInFromGoogle) && cardDetails) {
  console.log("can do shopping");
} else {
  console.log("not allowed");
}
