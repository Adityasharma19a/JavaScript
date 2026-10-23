"use strict"; //By this it will treate the whole Js code as newer version
// ******************************************************* Data Types ********************************************************
// JavaScript data types are broadly divided into two categories: primitive and non-primitive data types.

// Primitive data types represent a single, immutable value. JavaScript has 7 primitive data types: Number, String, Boolean, Undefined, Null, BigInt, and Symbol.

// Non-primitive data types are objects that can hold collections of values or more complex structures. The main non-primitive type is Object, 
// which includes things like Objects, Arrays, and Functions."



// There are 7 type of primitive data types are:- 

// 1 Number -> storee float and integer 
let age = 19
const cost = 132.33
console.log(typeof age);    // number
console.log(typeof cost);   // number

// 2 String -> used for text
let name = "aditya"
let name2 = 'addi'
// both are the way to write 
console.log(typeof name);    // string
console.log(typeof name2);  //String

// 3 boolean -> true/false conditional statment usually
const married = true;
console.log(typeof married); // boolean

// 4 Undefined -> This is given when no value is assigned to the variable
let email
console.log(email);
console.log(typeof email);
// Note:- Both the value and data type is undeined

// 5 null -> when we intentionally dont provide value to variable at that movement
const habbit = null
console.log(habbit);
console.log(typeof habbit);  // object
//Note->  So the value will be null but data type will be Object

// 6 BigInt -> this is Used for very large integers
let ele = 2434342334242423459090998898989889989898889888989n
console.log(ele)
console.log(typeof ele);
// if we dont use n then i will be considered as integer but in output will give approx or round off value 
// whereas if we want large value to be stored we have to use n in the last of the value

// 7 Symbol // used for solving naming conflict between user data and backend data
// Symbol is a primitive data type in JavaScript that creates unique values. It is mainly used to create unique property
// keys for objects and avoid property-name collisions.

const backendNote = Symbol("note");

const user = {
    name: "Aditya",
    note: "User's personal note"
};
// Backend adds its own note using Symbol
user[backendNote] = "Backend note";
console.log(typeof backendNote)     // type is also symbol
console.log(user.note);
console.log(user[backendNote]);

// The most important property: Every Symbol is unique
// Look at this:
let a = Symbol("id");
let b = Symbol("id");

console.log(a === b);  // false

// Symbol
// │
// ├── Primitive data type
// │
// ├── Created using Symbol()
// │
// ├── Every Symbol() call creates a unique value
// │
// ├── Description is only for identification/debugging
// │
// ├── Can be used as unique object property keys
// │
// ├── Helps prevent property-name collisions
// │
// ├── Symbol properties aren't returned by Object.keys()
// │
// ├── Can be retrieved using Object.getOwnPropertySymbols()
// │
// ├── Symbol.for() uses the global Symbol registry
// │
// └── typeof Symbol() → "symbol"