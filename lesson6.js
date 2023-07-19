/*

// loops
// For loop structure
//for(initialization, condition, increment/decrement) {
    // code goes here just like an if statement }
  

  //example1
for (let i = 0;  i <= 5; i++ ) {
    console.log(i)
} // ok this is the explanation, we are writing a forloop stating that 
// we want to start from zero, i here is the initialization or starting point, go all the way to 5 hence <= while adding an increament i++

//example 2 negative
for ( let i = 5; i >= 0; i--) {
    console.log(i)
}
 // example 3
for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}
 // EXAMPLE 4 ADDING ELEMENTS TO AN  EMPTY ARRAY
const countrieS = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let i = 0; i < countrieS.length; i++){
    newArr.push(countrieS[i].toUpperCase()) //WE ARE PUTTING IN THE NEWARR ALL OF THE COUNTRIES IN UPPERCASE
}
console.log(newArr)

// example 5 adding all elements in the array
const realNumbers = [1, 2, 3, 4, 5]
let sum = 0 //we start by declearing a variable we want to store the added value, in this case we call it sum
for (let i = 0;  i < realNumbers.length; i++){
   sum += realNumbers[i] // sum = sum + realNumbers[i]
} // i is our counter or iteration uinit, which also starts from 0, it is not greater than our array(not even equal to it), has an increament i++
console.log(sum)

//Ex.6 Creating a new array based on existing array square all
const numbers6 = [1, 2, 3, 4, 5 ]
const newArr6 = []
 let sum6 = 0

 for (let i = 0; i < numbers6.length; i++ ) {
    newArr6.push( numbers6[i] **2 )
 }

console.log(newArr6)


//Ex.7 Creating a new array based on existing array square all
const numbers7 = [4,9,16,25,36,50]
squareRootArr = []
for (let i = 0; i < numbers7.length; i++) {
    squareRootArr.push(Math.floor( Math.sqrt(numbers7[i] ) ))
}

console.log(squareRootArr)

// While loop structure
 //ex.8
let i = 0 // condition comes first
while ( i <= 5) { 
    console.log(i)
    i++
}
 //contrast while loop syntax with a forloop syntax
/*for (let i = 0;  i <= 5; i++ ) {
    console.log(i)
} // ok this is the explanation, we are writing a forloop stating that 
// we want to start from zero, i here is the initialization or starting point, go all the way to 5 hence <= while adding an increament i++ */


// do while loop
let p = 0;
do {
    console.log(p)
    p++
}
while (p <= 5)

//for of loop
// We use for of loop for arrays. It is very handi way to iterate through an array if we are not interested in the index of each element in the array.
//structure
//for (const element  of arr) {
    // code goes here}

const  numbers8= [1, 2,3,4,5]
for (const num of numbers8) { // using a for of loop is smple, start by defining a constant call it anything say "a" then say for ( const  a of yourList ) { now place ur code here
}
    console.log(num)


let sum9 = 0
for (const num of numbers8) {
    sum9 += num
    console.log(sum9)
}

const webTechs11 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
/*for (const i of webTechs11) {
    console.log(i.toLocaleUpperCase())
}


for (const k of webTechs11) { 
    console.log(k[0])
}

// break is used to interrupt the loop
for (let i = 0; i <= 5; i++) {
    if(i == 3) {
        break
    }

    console.log(i)
}
 for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i)
 } */

//ex 1 
//for loop
/*numtoTen = 0
for (let i = 0; i <= 10; i++){
    console.log(i)
} */
 //while loop
/*let i = 0
while (i <= 10) {
    console.log(i)
    i++
} 


//do while loop
let i = 0 
do {
    console.log(i)
    i++
}
while(i <= 10) */



