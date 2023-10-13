/**Arrays
 * resizable
 * mix datatypes
 * when copy a array it create a shallow copies
 * shallow copy of an object is a copy whose properties share the same reference as those of the source object
 * 
 * it means if we change in copied array, changes will reflect in original aray as well
*/

const myArr = [0,1,2,3,4,5, true,"satinder"];

const myArr2 = new Array(4,4,4,4,4);


console.log(myArr);
console.log(myArr2);

myArr.push(99);
myArr.push(null)
console.log(myArr);

console.log(myArr.pop());


myArr.unshift("\n") //add element to start of the array
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes("\n"));
console.log(myArr.indexOf("\n"));

const newArr = myArr.join();

console.log(newArr);
console.log(typeof newArr);


//slice , splice

console.log("A ",myArr);//A  [ 0, 1, 2, 3, 4, 5, true, 'satinder', 99 ]

const arr1 = myArr.slice(1,3) 
console.log(arr1);//[ 1, 2 ]
console.log("B ",myArr);//B  [ 0, 1, 2, 3, 4, 5, true, 'satinder', 99 ]

const arr2 = myArr.splice(1,3)
console.log(arr2);//[ 1, 2, 3 ]
console.log("C ",myArr);//C  [ 0, 4, 5, true, 'satinder', 99 ]
console.log("-----------------------------------------------------");


const marvelHeros = ["thor","ironman","spiderman"]

const dcHeros = ["superman","flash","batman"]

marvelHeros.push(dcHeros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvelHeros);
console.log(marvelHeros[3][1]);

marvelHeros.pop()

const allHeros = marvelHeros.concat(dcHeros) //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(allHeros);


//Spread operator (drop a glass)
//... operator will spread all the values that means all elements are now seperated and passed where it is used, not a single array entity
const all_new_heros = [...marvelHeros , ...dcHeros]
console.log(all_new_heros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

//flat(depth) 0 to Infinity
const real_another_array=anotherArr.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("satinder"));
console.log(Array.from("satinder"));

//giving empty array as we did not mention to make array from keys
console.log(Array.from({
    name:"Satinder"
})); 


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
console.log(Array.of({
    name:"Satinder"
}));

