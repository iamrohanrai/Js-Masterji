const name = "rohan";
const repoCount = 50;

// console.log(name + repoCount);
// console.log(`hello ${name}, your repo count is ${repoCount}`);

const gameName = new String("rohan-rai");
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());

// console.log(typeof gameName); //object

/*
KEY POINTS


Normally objects ka reference hota hai, aur agar unke andar kuch change hota hai, toh wo change original mai bhi reflect hota hai.
Lekin yahaan pe ek special case hai, samjhaata hoon clearly 👇

💡 Key point: toUpperCase() object ko mutate nahi karta

Wo sirf ek naya string return karta hai, original String object ke andar kuch modify nahi karta.

🔹 Example:
const gameName = new String("rohan");

const upper = gameName.toUpperCase();

console.log(upper);     // "ROHAN"
console.log(gameName);  // [String: 'rohan']


Yani:

upper ek nayi string (primitive) hai.

gameName wahi purana String object hai jisme "rohan" hai.

Koi mutation nahi hui.

🔹 Agar mutate karta (jaise array karta hai), tab hota reference effect:
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);

console.log(arr1); // [1, 2, 3, 4] — original bhi badal gaya


Yahan object (array) ka data change hua kyunki mutable hai.

🔹 Lekin strings immutable hote hain

Chahe wo primitive string ho ya String object ke andar wrapped ho —
string ka content kabhi mutate nahi hota. Har baar ek naya string ban jaata hai.

So:

Reference same rahe sakta hai (gameName object ka),

But us object ke andar ke primitive string ko JS mutate nahi karne deta.

🔸 Samjho simple words mai:
Type	Mutable hai kya?	Example of change affecting original
Object (Array, Object literal)	✅ Yes	arr2.push() → arr1 bhi change
String (Primitive ya String object)	❌ No	.toUpperCase() sirf copy deta hai

*/

/*

👉 Strings JavaScript mein immutable hote hain, matlab:

Unke content ko directly badla nahi ja sakta — har baar koi string method use karega, wo nayi string return karega, original untouched rahega.

🔹 Example 1 — toUpperCase()
let name = "rohan";
let upper = name.toUpperCase();

console.log(upper); // "ROHAN"
console.log(name);  // "rohan" (original same)

🔹 Example 2 — slice()
let str = "hello";
let part = str.slice(0, 3);

console.log(part); // "hel"
console.log(str);  // "hello" (no change)

🔹 Example 3 — replace()
let msg = "I like cats";
let newMsg = msg.replace("cats", "dogs");

console.log(newMsg); // "I like dogs"
console.log(msg);    // "I like cats"

🔹 Even trim(), concat(), substring(), padStart(), repeat() etc.

— sab naya string return karte hain.

🔸 Kyun?

JavaScript mein:

Strings are primitive types

Primitive values are immutable

Jab tum koi operation karte ho, JS ek naya string banata hai memory mein, purane ko chhodega nahi

⚡ Compare karo — Arrays mutable hote hain:
let arr = [1, 2, 3];
arr.push(4);

console.log(arr); // [1, 2, 3, 4] (original badal gaya)


Array ke methods original ko change kar dete hain — kyunki arrays mutable hain.

✅ Summary:
Type	Mutable?	Example of change
String	❌ No	str.toUpperCase() → new string banta hai
Array	✅ Yes	arr.push() → same array modify hota hai
Object	✅ Yes	property add/change hoti hai

Chahe tu "rohan" likhe ya new String("rohan"),
string ke actual characters kabhi change nahi hote — bas wrapper object change ho sakta hai ya naya string return hota hai 💪


*/

console.log(gameName.charAt(3));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 5); // last wali value include nahi hoti
console.log(newString);

const anotherString = gameName.slice(-8, 5);
console.log(anotherString);

const newwString = "         hello";
console.log(newwString);

console.log(newwString.trim());

/*

“Agar string immutable hai, fir bhi mujhe original string ko change karna ho, toh kaise karu?”

🔹 Short answer:

👉 Directly nahi kar sakta.
JavaScript me strings immutable hain — matlab unke characters ko badla nahi ja sakta.

Lekin indirectly, naya string bana ke usko dubara assign kar sakta hai.
Wo hi effectively “change” karne ka tarika hai.

🔸 Example:
let name = "   rohan   ";

name = name.trim(); // naya string return hua, humne usse name me assign kar diya

console.log(name); // "rohan"


⚡ Yahaan kya hua:

trim() ne ek new string banaya ("rohan")

Humne usko same variable me dubara daal diya

Ab purani string discard ho gayi (memory se remove ho jaayegi GC se)

🔹 Ek aur example:
let str = "hello";

str = str.toUpperCase(); // reassign kar diya

console.log(str); // "HELLO"


Yani:

Humne original string ke andar koi “in-place” change nahi kiya

Bas ek naya string bana ke usi variable me overwrite kar diya

🔸 Agar tu yeh kare:
const name = "rohan";
name = name.trim(); // ❌ Error


Toh ye chalega nahi, kyunki const variable reassign nahi ho sakta.
Use let use karna padega agar change karna hai.

✅ Summary:
Kaam	Possible?	Kaise
String ke characters ko directly badalna	❌ Nahi hota	Immutable nature
String ko "replace" karna	✅ Haan	Naya string banake same variable me reassign karo
Example	name = name.trim();	

*/

const url = "https://rohan.com/rohan%20rai";
const urlnew = url.replace("%20", "-");
console.log(urlnew);
console.log(url.includes("rai"));

console.log(gameName.split("-"));
console.log(gameName);
