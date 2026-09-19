// ******************************************************* Converting into String ********************************************************
// let name = true
// console.log(typeof name);


// let name1 = Number(name)
// console.log(name1);
// console.log(typeof name1);

// value such as :- aditya, 12af
// empty string has value 0
// if we convert such value from string to integer it gives NnN (not a number)
// if we convert string containg only number then it will return the numeric value
// if we convert the null to number ans is -> 0
// if we convert the undefined to undefined ans is -> 0
// if we convert the boolean to number ans is -> 0 for false and 1 for true




// ******************************************************* Converting into String ********************************************************
// the ans is always String


// ******************************************************* Converting into Boolean ********************************************************
// For converting into Boolean
// let age = undefined
// let age2 = Boolean(age);
// console.log(age2);

// for Number only for 0 or -0 false otherwise true
// for String the always true except empty string "" for this false
// for null gives false
// for undefined give false
// for NaN not a null give false
// other than that for all give true


// *********************************************** Conversion of Number and Boolean with operator *****************************************

//Talking about othe operator other than + they convert the string into the number and then operate on those number
// console.log("3" * "3")
// console.log("3" / "3")
// console.log("23" - "4")
// console.log("3" ** "2")

// Talking about the + operator
console.log(1+1) // number sum
console.log("1"+"1") // concat
console.log(1+"2") // concat
console.log(23+"23") // concat
console.log("23" + 23 + 1) //concat
console.log(23 + 1 + "23") //sum of forst two then concat with the last 
console.log(23 +( 1 + "23")) // concat