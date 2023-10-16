// Immediately Invoked Function Expressions (IIFE)
/**
 * 2 benifits are
 * 1) it will be called imidiate after defination
 * 2) it will help in preventionn of mixing global variable accidently
 * 
 * syntax - ()()
 */

(function callme(){
    console.log("DB connected");
})();

(function callme2(name){
    console.log(`DB connected 2 ${name}`);
})("satinder");

console.log("outside");
