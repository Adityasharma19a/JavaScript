// ******************************************************* Object ********************************************************

// two ways to declare an object 1.laterals and 2. constructor
// Singleton -> when created by constructor 
// Multiple -> when created by letrals


// object.create() // singleton made by constructor
const mysym = Symbol("mykey");

const jsUser = {
    name : "aditya",
    "full name" : "aditya sharma",
    [mysym] : "hello symbol",
    age : 18,
    location : "talwara",
    loggedIn : false, 
    lastlogined : ["monday","friday"]
}
// work in (key : value)form
//js consider key as a string

// console.log(jsUser.age);
// // access a object but one more way better 
// console.log(jsUser["age"]);
// why like string -> becuse js consider key as a string

// now why we need two mwthod becuse if we have give ourselfs key as string then we cannot access it using .
// console.log(jsUser.full name);    // error

// console.log(jsUser["full name"]);
// This can access the string key 

// console.log(jsUser[mysym]); acces a symbol

// jsUser.name = "divij" // change value of object
// Object.freeze(jsUser)   // object freeze
// jsUser.loggedIn = true

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello jsuser")
}

console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`hello jsuser ${this.name}`);
}
console.log(jsUser.greeting2());