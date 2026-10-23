// ******************************************************* Stack and heap memeory ********************************************************

// ******************************************************* Stack memory ******************************************************************

/*
Stack memory is a memory area used by the JavaScript runtime to manage function execution and temporary execution data. 
Whenever a function is called, a stack frame (execution context) is created and pushed onto the call stack. 
When the function finishes execution, its stack frame is removed. The call stack follows the LIFO principle — Last In, First Out.
*/

// Fast and automatically managed.
// Simplified model: primitive values are often represented directly in stack-like storage.

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20


// Used for dynamically allocated objects.
// Objects, arrays, and functions are commonly represented in heap-managed memory.

// ******************************************************* Heap memory ******************************************************************

/*

*/

let user1 = { name: "Aditya" };
let user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul

// Both variables refer to the same object

// user1 ──┐
//         ├──→ { name: "Rahul" }
// user2 ──┘

// ⭐ Key Difference

// Primitive → value is copied

// Object → reference is copied

// ⚠️ Important

// > **"Primitive = Stack, Object = Heap" is a simplified mental model.**
// > JavaScript does not specify a particular physical memory layout.

// The important concept is:

// > **Primitive assignment creates an independent value; object assignment copies a reference to the same object.**





// A shallow copy creates a new outer object, but if the object contains nested objects/arrays, those nested objects are still shared.