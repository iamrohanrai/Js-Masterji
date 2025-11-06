// immediately invoked function expressions (IIFE)

// global scope se kai baar problem hoti hai toh uss pollution ko rokne ke liye bhi iife use krte

(function chai() {
  // it is a named iife
  console.log(`db connected`);
})(); // this semicolon is important, iife function  ka end krne ke liye this semicolon is imp

(() => {
  console.log(`db connected two`);
})();

((name) => {
  console.log(`db connected two ${name}`);
})("rohan");
