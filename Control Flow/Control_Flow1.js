// // if
// if(true){
//     // execute when true;
// }
// if(false){
//     // this will not get executeed
// }
// const isUserLoggedIn = true;
// if(4==="4"){
//     console.log("true")
// }else{
//     console.log("false");
// }
// conditional operators: <, >, >=, <=, ==(we check is it equal), !=, !==(also check the data type strict checking), ===(also check the data type strict checking)
// Falsy value which are aassume to be false -> -0, 0, false, 0n, "", null, undefined, NaN
// all other are Truthy values even [], "0", 'false', " ", {}, function(){} (empty function)

// how to check object is empty 
// const emptyobj = {}
// if(Object.keys(emptyobj).length === 0){
//     console.log("empty")
// }

//nullish coalesing operator (??) : null undefined

let val1;
val1 = 23 ?? 10

console.log(val1);
// this chedck if value is null or undefined then it will assign other value otherwisw null

//ternnary operator
// condition ? true : false