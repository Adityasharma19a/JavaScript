/*
1. Let can only be declared Once but can be changed later in the same module
2. It is block scoped {}  can only be used within the block it is declared
*/
const accountId = 132433
/*
1. Let can only be declared Once but can be changed later in the same module
2. It is block scoped {} can only be used within the block it is declared
*/
let accountName = "Aditya"
/*
1. Let can only be declared Once but can be changed later in the same module
2. It is block scoped {}  can only be used within the block it is declared
*/
var accountEmail = "aditya@gmail.com"

console.log(accountId);
console.log(accountEmail);
accountEmail = "manik@gmail.com"
console.log(accountEmail);
accountName = "manik"
console.log(accountName);

console.table([accountEmail,accountId,accountName])


// If we define but do not intialize a value then it is undefined
let accountState
console.log(accountState);
