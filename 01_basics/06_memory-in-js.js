/**
 * STACK - used for primitive datatypes.
 * we get a copy of variable when a memory created in stack
 * 
 * HEAP - used for non primitive datatypes.
 * We got reference here of the variables
 */

let myYT = "satiderSinghVlog"

let anotherName = myYT //another variable created with same name myYT and that is assigned to anotherName (call by value here)

anotherName = "chaiaurcode" //here we are changing the another name and the 2nd copy of myYT, not the first copy of myYT
console.log(myYT);
console.log(anotherName);

let userOne = {
    name: "satinder",
    upi : "name@ybl"
}

let userTwo = userOne //here we are pointing to the same memory location, changes in user two will also reflect in user one variable as this is non primitive

userTwo.name = "Foo"

console.log(userOne);
console.log(userTwo);
