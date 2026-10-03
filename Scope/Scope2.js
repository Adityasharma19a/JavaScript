function one(){
    const username = "aditya"
    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website)
    two()
}

one()

if(true){
    const username = "aditya"
    if(username === "aditya"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

// intersting concept 👍🏻
console.log(addOne(5))
// funtion can be made this 
function addOne(num){
    return num+1;
}

// and also this but here we cannnot access like this 
addTwo(5)
const addTwo = function(num){
    return num + 2
}
