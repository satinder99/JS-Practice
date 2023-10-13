const score=400
console.log(score); //400

const balance = new Number(0)
console.log(balance); //[Number: 0]

/**
 * when we are declaring the number with new keyword, then it gives us Number class object.
 * 
 * so we have prototype methods availble for that class
 * 
 * you can take a look and watch all the menthods in prototype in your web browser
 */

/**
 * toString() - it will convert the number to string and then all string prototype functions we can perform on it
 * 
 * toPrecision()
 * 
 * toFixed(numberOfDecimals)
 */

console.log(balance.toString().length) //1
console.log(balance.toFixed(2)); //0.00


const otherNum = 23.45633
console.log(otherNum.toPrecision(3));//23.5

console.log(123.45633.toPrecision(3)); //123
console.log(123.55633.toPrecision(3)); //124
console.log(123.55633.toPrecision(10)); //123.55633000

console.log(1123.55633.toPrecision(3)); //123.55633000

//console.log(123.55633.toPrecision(-10)); //error



const hundreds = 100000000
console.log(hundreds.toLocaleString());//100,000,000
console.log(hundreds.toLocaleString('en-IN'));//10,00,00,000


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);


console.log("----------------------MATH-------------------");

console.log(Math.PI);//3.14
console.log(Math.floor(2.23));//2
console.log(Math.ceil(2.23));//3


console.log(Math.abs(-3));//3
console.log(Math.round(4.5));//5

console.log(Math.min(4,3,6,2,8));//2
console.log(Math.max(4,3,6,2,8));//8

console.log(Math.random());//range 0 to 1

//to show a number between 1 and 10
console.log(Math.floor((Math.random()*10) + 1));

//general approach
const min=1
const max=6

console.log(Math.floor(( Math.random() * (max-min + 1) ) + min));