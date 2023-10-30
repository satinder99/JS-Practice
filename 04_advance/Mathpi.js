console.log(Math.PI);
Math.__proto__.PI = 5;
// Math.prototype
console.log(Math.PI);

const myObj = Object.create(null)
console.log(myObj);