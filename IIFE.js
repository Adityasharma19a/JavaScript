// IIFE :- Immediately invoked function expression
// named iife
(function chai(){
    console.log(`Database connected`);
})();
// unamed iefe
// so to do this we have to use semicolon expecitly when two iife in same file
((name)=>{
    console.log(`Database connected ${name}`);
})("aditya")
// the function imidetly invoked because some time problem with the global scope polution sometime so remove that polution we use iife 