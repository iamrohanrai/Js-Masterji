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

/*

🧩 Code 1:
let user1 = {
  name: "rohan",
  email: "rohan@example.com",
};
let user2 = user1;
console.log(user2);

user2.name = "rohan rai";
console.log(user2);
console.log(user1);

🔍 Explanation:

user1 ek object hai.

user2 = user1; iska matlab hai user2 aur user1 dono ek hi object ko memory me point kar rahe hain (same reference).

Toh jab tu likhta hai:

user2.name = "rohan rai";


Toh wo change actually usi object ke andar ho raha hai, jise user1 bhi refer karta hai.

🧠 Output hoga:
{ name: 'rohan', email: 'rohan@example.com' }
{ name: 'rohan rai', email: 'rohan@example.com' }
{ name: 'rohan rai', email: 'rohan@example.com' }


👉 Yani dono change ho gaye, kyunki dono same object ko refer kar rahe the.

🧩 Code 2:
let user1 = {
  name: "rohan",
  email: "rohan@example.com",
};
let user2 = user1;
console.log(user2);

user2 = { name: "rohan rai" };
console.log(user2);
console.log(user1);

🔍 Explanation:

Pehle line me same hai: user2 = user1; → dono same object ko point kar rahe hain.

Lekin fir tu likhta hai:

user2 = { name: "rohan rai" };


Ye line naya object create karti hai, aur user2 ko us naye object ka reference de deti hai.
user1 abhi bhi purane object ko point kar raha hai.

🧠 Output hoga:
{ name: 'rohan', email: 'rohan@example.com' }
{ name: 'rohan rai' }
{ name: 'rohan', email: 'rohan@example.com' }


👉 Yani user1 unchanged raha, aur user2 ab naye object ko refer kar raha hai.

⚖️ Summary:
Concept	Code 1	Code 2
user2 same object ko point karta hai	✅	❌ (baad me alag object)
Change user2.name affects user1	✅ Yes	❌ No
Final user1 changed?	✅ Yes	❌ No

Aasan language me:

Code1 me reference same tha, isliye dono change hue.
Code2 me naya object assign kiya gaya, isliye user1 unaffected raha.

*/
