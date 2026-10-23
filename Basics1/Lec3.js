// ******************************************************* Conversion ********************************************************

// There are two main types of type conversion in JavaScript: Explicit Type Conversion and Implicit Type Conversion (Type Coercion).

// Explicit means we, the programmer, intentionally convert the value from one type to another.
// Implicit means JavaScript automatically converts the value when necessary.


// ******************************************************* Converting into String ********************************************************
// the ans is always String
String(123)        // "123"       ✅
String(true)       // "true"      ✅
String(false)      // "false"     ✅
String(null)       // "null"      ✅
String(undefined)  // "undefined" ✅
String(NaN)        // "NaN"       ✅
String([1, 2, 3])   // "1,2,3"     ❌
String({})         // "[object Object]" ❌ but this is still type of string after conversion.

// [object Object]
//    ↑       ↑
//    │       │
//    │       └── type/category of the object
//    │
//    └── general object representation



// ******************************************************* Converting into Boolean ********************************************************
Boolean(0)          // false ✅
Boolean(1)          // true  ✅
Boolean(-1)         // true  ❌
Boolean("")         // false ✅
Boolean(" ")        // true  ❌
Boolean("false")    // true  ✅
Boolean(null)       // false ✅
Boolean(undefined)  // false ✅
Boolean(NaN)        // false ✅
Boolean([])         // true  ✅
Boolean({})         // true  ✅

// for Number only for 0 or -0 false otherwise true
// for String the always true except empty string "" for this false
// for null gives false
// for undefined give false
// for NaN not a null give false
// other than that for all give true



// ******************************************************* Converting into Number ********************************************************
Number("123")       // 123     ✅
Number("123abc")    // NaN     ✅
Number("")          // 0       ✅
Number(" ")         // 0       ✅
Number(null)        // 0       ❌
Number(undefined)   // NaN     ✅



// *********************************************** Conversion of Number and Boolean with operator *****************************************
console.log("3" * "3")
console.log("3" / "3")
console.log("23" - "4")
console.log("3" ** "2")
//Talking about othe operator other than "+" they convert the string into the number and then operate on those number


// Talking about the + operator
console.log(1+1) // number sum
console.log("1"+"1") // concat
console.log(1+"2") // concat
console.log(23+"23") // concat
console.log("23" + 23 + 1) //concat
console.log(23 + 1 + "23") //sum of forst two then concat with the last 
console.log(23 +( 1 + "23")) // concat




// *********************************************** Implicit Conversion *****************************************
console.log("10" + 5);      // 105
console.log("10" - 5);      // 5
console.log("10" * "2");    // 20
console.log("10" / "2");    // 5
console.log(10 + true);     // 11
console.log(10 + false);    // 10
console.log("5" + true);    // 5true
console.log("5" - true);    // 4



// *********************************************** The Big Conversion Trap 🔥 *****************************************
console.log(null + 1);        // 1        ✅
console.log(undefined + 1);   // NaN      ❌
console.log(null == 0);       // false    ❌
console.log(null == false);   // false    ❌
console.log(null == false);   // false    ❌
console.log(undefined == null); // true   ✅
console.log(null === 0);      // false    ✅
console.log(undefined === null); // false ✅


// *********************************************** == Conversion Trap 🔥 *****************************************
"0" == false     // true  ✅
"1" == true      // true  ✅
"" == false      // true  ✅
" " == false     // true  ❌
// [] == false   // true  ❌
// [] == 0      // true  ❌
// [1] == 1     // true  ✅