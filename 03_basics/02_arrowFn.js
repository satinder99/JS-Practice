const user = {
    username : "satinder",
    price : 99,
    website : "youtube",

    welcomeMsg : function (){
        return `${this.username}, welcome to the ${this.website} website.`
    }
}

console.log(user.welcomeMsg());
user.username = "Foo"
console.log(user.welcomeMsg());


// function chai(){
//     let username  = "Sam"
//     console.log(this.username)
// }

// const chai = function (){
//     let username  = "Sam"
//     console.log(this.username)
// }

// const chai = () =>{
//     let username  = "Sam"
//     console.log(this.username)
// }

// const chai = () =>{
//     let username  = "Sam"
//     console.log(this) //{}
// }

const chai = () =>{
    let username  = "Sam"
    console.log(this) //{}
}


chai();


// const addTwoNumbers = (num1, num2)=>{
//     return num1+ num2
// }

// const addTwoNumbers = (num1, num2)=> num1+ num2
//const addTwoNumbers = (num1, num2)=> (num1+ num2)
const addTwoNumbers = (num1, num2)=> ({name:"satinder"})

console.log(addTwoNumbers(2,5));



