// ******************************************************* This ********************************************************

// this refer to the current context
// const user = {
//     name : "aditya",
//     price : 99,

//     welcomeMessage : function(){
//         console.log(`${this.name} ,welcome to website`);
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()
//how this is diffrent from browser runing it alone
// here it is epty object
// on browser it is called window object
// console.log(this)

// ******************************************************* Arrow Funtion ********************************************************
// funtion cannot use this here
// function chai(){
//     let username = "aditya"
//     console.log(this.username);
// }
// chai()

// const chai = ()=>{
//     let username = "aditya"
//     console.log(this);
// }

// const addTwo = (num1,num2) => num1+num2 // implcicit return 

// if we used{} then we need return but if dont we dont need return 

// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(3,4))

