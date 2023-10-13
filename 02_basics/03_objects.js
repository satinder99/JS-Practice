//singleton

//const tinderUser = new Object() //this is a singleton onbject
const tinderUser = {} //this is not a singleton object
console.log(tinderUser);

tinderUser.id = "123abd"
tinderUser.name = "satinder"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userFullname:{
            firstName:"Satinder",
            lastName : "singh"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname?.userFullname); //here ? means if that value is empty also it will not throw an error


const obj1={
    1:"a",2:"b"
}

const obj2={
    3:"a",4:"b"
}

const obj3 = {obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
console.log(obj3);


const obj4 = Object.assign({},obj1,obj2);
                        //(target,source)
console.log(obj4);

const obj5 = {...obj1,...obj2}
console.log(obj5);



// const users = [
//     {
//         ...
//     },
//     {
//         ...
//     },
//     {
//         ...
//     }
// ]


console.log(tinderUser);

console.log(Object.keys(tinderUser));//return array of keys
console.log(Object.values(tinderUser));//return array of values
console.log(Object.entries(tinderUser));//make array for each key value in object

console.log(tinderUser);

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


console.log("----------------------------------------------------");
//Destructuring a object(for example from DB)
const course={
    courseName : "Js in hindi",
    price : "999",
    courseInstructor:"hitesh"
}

const {courseInstructor:instructor} = course // instead of course.courseInstructor

//console.log(courseInstructor);
console.log(instructor);


//JSON
// {
//     "name":"satinder",
//     "id":111
// }

// [
//     {},
//     {},
//     {}
// ]