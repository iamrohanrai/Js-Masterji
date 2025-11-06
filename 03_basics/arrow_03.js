const user = {
  username: "rohan",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
  },
};

user.welcomeMessage();

user.username = "rohan rai";

user.welcomeMessage();

// function chai() {
//   let username = "rohan";
//   console.log(this.username);
// }
// chai();

// this jo hai object ke andar kaam krta hai

// const chai = () => {
//   let username = "rohan";
//   console.log(this.username);
// };
// chai();

// const chai = function () {
//   console.log(this);
// };
// chai();

const addtwo = (num1, num2) => {
  return num1 + num2;
};

const addThere = (num1, num2, num3) => num1 + num2 + num3; // parenthesis lagane se return likhne ki
// jarurat nahi , vs code parenthesis hata de raha hai but waha pe parenthesis hai

const my = () => ({
  username: "rohan",
});
console.log(my());
