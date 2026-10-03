// All are Array Specific loops 
// for off loop 
// const arr = [1,2,3,4,5,6]
// for (const num of arr) {
//     console.log(num);
    
// }

// const greet = ["hello","my","name","is","aditya"]
// for(const gree of greet){
//     console.log(gree)
// }

// Maps
// Key : Value pair, value stay in order, unique value
// const map = new Map()
// map.set(1,"a")
// map.set(2,"b")
// // console.log(map)

// for(const [key,value] of map){
//     console.log(`${key} :- ${value}`)
// }
// this method does not itrate object error that object is not interable 

// const myobject = {
//     js : 'javascript',
//     cpp : 'c++',
//     rb : 'ruby',
//     swift : 'swaift by apple'
// }

// for (const key in myobject) {
//     console.log(`${key} is shortcut for ${myobject[key]}`)
// }
// not only for object

// const pro  = ["java","cpp","ruby","c"]
// for (const key in pro) {
//     console.log(`${key} for ${pro[key]}`)
// }
// // cannot itratr over map 


// mostly used array (for each)
const pro  = ["java","cpp","ruby","c","swift"]
pro.forEach(greet => {
    console.log(greet);
    
});