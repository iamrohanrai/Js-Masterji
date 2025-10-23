const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "flash", "batman"];

// console.log(marvelHeroes.concat(dcHeroes));

const allNewHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], [7, [6, 7, 6]]];
const myUsableAnotherArray = anotherArray.flat(Infinity);
console.log(myUsableAnotherArray);

console.log(Array.isArray("rohan"));
console.log(Array.from("rohan"));
console.log(Array.from({ name: "rohan" })); // interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
