// > < <= >= == != 

// console.log("2">1); //TRUE
// console.log("02">1); //TRUE


console.log( null > 0); //FALSE
console.log( null == 0); //false
console.log( null >= 0); //true

/**
 * The reason is that an equality check == comparision ><>=<= works differently
 * 
 * Comparision convert null to a number , treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false
 */


console.log(undefined == 0); //false
console.log(undefined < 0); //false
console.log(undefined > 0); //false


//Strict check ===
console.log("2" == 2); //true
console.log("2" === 2 ); //false