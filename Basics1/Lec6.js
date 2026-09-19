// ******************************************************* Nums and Maths ********************************************************
// const score = new Number(100)
// console.log(score);

// console.log(score.toString().length);
// console.log(score.toFixed(2));

// const othernumber = 233.552442
// console.log(othernumber.toPrecision(3));
// this

const hund = 100000
// console.log(hund.toLocaleString())
// Default it is for US
// console.log(hund.toLocaleString("en-IN"))
// This will make this as indian type

// ******************************************************* Maths *******************************************************************
console.log(Math);
console.log(Math.abs(-434));
console.log(Math.round(4.32));
console.log(Math.ceil(4.23));
console.log(Math.floor(4.63));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());
// This value always come between 0 to 1

console.log(Math.random()*10)
// This value always come between 0 to 9
console.log(Math.random()*10 + 1)
// This value always come between 1 to 9

console.log((Math.random()*10) + 1);
// This value always come between 1 to 9 just to be safe for bodmass
console.log(Math.floor(Math.random()*10) + 1);
// To always get the lowest value

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// here min will declare the minimum value