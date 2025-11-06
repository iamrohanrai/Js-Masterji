// browser ke andar jaate hai waha pe jo scope hota hai wo alag hota hai and node pe phir check krte
// toh node ka global scope alag hai

function one() {
  const userName = "rohan";

  function two() {
    const lastName = "rai";
    console.log(userName);
  }
  //   console.log(lastName);

  two();
}

one();

if (true) {
  const name = "rohan";
  if (name === "rohan") {
    const website = " youtube";
    console.log(name + website);
  }
  //   console.log(website);
}
// console.log(name);

// ++++++++++++++ interesting +++++++++++++++++

function addone(num) {
  return num + 1;
}
addone(4);

const addTwo = function (num) {
  return num + 2;
};
addTwo(4);

// hoisting concept in js