// ex 2
/*let num10to0 = 0
for (let i = 10; i >= 0; i-- ) {
    console.log(i)
}

 //while loop
let i = 10
while (i >= 0) {
    console.log(i)
    i--
}  

//do while loop
let i = 10 
do {
    console.log(i)
    i--
}
while(i >= 0)

//question 3 is omitted

//ex 4
for (let mark = "#"; mark.length < 8; mark += "#") {
    console.log(mark);
} 

// ex 5
for (let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}  
for (let i = 0; i <= 10; i++){
    console.log(`${i}  ${i**2}  ${i **3 }`)
}  



for (let i = 0; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(i)
    } 

} 

for (let i = 0; i <= 100; i++){
    if (i % 2 === 1) {
        console.log(i)
    }  
}

let count = 0
for (j =0; j<= 100; j++){
    for (i =1; i <= j; i++){
        if(j % i == 0) 
        count++
    }
    if (count ==2)
    console.log(j)
    count = 0
}


var sum10 = 0
for (let i = 0; i <= 100; i++){
 
    sum10 = sum10 + i

}
    console.log(`The sum of all the number from 0 to 100 is ${sum10}`)

let even = 0
for (let i = 0; i <= 100; i++){
    if (i % 2 === 0) {
        even = even + i   
    } 

} 
let odd = 0
for (let i = 0; i <= 100; i++){
    if (i % 2 === 1) {
       odd = odd + i 
    }  
}

console.log(`The sum of all the even number  between 0 to 100 is ${even} and the sum of all the odd number  between 0 to 100 is ${odd}`) 

let even = 0
for (let i = 0; i <= 100; i++){
    if (i % 2 === 0) {
        even = even + i   
    } 

} 
let odd = 0
for (let i = 0; i <= 100; i++){
    if (i % 2 === 1) {
       odd = odd + i 
    }  
}

console.log(`[${even}, ${odd}]`) 

let myRandomNumber = []
    for( let i = 0; i <= 4; i++){
       myRandomNumber.push(Math.floor(Math.random() * (10 - 1)  + 1  ))
      
    }
    console.log(myRandomNumber); //best code i've written so faR 

    let myRandomNumber = []
    for( let i = 0; i <= 4; i++){
       myRandomNumber.push(Math.floor(Math.random() * (10 - 1)  + 1  ))
      
    }
    let myId = myRandomNumber.toString(36).slice(2)
    console.log(myId)  //abandoned for now
    const random_hex_color_code = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };
      
      console.log(random_hex_color_code()) //more on functions later

const countriesUpperCase = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newARR = []
for (let i = 0; i < countriesUpperCase.length; i++ ){
    newARR.push(countriesUpperCase[i].toLowerCase()) 
}
console.log(newARR) 


const countriesUpperCase = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newARR = []
for (let i = 0; i < countriesUpperCase.length; i++ ){
    newARR.push(countriesUpperCase[i].length)
}
console.log(newARR) 

const countriesUpperCase = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newARR1 = []
let newARR2 = []
let newARR3 = [] 

for (let i = 0; i < countriesUpperCase.length; i++ ){
    newARR1.push(countriesUpperCase[i])
}

for (let i = 0; i < countriesUpperCase.length; i++ ){
    newARR2.push(countriesUpperCase[i].slice(0,3))
}

for (let i = 0; i < countriesUpperCase.length; i++ ){
    newARR3.push(countriesUpperCase[i].length)
}


let masterARR = [[newARR1[0], newARR2[0], newARR3[0]],
[newARR1[1], newARR2[1], newARR3[1]],
[newARR1[2], newARR2[2], newARR3[2]],
[newARR1[3], newARR2[3], newARR3[3]]

]
console.log(masterARR) //kindaf cheated tru this but we gatta move on

const arrToCheck = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let itemFound = []
for (let i = 0; i <= arrToCheck.length; i++) {
    itemFound.push(arrToCheck.find( a => a.includes("LAND")))
    
}

console.log(itemFound[i])   //to be continued

const arrToCheck = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let maxStr = arrToCheck[0].length
let max = arrToCheck[0]
for (let i = 0; i < arrToCheck.length; i++ ){
 var maxi = arrToCheck[i].length;
 if (maxi > maxStr){
    max = arrToCheck[i]
    maxStr = maxi
 }
}
console.log(max)// omor na copy i copy this code sha but e go well die na d answer b that


const webTechS = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let maxStr = webTechS[0].length  //gives me the length of the first element
  let max = webTechS[0] // assumes that the longest word is in the first element
  for (let i = 0; i < webTechS.length; i++ ){ //basic syntax for a forloop initialization, condition, increament/decreament 
   var maxi = webTechS[i].length; //maxi is a new variable that assumes that thelongest element is along the arrray and not necessarily the first element
   if (maxi > maxStr){ //the if condition here states that if max(the longest element somewer along the array is greater than the first element length (maxstr) then maxstr cant really be the longest element )
      max = webTechS[i] //hence the true max element has to be somewer along the array hence the arrray is called with its initialization
      maxStr = maxi //maxstr is hence = maxi because reasons... lol actually its only logical because if 
   }
  }
  console.log(max) 

  const webTechS = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let newARR1 = []

  let newARR3 = [] 
  
  for (let i = 0; i < webTechS.length; i++ ){
      newARR1.push(webTechS[i])
  }
  
  
  for (let i = 0; i < webTechS.length; i++ ){
      newARR3.push(webTechS[i].length)
  }
  
  
  let masterARR = [[newARR1[0], newARR3[0]],
  [newARR1[1], newARR3[1]],
  [newARR1[2], newARR3[2]],
  [newARR1[3], newARR3[3]],
  [newARR1[4], newARR3[4]],
  [newARR1[5], newARR3[5]],
  [newARR1[6], newARR3[6]],

  ]
  console.log(masterARR)  

  const countries11 = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let strOf5 = countries11[0].length === 5
let strOf5Position = countries11[0]
for (let i = 0; i < countries11.length; i++) {
    var strOf5inLoop = countries11[i].length;
if (strOf5inLoop === 5){
    strOf5Position = countries11[i]
    strOf5 = strOf5inLoop
  }

  }
  console.log(strOf5Position)  //failed code all jargons i left it to show that growth takes time

const countries11 = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let countrywit5 = []
for (country of countries11){
    if (country.length === 5){
        countrywit5.push(country)  
    }
console.log(countrywit5)

} //escellent code thank u Jah


function getFirstLetters(str) {
    const firstLetters = str
    .split(' ')
    .map(word => word[0])
    .join("");
    return firstLetters
}
console.log(getFirstLetters('MongoDB, Express, React, Node')
) 

let techPackages =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
 for ( const techPackage of techPackages){
    console.log(`${techPackage} is a  useful tool`)
 } 


 const fullStacks = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  for (const fullStack of fullStacks){
for (const soloItem of fullStack) {
    console.log(soloItem)
 }
}  //done in one trial, tnkJah

let arrToReverse =  ['banana', rse()
console.log(reversed) //this i'orange', 'mango', 'lemon']
let reversed = arrToReverse.reves not wat was required


function reverse(array) {
var output = []
while (array.length) {
    output.push(array.pop());
}
return output
}
 console.log(reverse(['banana', 'orange', 'mango', 'lemon'])) 

//quite cleaver what is done here the function simply loops through the array and pops each element, all popped element are then pushed to an output variable, the variable comes out as reversed because pop(n + infinity) === push( n)


const  arrToCheck = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let itemFound = []

for (let i = 0; i < arrToCheck.length; i++) {
    
if (arrToCheck[i].includes("LAND") === true)
   {
       itemFound.push(arrToCheck[i]);
   }
}
if(itemFound.length > 0){
    
    console.log(itemFound)
}
else{
    
    console.log("All these countries are without land");
}



const  arrToCheck = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

let itemFound = []

for (let i = 0; i < arrToCheck.length; i++) {
    
if (arrToCheck[i].includes("IA") === true)
   {
       itemFound.push(arrToCheck[i]);
   }
}
if(itemFound.length > 0){
    
    console.log(itemFound)
}
else{
    
    console.log("All these countries are without land"); 
}
*/


















































