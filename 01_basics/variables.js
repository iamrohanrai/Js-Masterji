const account_id = 144553;
let account_email = "rohan@example.com";
var account_password = "12345";
account_city = "Raipur";

// account_id = 2; // will not work since it is const
console.log(account_id);

account_email = "rohan@changed.com"; // email will be changed
console.log(account_email);

account_city = "bengaluru";
console.log(account_city);

console.table([account_id, account_email, account_password, account_city]);

// we dont use var now due to block scope and functional scope problem
