/** 
 * How to store and access the data in memory , on that basis we have 2 categories of datatypes
 * 
 * primitive and non primitive*/


/**
 * Primitive (basic) - 7 types - these are call by value in the programing and whenever passed a new copy created and passed to other fn or logic
 * 
 *
 String
 Number
 Boolean
 null
 undefined
 Symbol
 BigInt

 */

// const id = Symbol('123');
// const anotherId = Symbol('123')

// console.log(id)
// console.log(id)
// console.log(id == anotherId) //false

// const bigNumber = 34434234524324234234234234n
// console.log(typeof bigNumber);// bitint


 /**
  * Non Primitive (reference type) - Values passed to other fn or logic is passed from same memory address, changes are reflected in same memory location
  * 
  * Array
  * Objects
  * Functions
  * 
  */

const heros = ["shaktiman", "superman", "spiderman"]

let myObj = {
    name : "satinder",
    age : "23"
}

let fn = function (){
    console.log("iam a function");
}

console.log(heros);

console.log(myObj);
console.log(fn);

 /**
  * Dynamically vs static typed lang
  * JS is a dynamically language lang. as we are not defining what is the type of variable
  */

