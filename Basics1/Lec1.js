// ******************************************************* Let,var const ********************************************************

// const name = "aditya"
// const name = "divij"
// now we cannot do this will give error 


name  = "divij"
//Also can't do this it give TypeError: Assignment to constant variable


if(true){
    let age = 19;
}
console.log(age);
// This will give error becuse let and consta re blocked scope


if(true){
    var age = 10;
}
console.log(age);
// This will work because var is function scoped


function mail(){
    var age = 20;
}
console.log(age);
// But this will not work 

/*
Function Scope: A variable declared with var is scoped to the entire function in which it is defined. 
It is hoisted to the top of the function and initialized as undefined. It ignores block boundaries like if or for.
*/

/*
Hoisting is the behavior of JavaScript where declarations are registered during the setup of a scope before the code in that scope is executed.

Declaration:- Creating/registering a variable name
Initialization:- Giving the variable its initial value
Assignment:- Changing the value of an already existing variable

1. var declarations are hoisted and initialized with undefined.
2. let and const declarations are also registered during the setup phase.However, unlike var, they are not initialized with undefined. 
Instead, they remain inaccessible until execution reaches their declaration.

TDZ stands for Temporal Dead Zone.
The period between entering a scope and reaching the declaration of a let or const variable during which the variable cannot be accessed.

Because function declarations are registered during setup with the function itself available.

Function declaration
greet();

function greet() {
    console.log("Hello");
}
✅ Works.

Function expression
greet();

var greet = function () {
    console.log("Hello");
};
❌ Gives:
TypeError

An arrow function stored in a let or const variable follows the rules of that variable.
Example:
greet();

const greet = () => {
    console.log("Hello");
};

This gives:
ReferenceError

because greet is a const variable and is in the TDZ before its declaration.
The fact that it contains a function doesn't change the const variable's behavior.


Hoisting is the behavior in JavaScript where declarations are registered during the creation/setup of a scope before the code in that scope is executed. var declarations are initialized with undefined, while let and const remain in the Temporal Dead Zone until their declaration is reached. Function declarations are also hoisted and are available to be called before their declaration in the code.

And if you're asked "What is TDZ?", say:
The Temporal Dead Zone is the period from entering a scope until the declaration of a let or const variable is reached, during
 which the variable exists but cannot be accessed. Accessing it during this period results in a ReferenceError.
*/