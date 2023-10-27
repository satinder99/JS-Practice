function CreateUser(username, password,email){
    console.log(`create user :${this}`);

    setUserName(username,this)
    this.password = password
    this.email = email
}

function setUserName(username,a){
    console.log(`setUserName : ${this}`);
    console.log(a)
    a.username = username
}

let chai = new CreateUser("chai","123","foo@foo.com")
console.log(chai);