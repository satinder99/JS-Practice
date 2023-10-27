const personPrototype = {
    greet() {
      console.log("hello!");
    },
  };

const carl = Object.create(personPrototype);
console.log(Object.getPrototypeOf(carl));

Object.prototype.bye = function(){
    console.log("bye");
}

personPrototype.bye();



function User(name){
    this.name = name
}

User.prototype.hello = function(){
    console.log("hello",this.name);
}

const user1 = new User("Satinder")
user1.hello();