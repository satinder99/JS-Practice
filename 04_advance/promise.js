/**
 * This below syntax is how to create a promise, 
 * same task can be achieve via async await keywords, buit promises are advance concept which is used widely.
 * 
 */

const promiseOne = new Promise((resolve,reject)=>{
    //do an async tak
    //DB request,cryptography, network
    setTimeout(()=>{
        //console.log("Async task completed");
        resolve()
    },2000);
})


/**
 * The below syntax is how to consume a promise
 * 
 */

promiseOne.then(()=>{
    //here we receieve the parameters in this function which are passed from the promise callback function
    //console.log("Promise consumed");
})


/**
 * Method 2 how to create a promise
 */

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //console.log("async task 2");
        resolve();
    },1000)
}).then(()=>{
    //console.log("Async 2 resolved");
})


/**
 * Method 3 of promise - passing data to then()
 */

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username:"satinder", email:"foo@foo.com"})
    },500)
})

promiseThree.then((user)=>{
    //console.log(user);
})

/**
 * Method 4 for promise - using reject and resolve both
 */

// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username:"satinder",password:"123"})
//         }
//         else{
//             reject("Error: Something went wrong!!!")
//         }
//     },100)
// })

// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=> console.log("the promise is either resolve or rejected"))

const promisFive = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"satinder",password:"123"})
        }
        else{
            reject("Error: JS went wrong!!!")
        }
    },1000)
});

async function consumeFive(){
    try {
        const response = await promisFive;
        console.log(response);
    } catch(error) {
       console.log(error); 
    }
}

consumeFive()



fetch(url)
.then((users)=>{
    return users.json();
})
.then((users)=>{
    console.log(users)
})
.catch((error)=> console.log("error : ", error))
.finally(()=>{
    console.log("fething either completed or rejected");
})