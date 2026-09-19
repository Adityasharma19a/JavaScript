// ******************************************************* array ********************************************************

const myarray = [1,5,46,"aditya"]
//Storing multiple items under the same variable
// Can be of multiple data type

// console.log(myarray[0]);
// access by index and idex start from 0

// array share shallow copies means every change made in copy  will be done in the orignal array also


// *************************************************** Way to intialize an array ********************************************************
const myhero = ["thor","superman","batman"]    // one way
const myarray1 = new Array(1,2,3,4)     //Second way

// *************************************************** Methods ********************************************************

// myarray1.push(34)     // to push in array
// myarray1.pop()       // remove the last value

// myarray1.unshift(9)    //Push in start by shifting all the element

// myarray1.shift() // pop from start

// console.log(myarray1.includes(9))
// console.log(myarray1.indexOf(9));

// const newarr3 = myarray1.join()
// console.log(myarray1);
// console.log(newarr3);
// So what happen is in data type that the join operation join all the value and give ans in string data type

// *************************************************** splice and slice ********************************************************
console.log("a",myarray1)
const mynew2 = myarray1.slice(1,3)
console.log(mynew2)
console.log("b",myarray1)

const mynew3 = myarray1.splice(1,3)
console.log("c",myarray1)
console.log(mynew3)

// so the slice do not mnuplate the orignal array whereas the splice make changes in the new array