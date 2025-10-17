// PRIMITIVE DataType
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

/*

Dynamically typed languages (jaise JavaScript, Python) me variable ka type runtime pe decide hota hai — aur badal bhi sakta hai.

let x = 10;      // number
x = "hello";     // string — allowed!
x = true;        // boolean — still allowed

JavaScript me kya hota hai:

Type check runtime pe hota hai.

Variable declare karte time type dena nahi padta (let, const, var use hota hai).

Isi wajah se JS flexible hai, par kabhi-kabhi bugs bhi milte hain due to implicit type conversion (type coercion).

🧠 Bonus: TypeScript, jo JavaScript ka superset hai, statically typed version provide karta hai compile-time safety ke liye.

*/

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const temp = null;
let userEmail;

const id = Symbol("123");

const bigNumber = 3456465454564587874545645646456n;

// NON PRIMITIVE DataType or REFERENCE Type
// Array, Objects, Functions

const heroes = ["shaktiman", "krish", "naagraj"];

const user = {
  name: "rohan",
  age: "22",
};

const myFunction = function () {
  console.log("hello");
};
