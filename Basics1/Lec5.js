// ******************************************************* String and function ********************************************************
const name = "aditya"
const repo = 50

// console.log(name + repo +" value");
// Outdated syntax ^

console.log(`My name is ${name} and my repo conunt is ${repo}`);
// Latest version to write string Knoun as String Interpolation

const gamename = new String('aditya-shar-ma')
//one more way to make here string is object
// here we get more function on string and length
// here we can accese key value pair
// console.log(gamename[0]);

// console.log(gamename.__proto__);

// console.log(gamename.length)

// console.log(gamename.toUpperCase())

// console.log(gamename.charAt(0))

// console.log(gamename.indexOf('a'))

const newgame = gamename.substring(0,5)
console.log(newgame);
// in this last indedx value will not be included

const anothergame = gamename.slice(2,5)
console.log(anothergame);
// here we can give negetive value but we cannot give in substring

const newstringone = "     aditya   sharma     "
console.log(newstringone);
console.log(newstringone.trim());
// trim is used for removing extra spaces from the both side not in between the value

const url = "https://aditya.com/aditya%20sharma"
console.log(url.replace('%20','-'))

console.log(url.includes("sundar"));

console.log(gamename.split("-"))

// HW : read about the the string function and practice

// ******************************************************* String ********************************************************


// JavaScript supports three common ways to write string literals:
let a = "Hello";            // Double quotes
let b = 'Hello';            // Single quotes
let c = `Hello`;            // Backticks (template literals)


// Are strings mutable? ❌
// Once a string value is created, its individual characters cannot be changed.
// For example:

let str = "Hello";
str[0] = "Y";
console.log(str);

// Output:
// Hello

// The attempted character change has no effect.
// However, you can assign a completely new string to a variable declared with let:


let str = "  JavaScript Developer  ";

console.log(str.length);                // 24
console.log(str.trim());                // "JavaScript Developer"
console.log(str.toUpperCase());         // "  JAVASCRIPT DEVELOPER  "
console.log(str.includes("Script"));     // true
console.log(str.indexOf("Developer"));   // 13
console.log(str.slice(2, 12));           // "JavaScript"


//slice() and substring()

let str1 = "JavaScript";

console.log(str1.slice(0, 4));      // "Java"     ✅
console.log(str1.substring(0, 4));  // "Java"     ✅

console.log(str1.slice(-6));        // "Script"   ->    slice() supports negative indices.
console.log(str1.substring(-6));    // "JavaScript" ->  substring() supports negative indices.
// doesn't throw an error for negative indices.
// It treats negative indices as 0.

console.log(str1.slice(4, 0));      // ""       slice() returns an empty string when the end position comes before the start position.
console.log(str1.substring(4, 0));  // "Java"   swaps the two arguments if the first is greater than the second.

