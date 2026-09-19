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

const anothergame = gamename.slice(-8,3)
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