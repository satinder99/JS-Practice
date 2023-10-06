/**   TO NUMBER
 * 
 * "33" => 33
 * true => 1
 * null => 0
 * "33abc" => NaN
 * "satinder" => NaN
 * undefined => NaN
 */

let score1 = "33abc"
let score2 = null 
let score3 = undefined 
let score4 = true 
let score5 = "satinder" 
//const {score2} = Request.body //may be number may not be, depend on front end


function converToNum(num){
    console.table([num,typeof (num)]);
    let valueInNumber = Number(num);

    console.table([valueInNumber,typeof valueInNumber]);
    console.log("--------------------")
}
// converToNum(score1)
// converToNum(score2)
// converToNum(score3)
// converToNum(score4)
// converToNum(score5)
//--=========================================
/**
 *  TO BOOLEAN
 * 
 *  1=> true
 * "satidner" => true
 * 0=> false
 * ""=> false
 * null => false
 * undefined => false
 * 
 */

let isLoggedIn1 = 1
let isLoggedIn2 = ""
let isLoggedIn3 = null
let isLoggedIn4 = undefined
function convToBool(a){
    let booleanIsLoggedIn = Boolean(a);
    console.log(booleanIsLoggedIn)
}

// convToBool(isLoggedIn1)
// convToBool(isLoggedIn2)
//  convToBool(isLoggedIn3)
//  convToBool(isLoggedIn4)



/**
 * To STRING
 * 
 * 33 => "33"
 * TRUE => 'true'
 * null => 'null'
 * undefined => 'undefined'
 */


let someNum1 = 33
let someNum2 = true
let someNum3 = null
let someNum4= undefined

function convToStr(num){
    let str = String(num);
    console.table([str, typeof str]);
}

convToStr(someNum1);
convToStr(someNum2);
convToStr(someNum3);
convToStr(someNum4);