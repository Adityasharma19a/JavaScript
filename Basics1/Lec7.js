// ******************************************************* Dates and Time ***************************************************************

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString())

// console.log(typeof myDate)
//So this is object type

// let myCretaeDate = new Date(2023,0,23)
// Month start from 0 in javascript

// let myCretaeDate = new Date(2023,0,23,5,3)

// let myCretaeDate = new Date("2023-01-14")
//but when we write like this then the month start from 1

// let myCretaeDate = new Date("01-14-2023")
// console.log(myCretaeDate.toLocaleString());

// let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(myCretaeDate.getTime())

// console.log(Math.floor(Date.now()/1000))
// to convert in second

let newdate = new Date()
// console.log(newdate);
// console.log(newdate.getMonth()+1);
// console.log(newdate.getDay());
newdate.toLocaleString('default',{
    weekday:"long",
    timeStyle:"long",
})
console.log(newdate);
