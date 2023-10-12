/**
 * "hello"
 * 'hello'
 * 
 * + operator concatenate the 2 strings
 */


const name = "satinder"
const repoCount = 10

// console.log(name + repoCount + "value"); //old version of printing the string

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation --> modern way

const gameName = new String("satinder-hc");

// console.log(gameName) //satinder
// console.log(gameName[0]);//s
 
/**
 * Prototype storing all the helpsull methods for example here length, charAt, endsWith, etc
 * 
 * here it is empty but you can see this in browser
 */
// console.log(gameName.__proto__);//{}

// console.log(gameName.length);//8
// console.log(gameName.toUpperCase()); //SATINDER
// console.log(gameName.charAt(2)); //t
// console.log(gameName.indexOf("t"));//2
// console.log(gameName.indexOf("z"));//-1



const sentence = 'The quick brown fox jumps over the lazy dog.';

/**
 * at(index)
 * 
 * This methos takes integer value and returns a new string 
 * 
 * return undefined if the given index can not be found
 * 
 * takes +ve and -ve values
 * 
 * 
 */

// console.log(sentence.at(2));//e
// console.log(sentence.at(-2));//g

// console.log(sentence.at(-200));//undefined

// //Comparing with other mentods
// const myString = sentence

// // Using length property and charAt() method
// const lengthWay = myString.charAt(myString.length - 2);
// console.log(lengthWay); // 'g'

// // Using slice() method
// const sliceWay = myString.slice(-2, -1);
// console.log(sliceWay); // 'g'

// // Using at() method
// const atWay = myString.at(-2);
// console.log(atWay); // 'g'

/**
 * charAt(index)
 * 
 * This methos takes integer value and returns a new string 
 * 
 * return empty string if the given index can not be found
 * 
 * takes +ve values only
 */

// console.log(sentence.charAt()) // No index was provided, used 0 as default
// console.log(sentence.charAt(0)) //T
// console.log(sentence.charAt(1))//h
// console.log(sentence.charAt(2))//e
// console.log(sentence.charAt(999))//""
// console.log(sentence.charAt(-999))//""
// console.log(sentence.charAt(-2))//""
// console.log(sentence.charAt(undefined))//0 index
// console.log(sentence.charAt(null))//0 index
