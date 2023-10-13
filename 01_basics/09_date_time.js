//Dates

let myDate = new Date();
console.log("1",myDate);// 2023-10-13T05:03:04.660Z

console.log("2",myDate.toString());
console.log("3",myDate.toDateString());
console.log("4",myDate.toISOString());
console.log("5",myDate.toJSON());
console.log("6",myDate.toLocaleDateString());
console.log("7",myDate.toLocaleString());
console.log("8",myDate.toTimeString());
console.log("9",myDate.toUTCString());


console.log(typeof myDate);
console.log('----------------------------------------------');

let myCreatedDate1 = new Date(2023,0,23)
console.log(myCreatedDate1.toDateString());


//let myCreatedDate2 = new Date(2023,0,23,5,3)
//let myCreatedDate2 = new Date("2023-1-23")
let myCreatedDate2 = new Date("1-13-2023")
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());
console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date();
console.log(newDate);

console.log(newDate.getMonth()+1);
console.log(newDate.getDay()); //friday is 5th day in a week


newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(newDate.toLocaleString());