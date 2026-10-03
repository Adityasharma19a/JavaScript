// ******************************************************* Functions ********************************************************


function sayMyName(){
    console.log("r");
    console.log("w");
    console.log("w");
    console.log("q");   
}

// // sayMyName is the refrence 
// sayMyName
// // sayMyName() is the execution
// sayMyName()

function addTwoNumbers(number1,number2){ // these are parameters
    // let result = number1 + number2
    // return result
    // console.log("aditya"); // this will not get print becuse after return 

    return number1+number2
}
const result = addTwoNumbers(3,5) // arguments are those which are passed to function
// console.log(result);


function loginUser(username = "sam"){
    if(!username){
        console.log("please enter the name");
        return
    }
    return `${username} just logged in`
}

// loginUser("aditya"); value will be passed but not print we have to console.log 
// console.log(loginUser("aditya")) this will give the value
console.log(loginUser("aditya"));