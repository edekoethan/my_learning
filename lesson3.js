
//Date
/*let lightOn = true
let lightOff = false
let trueValue = 4>3
console.log(trueValue)


const PI = 3.14
let radius = 100
const areaOfCircle = PI * radius * radius

console.log(`The area of the circle is ${areaOfCircle} oC. Hope you got the answer`) 
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

const check = 4 > 3 || 10 > 5  

// pre-increament

let count = 0
console.log(++count)
console.log(count)

// post-increament
let count_post = 0
console.log(count_post++)
console.log(count_post)

//  pre-decreament
let count_decreament = 10
console.log(--count_decreament) 
console.log(count_decreament)  

//  post-decreament
let count_decreament2 = 15
console.log(--count_decreament2) 
console.log(count_decreament2) 

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

let number12 = 5
number12 > 4
? console.log(`the number  ${number12} is a good number`)
: console.log(`the number  ${number12} is a bad number`)

//operator precedeence
console.log(3 + 4 * 5)
//follows the same as Bodmas

console.log(4 * 3 ** 2)
// recall that ** is raized to power following bodmas operator or exponent comes before multiplication
/* As another example, the unique 
exponentiation operator has right-associativity,
 whereas other arithmetic operators 
 have left-associativity.

const valueOfRightAssociativity = 4 ** 3 **2 // right associativity applies fr exponents
//hence this is the same as   4 ** (3 ** 2);
console.log (valueOfRightAssociativity)


/* however the associativity of  other arithmetic operations is 
leftward*/
 
const valueOfLeftAssociativity = 4 / 3 ** 2

console.log (valueOfLeftAssociativity)
console.log (Math.round(const2 = (2**3) / (3 **2)))

const aA = 1;
const bB = 2;
typeof aA + bB; // Equivalent to (typeof a) + b; 

//windows method
// 1. alert('30 days of JavaScript')

//let darkMode = prompt('Enter number here', 'number goes here')
//console.log(darkMode)

//const agree = confirm('Are you sure you like to delete ?')
//console.log(agree)

// date object
const firstDate = new Date()
console.log(firstDate)

const secondDate = new Date()
console.log(secondDate.getFullYear())

const thirdDate = new Date()
console.log(thirdDate.getMonth())

const fourthDate = new Date()
console.log(fourthDate.getDate())

const fifthDate = new Date()
console.log(fifthDate.getDay())
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)

const sixthDate = new Date()
console.log(sixthDate.getHours())

const eightDate = new Date()
console.log(eightDate.getMinutes())

const seventhDate = new Date()
console.log(seventhDate.getSeconds())


//getTime
const unixOneMethod = new Date() // this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
console.log(unixOneMethod.getTime())

//getTime2

const allSeconds = Date.now() //
console.log(allSeconds) 

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

/*console.log(`${date}/${month}/${year} ${hours}:${minutes}`) */

//excercise
// level1

/*let firstNameOne = 'eromosele'
console.log(typeof firstNameOne)
let lastNameOne = 'edeko'
let country = 'nigeria'
let isMarried = true
console.log(typeof isMarried)

let dob = 1997

console.log(typeof dob)

console.log(typeof "10" == 10 )

console.log(typeof parseInt("9.8") == 10)

console.log('foot'==='fishy')

console.log(4 != 4 )
let value1 = 'python'
let value2 = 'jargon'
console.log(value1.length != value2.length)

console.log(!!!(4 < 3 || 10 < 12))

const yearDate = new Date()
console.log(yearDate.getFullYear())

const monthDate = new Date()
console.log(yearDate.getMonth())

const todayDate = new Date
console.log(todayDate)

const dayDate = new Date()
console.log(dayDate.getDay())


const hoursDate = new Date()
console.log(hoursDate.getHours())

const minutesDate = new Date()
console.log(minutesDate.getMinutes())


const allSeconds2 = Date.now()  */

//EXCERCISE LEVEL 2
/*let base = prompt('enter base here')
console.log(base)

let height = prompt('enter height here') 
console.log(height)

let areaOfCircle2 = 0.5 * base * height
console.log(`The area of the circle calclated is ${areaOfCircle2}`) */

/*let sideA = prompt('Enter side A')
console.log(sideA)

let sideB = prompt('Enter side B')
console.log(sideB)

let sideC = prompt('Enter side C')
console.log(sideC)

let perimeter = (parseInt(sideA) + parseInt(sideB) + parseInt(sideC))
console.log(Math.round(perimeter)) */

//continue from question 3 on next session

/*let length = prompt("Enter length here")
console.log(length)

let width = prompt('Enter width here')
console.log(prompt)

let areaOfCircle3 = length * width
console.log(areaOfCircle3)

let perimeter = 2 * (parseInt(length) + parseInt(width))
console.log(perimeter) */

/*let radiusOfCircle  = prompt('Enter radius here')
const PI_value = 3.142

let areaOfCircle4 = radiusOfCircle * radiusOfCircle * PI_value
console.log(areaOfCircle4); */

/*let t = 5
const y = (2  * (t) - 2)
console.log(y) */

/*let x1 = 4
let x2 = 2
let y1 = 6
let y2 = 1
let mySlope =  (y2-y1) / (x2-x1)
console.log(mySlope) */

/*let myLastName = 'edeko'
myLastName.length > 7
? console.log('Your name is long')
: console.log('Your name is short')


let firstName1 = 'eroMOSE'
let lastName1 = 'ede'
firstName1.length > lastName1.length 
? console.log('Your firstname is longer than your last name')
: console.log('Your firstname is not longer than your last name')

let myAge = 250
let yourAge = 25
let ageDiferrence = parseInt(myAge) - parseInt(yourAge)
console.log( `I am ${ageDiferrence} older than you `)

let myUserBirthDay = prompt('Enter year of birth')
let myUsersAge = parseInt(2022) - parseInt(myUserBirthDay)
let userAgeGap = 18 - myUsersAge 
myUsersAge >= 18
? console.log('You are old enough to drive')
: console.log(`You are not old enough to drive wait an additional ${userAgeGap} years`)

really proud of myself for the above code thank you Jehovah */

/*let yourAge1 = prompt("Enter number of years")
let yourExpectedSecondsLeft = (100 * 365 * 24 * 60 * 60) - parseInt(yourAge1) * 365 * 24 * 60 * 60
console.log(yourExpectedSecondsLeft)
 */



