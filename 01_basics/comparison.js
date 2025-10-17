// console.log(5 > 3);

console.log("2" > 1); // js automatically converted 2 string as number
// but always compare same datatypes

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(null == undefined);

/*

⚙️ Step 1: JavaScript comparison rules

JS mein 3 alag-alag tarike ke comparison hote hain:

Operator type	Example	Coercion rule
Equality (==)	null == 0	Special rules for null aur undefined
Relational (>, <, >=, <=)	null > 0	Pehle values ko number mein convert karta hai (except when NaN)
⚙️ Step 2: Understand how JS treats null
Operation	Conversion Result
Number(null)	0
Number(undefined)	NaN
🧩 Step 3: Evaluate one by one
(1) null > 0

JS relational comparison karega → convert both sides to numbers:

Number(null) → 0


So comparison ban gaya:

0 > 0   // false


✅ Result: false

(2) null == 0

== mein null ke liye special rule hai:

null sirf undefined ke equal hota hai, aur kisi aur value ke nahi.

So:

null == 0  // false


✅ Result: false

(3) null >= 0

Ye bhi relational comparison hai, to dono ko number mein convert karega:

Number(null) → 0


So:

0 >= 0   // true


✅ Result: true

💡 So final summary:
Expression	How it works	Result
null > 0	0 > 0	false
null == 0	special rule → only equal to undefined	false
null >= 0	0 >= 0	true
🔍 Important note

Yahi reason hai JS confusing lagta hai — kyunki == aur >= dono alag comparison algorithm use karte hain.

So general rule:
👉 Avoid == with null and undefined,
always use strict equality (===) or explicit conversion.

*/

// strict check is === (it checks not only value but its datatypes also)

console.log(undefined >= 0); // js try to convert undefined to number (Number(undefined) → NaN)
console.log(undefined >= 1);
