// ******************************************************* Scpoe ********************************************************
// this is gloibal scope
// it is accesable in any scope
let a = 234
if(true){
    // this is local scope and the value is on recognised within this block
    let a=13
    const b =23
    var c= 232
    console.log(a);  
}
console.log(a)

// console.log(a);
// console.log(b);
// console.log(c);

{} // evrey thing in this block belong to this block that is known as cope of those variabl