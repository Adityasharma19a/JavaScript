function CalculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(CalculateCartPrice(200 ,400, 500,1000));

const info = {
    username : "aditya",
    prices : 99
}

function handleObject(nyObject){
    console.log(`Username is ${nyObject.username} and  price is ${nyObject.price}`);
}
//handleObject(info)
handleObject({
    username : "sam",
    price : 99
})

const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))