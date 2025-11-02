function sayMyName() {
  console.log("rohan");
}
// sayMyName  -> this is function reference
// sayMyName() -> now we executed the function

function loginUserMessage(username) {
  return `${username} just logged in`;
}
console.log(loginUserMessage("rohan"));
console.log(loginUserMessage()); // undefined

function shoppingCartTotal(...num) {
  let result = 0;
  for (const value of num) {
    result += value;
  }
  return result;
}
console.log(shoppingCartTotal(200, 500, 2000, 4000));

const user = {
  username: "rohan",
  price: 199,
};
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
handleObject(user);

const myNewArray = [200, 400, 600, 100];
function returnSecondValue(getarray) {
  return getarray[1];
}
