function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("N");
    console.log("D");
    console.log("E");
    console.log("R");
}

sayMyName //reference of the function
sayMyName(); //execution of function


// function addTwoNumbers(number1,number2){ //number 1 and number 2 are parameters
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1,number2){ //number 1 and number 2 are parameters
//     let result = number1 + number2
//     return result
//     console.log("satinder"); //unreachable code
// }
function addTwoNumbers(number1,number2){ //number 1 and number 2 are parameters
    return number1 + number2
}


addTwoNumbers(); //NaN
addTwoNumbers(2,3); //5 --> these 2 and 3 are arguments
addTwoNumbers(2,"3"); //23
addTwoNumbers(2,"a"); //2a
addTwoNumbers(2,null); //2 

const result = addTwoNumbers(2,5);
console.log("result",result);

// function loginUserMessage(username){
//     return `${username} just loggedin.`
// }

//console.log(loginUserMessage("satinder"));
console.log(loginUserMessage("")); //  just loggedin.
console.log(loginUserMessage()); // undefined just loggedin.

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter the username");
    //     return
    // }

    if(!username){ //if username is undefined(false) them it will negate it means true to get into the block
        console.log("Please enter the username");
        return
    }
    return `${username} just loggedin.`
}



// function calculateCartPrice(...num1){ //... is a rest operator
//     return num1
// }

function calculateCartPrice(val1, val2, ...num1){ //... is a rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500,3000));


const user = {
    username : "satinder",
    prices:1999
}

function handleObj(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}


handleObj(user)