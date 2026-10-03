// This is for singleton object
const tinderuser = new Object()
// console.log(tinderuser);
tinderuser.id = 1
tinderuser.name = "sam"
tinderuser.isLoggedin = false

// console.log(tinderuser)

const regularuser = {
    email : "sopulgamining@gmail.com",
    fullname : {
        usefullname : {
            fname : "aditya",
            sname : "sharma"
        }
    }
}

// console.log(regularuser.fullname.usefullname);

const obj1 = {1:"a",2 :"b"}
const obj2 = {3:"c",4 :"d"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);


