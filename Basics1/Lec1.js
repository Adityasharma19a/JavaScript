// ******************************************************* Let,var const ********************************************************

// const name = "aditya"
//const name = "divij"
// now we cannot do this will give error 


// name  = "divij"
//Also can't do this it give TypeError: Assignment to constant variable


// if(true){
//     let age = 19;
// }
// console.log(age);
// This will give error becuse let and consta re blocked scope


// if(true){
//     var age = 10;
// }
// console.log(age);
// This will work becuse var is function scoped


// function mail(){
//     var age = 20;
// }
// console.log(age);
// But this will not work 

/*
Function Scope: A variable declared with var is scoped to the entire function in which it is defined. 
It is hoisted to the top of the function and initialized as undefined. It ignores block boundaries like if or for.
*/