//singleton - when created using constructor
//Object.create

//Object literal
const mysymbol=Symbol("key1");

const JsUser = {
    name:"satinder",
    "full name":"satinder singh",
    [mysymbol] : "myKey1",
    age:23,
    location:"Ludhiana",
    email:"foo@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","saturday"]
}


console.log(JsUser.name);
console.log(JsUser["email"]);

console.log(JsUser["full name"]);

console.log(JsUser[mysymbol]);

JsUser.email = "chatgpt@gmail.com";
//Object.freeze(JsUser)

JsUser.email = "test@gmail.com";
console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingTwo());