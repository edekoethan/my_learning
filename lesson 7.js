// 4 ways to declear a function
/*A function can be declared or created in couple of ways:
Declaration function
Expression function
Anonymous function
Arrow function

// 1.Declaration function

function functionName() {
    // code goes here
  }
  functionName()
 
// Function without a parameter and return
function squareNumber() {
    let num = prompt('Enter number here')
    let sq = num * num
    console.log(sq)
}
squareNumber() 

function addTwoNumbers(){
    let numberOne = 10
    let numberTwo = 20
    let sum = numberOne + numberTwo
    console.log(sum)
}
addTwoNumbers()

function printFullName (){
    let firstName = 'Eromosele'
    let lastName = 'Edeko'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName() // calling a function 

//Function returning value

function printFullName (){
    let firstName = 'Eromosele'
    let lastName = 'Edeko'
    let space = ' '
    let fullName = firstName + space + lastName
    return lastName //example to show you can return anything
  
}

console.log(printFullName()) 

function addTwoNumbers() {
    let firstNumber = 2
    let lastNumber = 5
    let total = firstNumber + lastNumber
    return total
}
console.log(addTwoNumbers()) 

//Function with a parameter
//In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

function areaOFCircle(r){
    let area = Math.PI * r * r
    return area
}

console.log(areaOFCircle(5))

//Function with two parameters
function sumTwoNumbers(numberOne, numberTwo) {
let sum = numberOne + numberTwo
return sum
}
console.log(sumTwoNumbers(10, 2))

//Function with many parameters

function sumArrayValues (arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
return sum;

}
const numbers = [1,2,3,4,5];
console.log(sumArrayValues(numbers)); 
const areaOFCircle = (radius) => {
    let area = Math.PI * radius * radius
    return area
}
console.log(areaOFCircle(10)) // more about aeeow functions later



//Function with unlimited number of parameters
function sumAllNums(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(10, 20, 13, 40, 10, 200))  


//Unlimited number of parameters in arrow function
//1 no 'function' is typed
//2 we use spread operator followed by any parameter name
//3 Any thing we passed as argument in the function can be accessed as array in the arrow function.
//4 we use a parameter followed by spread operator (...)

const sumAllNums = (...args) => {
let sum = 0
for (const element of args){
    sum += element
}

return sum
}
console.log(sumAllNums(1,2,3,4,5,6)) 

//Anonymous Function (Anonymous function or without name)

const anonymousFun = function(){
    console.log("This is an anonymous function, i guess it doesnt need calling")
}
 // Expression Function
 // Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.

const square = function(n){
    return n * n
}
console.log(square(2)) 

//Self Invoking Functions
//Self invoking functions are anonymous functions which do not need to be called to return a value.

let squaredNum = (function(n) {
    return n * n 
})(10)
console.log(squaredNum)

//Arrow Function

//normal function declearation vs arrow function
function square(n){
    return n * n 
}
console.log(square(10))

const squared = n => {
    return n * n
}
console.log(squared(5))  

const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
    newArr.push(element.toUpperCase())
}
 return newArr
}
const countries13 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries13))

//Function with default parameters
//Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.
function greetings(name13 = prompt("Enter fiirstName here")) {
let message = `${name13}, welcome to my world`
return message
}
console.log(greetings()) 

function generateFullName(fiirstName = prompt('Enter first Name here:', lastName = prompt("Enter last Name here: "))) {
    let space = " "
    let fullName = fiirstName + space + lastName
    let welcomeStatement = `Welcome ${fullName} to the amazing world of tech`
    return welcomeStatement
}

console.log(generateFullName())  

function calculateAge() {
    let birthyEar = prompt("Enter year of birth here:")
    let currentYear = 2022
    let realAge = currentYear - birthyEar
    let ageDisplay = `You are ${realAge} years old.`
    return ageDisplay
}

console.log(calculateAge())
 function eCompound(){
    let drugTobeCmpounded = prompt('Enter drug name here:')
    let durationOfUse = prompt("Enter duration in days")
    let weight = prompt("Enter weight in kilograms")
    let dozage = prompt('Enter dosage here in mg/kg:')
    let tabletStrength = prompt(`Enter Strength of tablet`)
    let TotalDoze = weight * dozage * durationOfUse
    let tabletToBeUsed = TotalDoze / tabletStrength
    let instructions = `Dissolve ${tabletToBeUsed} tablet(s) in 100ml of water`
    return instructions
 }
console.log(eCompound()) 

const greetings = (name = 'Peter') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Ethan'))  
//oneline functions are kings
const calculateAge = (birthYear, currentYear = 2022) => currentYear - birthYear
console.log('Age', calculateAge(1996))


const weightOfObject = (mass, gravity = 9.81) => mass * gravity + "N"

console.log('Weight of an object in Newtons:', weightOfObject(100, 1.62))  */ //1.62 is parsed as an argument here if not parsed then default argument of 9.81 is used


//Excercise
//no parameter
/*function  fullName22(){
    let firstName = "Ethan" 
    let space = ' '
    let lastName = "Edeko"
    let myFullName = firstName + space + lastName
    return myFullName
}

console.log(fullName22()) 
function fullName33(firstName = "Edeko", lastName = "Ethan"){
    let myFullName = firstName + space + lastName
    return myFullName
}
console.log(fullName33()) 

function addNumbers (numberOne, numberTwo){
    let sum = numberOne + numberTwo
    return sum
}
console.log(addNumbers(5, 7))


function calAreaOFCircle(length, width){
    let area = length * width
    return area
}

console.log(calAreaOFCircle(12, 15))


function calPerimeter(length, width){
    perimeter = 2  * (length + width)
    return perimeter
}
console.log(calPerimeter(5, 7))

function CalvolOfRectangle(length, width, height){
 volOfRectangle = length * width * height
 return volOfRectangle
}
console.log(CalvolOfRectangle(12, 15, 20))  

let calAreaOfCircle = (r, pI = Math.PI) => {
    areaOfCircle = Math.round(pI * r * r)
    return areaOfCircle
}
console.log(calAreaOfCircle(5))

let calDensity = (mass, volume) => {
    density = Math.round(mass / volume )
    return density
}
console.log(calDensity(200, 90))  


let calSpeed = (totalDistance, time) => {
 speed = Math.round(totalDistance / time)
 return speed
}
console.log(calSpeed(200, 3)) 

let calDensity = (mass, volume) => {
    density = Math.round(mass / volume)
    return density
   }
   console.log(calDensity(200, 123)) 

let calWeight = (mass, gravity = 9.8) => {
    weight = Math.round(gravity * mass)
    return weight
   }
   console.log(calWeight(12)) 

let calCircumfrence = (radius, pI = Math.PI) => {
    weight = Math.round(2 * pI * radius)
    return weight
   }
   console.log(calCircumfrence(12)) 

let convertCentToFaren = (celsius) => {
    centToFaren = Math.round((celsius * (9/5) ) + 32)
    return centToFaren
   }
   console.log(`The value in farenheit is ${convertCentToFaren(25)}`)


let calBMI = (weight, height) => {
    bMI = weight / (height * height)
    
    if (bMI  <= 18.5){
        console.log(`${bMI} is Underweight`)
    }
    else if (bMI > 18.5 && bMI <= 24.9){
        console.log(`${bMI} is Normal weight`) }

    else if (bMI > 24.9 && bMI <= 29.9){
         console.log(`${bMI} is Overweight`)
    }
    
    else if (bMI > 30){
        console.log(`${bMI} is Obese`)
   }
  return bMI 
}

console.log(calBMI(75, 1.77)) 


let checkSeason = (month) => {    
    if (month  == "September" || month == "October" || month == "November" ){
        console.log(`${month} is Autumn`)
    }
    else if (month == "December" || month == "January" || month == "Feburary")  {
        console.log(`${month} is Winter`)
    }
    
    else if (month  == "March" ||  month == "April" || month == "May" ) {
        console.log(`${month} is Spring`) 
    }

    else if (month  == "June" || month == "July" || month == "August" ){
        console.log(`${month} is Summer`) 
    }
    
    else {
        console.log(`Not a valid month`)
    }    
  return month
}

console.log(checkSeason("December"))   

function max3num(num1, num2, num3) {
    var maxFound = num1;
    if (num2 > maxFound) {
       maxFound = num2;
    }
    if (num3 > maxFound) {
       maxFound = num3;
    }
    return maxFound;
}

console.log(max3num(0, -9, -7))

  
let solveQuadraticEquation = (aValue, bValue, cValue) =>{
   let emptyArr = []
   let negativeB = -1 * bValue
   let PortiontoBeRooted = (bValue * bValue) - (4 * aValue * cValue)
   let rootedPortion = Math.sqrt(PortiontoBeRooted) 
   let numerator1 = negativeB + rootedPortion
   let denominator = 2 * aValue
   let equationSolved1 =  numerator1 / denominator
   let numerator2 = negativeB - rootedPortion
   let equationSolved2 = numerator2 / denominator
   if (rootedPortion == 0) {
   emptyArr.push(equationSolved1)
   }
   else if (rootedPortion !== 0){ 
   emptyArr.push(equationSolved1, equationSolved2)

}
return emptyArr
}

console.log(solveQuadraticEquation(1, 0, -4)) 

let showDateTime = () => {
   let month = now.getMonth()
   let day = now.getDay()
   let year = now.getFullYear()
   let hours = now.getHours()
   let minutes = now.getMinutes()
   let space = " "
   let fullDate = `${month}/${day}/${year}` + space + `${hours}:${minutes}` 

   return fullDate
}
console.log(showDateTime())

function swapValues(x, y){
let swapArr = []
 swapArr.push(y, x)
 return swapArr
}
console.log(swapValues(4, 5))
//thank u JAH  

function reverse(array) {
    var output = []
    while (array.length) {
        output.push(array.pop());
    }
    return output
    }
     console.log(reverse(['banana', 'orange', 'mango', 'lemon'])) 
     
function  capitalizeArray(array)  {
 var capitalWords = []
 for (const i of array) {
    capitalWords.push(i.toLocaleUpperCase())
}


 return capitalWords
} 

console.log(capitalizeArray(['banana', 'orange', 'mango', 'lemon']))  

function addItem(item){
    oldArr = ['BANANA', 'ORANGE', 'MANGO', 'LEMON']
    trueArr = []
    oldArr.unshift(item)
    trueArr.push(oldArr)
    return trueArr
}
     
console.log(addItem('FISH'))  

let removeItem = (index) => {
    oldArr = ['BANANA', 'ORANGE', 'MANGO', 'LEMON']
    trueArr = []
    oldArr.pop(index)
    trueArr.push(oldArr)
    return trueArr
}
     
console.log(removeItem(3))   


let sumOfNumber = (number) => {
    var sumAllNumbers = 0
    for (let i = 0; i <= number; i++){
     
        sumAllNumbers = sumAllNumbers + i
    
    }
    return sumAllNumbers
}
console.log(sumOfNumber(50)) 

let sumOddnEven = (Number) => {
    let even = 0
    for (let i = 0; i <= Number; i++){
        if (i % 2 === 0) {
            even = even + i   
        } 
    
    } 
    let odd = 0
    for (let i = 0; i <= Number; i++){
        if (i % 2 === 1) {
           odd = odd + i 
        }  
    }
     
     console.log(`The sum of all the even number  between 0 to ${Number} is ${even} and the sum of all the odd number  between 0 and ${Number} is ${odd}`) 
    
}
    
console.log(sumOddnEven(50)) 

function EvenandOdd(number){
countOdd = 0
countEven = 0;
//odd
for (let i = 0; i <= number; i++){
    if (i % 2 == 1) {
        countOdd++
     }
//even
     if (i % 2 == 0) {
        countEven++
     }

}
return `The number of odd is ${countOdd} 
The number of even is ${countEven} `
}
console.log(EvenandOdd(100)) 


function sumAllArgs(array){ //this is for multiple parameter, it is very unique
    let sumArray = 0
    for (let i = 0; i < array.length; i++){
    sumArray = sumArray + array[i]
    }
   return sumArray;
}
console.log(sumAllArgs([2,3,5])) 

function randomUserIp(){
    let ip = (Math.floor(Math.random() * 255) + 1 ) + "." + (Math.floor(Math.random() * 255) + 1 ) + "." + (Math.floor(Math.random() * 255) + 1 ) + "." + (Math.floor(Math.random() * 255) + 1 )
    return ip
}
console.log(randomUserIp())

function genMAC(){
    var hexDigits = "0123456789ABCDEF";
    var macAddress = "";
    for (var i = 0; i < 6; i++) {
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        macAddress+=hexDigits.charAt(Math.round(Math.random() * 15));
        if (i != 5) macAddress += ":";
    }

    return macAddress;
}
//stolen from stackoverflow
console.log(genMAC())  


const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  console.log(random_hex_color_code()) 
//stolen from stackoverflow 

function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    var str = '';
    if (length == 7) {
        for (var i = 0; i < length; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }  
    } 
    else if (length !== 7){
console.log(`Not a valid Id length, set Id length to seven characters`)
    }  
    return str;  
    }
   //modified from stackoverflow
console.log(randomString(7)) */

/*function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
console.log(randomString(11))
//stolen from stackoverflow but i actually understand it; i used it above to do mine


//LEVEL 3
//PART1 OF QUES1
ques 1, 2, 3, 4, 7 are skipped
function userIdGeneratedByUser() {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    var str = '';
    userPrompt = prompt('Enter Number Of characters here:')
    userPromptInt = parseInt(userPrompt)
    if (userPromptInt) {
        for (var i = 0; i < userPromptInt; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }  
    } 
    else if ( ! userPromptInt){
console.log(`Not a valid Id length, set Id length`)
    }  
    return str;  
    }
console.log(userIdGeneratedByUser())

//PART 2 //to be continued


function rgbGen(){

    let rgbColor = (Math.floor(Math.random() * 255) + 1 ) + "," + (Math.floor(Math.random() * 255) + 1 ) + "," + (Math.floor(Math.random() * 255) + 1 ) 
    return rgbColor   
}

console.log(rgbGen())  

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgbToHex(50, 51, 25));  // more on higher order function later

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  alert(hexToRgb("#0033ff").g); //more on this later
   // stolen from stackoverflow 

   function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}
console.log(shuffleArray([2,22, 5,8]))
var f = []
function factorial (n) {
    if (n == 0 || n == 1)
      return 1;
    if (f[n] > 0)
      return f[n];
    return f[n] = factorial(n-1) * n;
  }
console.log(factorial(9)) 

let isEmpty = (array) => {
    for (let i =0; i < array.length; i++) {
    if (array == null ){
        console.log('Array is empty')
    }

    else if (array == [] ){
        console.log('Array is empty')
    }
    else if (array != null ){
        console.log(`Array is not empty`)
    }
}
    return array
}

console.log(isEmpty([]))  

function sumAllArgs(array){ //this is for multiple parameter, it is very unique
    let sumArray = 0
    for (let i = 0; i < array.length; i++){
    sumArray = sumArray + array[i]
    }
   return sumArray;
}
console.log(sumAllArgs([2,3,5])) 



function onlyNumbers(array) {
    return array.every(element => {
      return typeof element === 'number';
    });
}
console.log(onlyNumbers(2,3,5)) */

/*function getAverage(array){ 
    let sumArray = 0
    for (let i = 0; i < array.length; i++){
    sumArray = sumArray + array[i]
    }
   average = sumArray / array.length
   return average;
}

console.log(getAverage([2,3,5])) 

let myModify = (array) => {
    if (array[4]){
    array[4] = array[4].toUpperCase()}

    else  if (! array[4]){
            console.log('Element does not exist')
        }
    return array
    }

console.log(myModify(['Avocado', 'Potato', 'Lemon','Carrot'])) 

const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
console.log(isPrime(24)) 


function allAreEqual(array) {
    const result = array.every(element => {
      if (element === array[0]) {
        return true;
      }
    });
  
    return result;
  }
  
console.log(allAreEqual([7,7,7]))


function myUniqueRandom(max = 9){
   let array = []
   rand = Math.floor(Math.random() * max)  + 1;
   array.push(rand)

   return array 
}
console.log(myUniqueRandom(7))

// to be continued
 */








































































