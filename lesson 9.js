//callback function
/*const callback = (n) => {
  return n ** 2
}
console.log(callback(16))  

function cube (callback, n){
  return callback(n) * n
}

console.log(cube(callback, 3)) */

//returning function
/*const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m +  t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))*/
//for each
/*const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
const callback = function(element) {
   sum += element
}
arr.forEach(callback)
return sum
}
console.log(sumArray(numbers)) */

//setting interval 
//setInterval using interval function

//syntax 
/*
function callback() {

}
setInterval(callback, duration) 

function sayHello(){
  console.log('Hello')
}
setInterval(sayHello, 1000) 

//setting a time using a setTime

function sayHello(){
  console.log('Hello Ethan')
}
setTimeout(sayHello, 200) */

//forEach
/*Iterate an array elements. 
We use forEach only with arrays. 
It takes a callback function with elements, 
index parameter and array itself. 
The index and the array optional.*/

//syntax
/*arr.forEach(element,index, array => {
  console.log(index, element, array)
});

arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})

arr.forEach((element, index, arr) => console.log(index, element, arr))
*/

/*
let sum = 0;
const numbers = [1,2,3,4,5]
numbers.forEach(num => console.log(num))
console.log(sum)

let sum = 0;
const numbers = [1,2,3,4,5];
numbers.forEach(num => sum += num)
console.log(sum) */
/*
const countriestoUpper = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countriestoUpper. forEach((element) => console.log(element.toLocaleUpperCase()))
*/
//map
//map: Iterate an array elements and modify the 
//array elements. It takes a callback function 
//with elements, index ,
//array parameter and return a new array.

/*const modifiedArray = arr.map(function(element, index, arr) {
  return element
})*/

/*const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num )
console.log(numbersSquare) */
/*
const countries19 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const countriesUpper = countries19.map((country) => country.toUpperCase()).slice(0,3)
console.log(countriesUpper)

const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
*/
//filter
/*const countriesContainingLand = countries19.filter((country) => country.includes('land'))
console.log(countriesContainingLand)

const countriesOfFive = countries19.filter((country) => country.length === 5);
console.log(countriesOfFive)

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoreGreaterThanEighty = scores.filter((score) => score.score > 80)
console.log(scoreGreaterThanEighty)

const countriesIA = countries19.filter((country)=> country.includes("ia") )
console.log(countriesIA) */

//reduce
/* reduce: Reduce takes a callback function. 
The call back function takes accumulator, current, 
and optional initial value as a 
parameter and returns a single value. 
It is a good practice to define an initial 
value for the accumulator value. If we do not specify this parameter, 
by default accumulator will get array first value. 
If our array is an empty array, then Javascript will throw an error */
/*
const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum) */

//every
//every: Check if all the elements are similar in one aspect. It returns boolean

/*const names = ['Asabeneh', 'Mathias', 'Elias', 1]

const areAllStr = names.every((name) => typeof name === 'string')

console.log(areAllStr) */

//find
//Return the first element which satisfies the condition

/* const ages = [24, 22, 25, 32, 35, 18]
const ageabove20 = ages.filter((age) => age > 20 )
console.log(ageabove20)

const names11 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const result = names11.find((name) => name.length > 7)
console.log(result) */

/*
const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoreabove99 = scores.find((user) => user.score = 80)
console.log(scoreabove99) */

//findIndex
//findIndex: Return the position of the first element which satisfies the condition

/*const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result)

const agesabove20 = ages.findIndex((age) => age < 20)
console.log(agesabove20) */

//some
//some: Check if some of the elements are similar in one aspect. It returns boolean

/*const names =  ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const bools = [true, true, true, true]


const areSomeTrue = bools.some((b) => b === true)
console.log(areSomeTrue)

const areAllStrings = names.some((eachnName) => typeof(eachnName) === 'string')
console.log(areAllStrings) */

//Sort
/*
sort: The sort methods arranges the array elements either 
ascending or descending order. By default, 
the sort() method sorts values as strings.
This works well for string array items but not for numbers. 
If number values are sorted as strings and it give us wrong result.
Sort method modify the original array. 
It is recommended to copy the original data before you start using 
sort method.
*/

/*
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
sortedProducts = products.sort()
console.log(sortedProducts)

//or

console.log(products.sort())
*/

/*
const numbers = [9.81, 3.14, 100, 37]

console.log(numbers.sort())
// Using sort method to sort number items provide a wrong result

numbers.sort(function (a, b){
  return a - b
})

console.log(numbers)

sortednumber  = numbers.sort((a, b) => a - b )
console.log(sortednumber) //using arrow function

//oprimizing in decending order
console.log(numbers.sort((a, b) => b - a )) 
*/

// Sorting Object Arrays

/*
const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]

users.sort((a,b) => {
  if (a.age > b.age) return -1
  if (a.age < b.age) return 1
  return 0
});
console.log(users)
*/
/*
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
*/
//Explain the difference between forEach, map, filter, and reduce.
/*forEach: Iterate an array elements. 
We use forEach only with arrays. 
It takes a callback function with elements, 
index parameter and array itself. 
The index and the array optional */

/*let sum = 0;
const realNumbers = [1, 2, 3, 4, 5]
realNumbers.forEach((eachNum) => sum += eachNum)
console.log(sum) */

//map
//map: Iterate an array elements and modify the array elements. 
//It takes a callback function with elements, index , 
//array parameter and return a new array

/*const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare) */

//Callback
//A callback is a function which can be passed as parameter to other function. See the example below.

//question 2

/*const countries15 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries15.forEach(country => console.log(country)); */

// question 4
/*
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach((eachName) => console.log(eachName)) */

//question 5
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach((num) => console.log(num)); */

//question 6
/* const countries17 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const UpperCaseCountry = countries17.map((country) => country.toUpperCase())
console.log(UpperCaseCountry) */

//question 7
/*
const countries17 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const newArrFromLength = countries17.map(country => country.length)
console.log(newArrFromLength) */

//question 8
/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squareNum = numbers.map((num => num * num))
console.log(squareNum)  */

//question 9
/* const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const capName =  names.map(name => name.toUpperCase());
console.log(capName) */

//question 10
/*const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
const prices = products.map(product => product.price);

console.log(prices); */

// question 11
/*const countries19 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const countriesWithLand = countries19.filter((eachCountry) => eachCountry.includes("land"))
console.log(countriesWithLand) */

//question 12 13 for 13 change to >
/*
const countries19 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const countriesWithSix = countries19.filter(country => country.length === 6) 
console.log(countriesWithSix) */

//question 14
/*
const countries19 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const countriesStartingWithI = countries19.filter(country => country.startsWith('I'))
console.log(countriesStartingWithI) 
*/

//question 15
/* const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const productsWithValues = products.filter((product) => product.price !== '' && product.price !== ' ')
console.log(productsWithValues) */

//question 16
/*
function getStringLists(arr) {
  return arr.filter(item => typeof item === 'string');
}

const myArray = [1, 'apple', 2, 'banana', true, 'cherry', false, 'date'];
console.log(getStringLists(myArray));
// output: ['apple', 'banana', 'cherry', 'date']
*/

//QUESTION 17
/*
const realNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = realNumbers.reduce((add, ini ) => add * ini, 1)
console.log(sum)
*/

//question 18

/*
const countriesToConcat = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const mySentence = countriesToConcat.reduce((acc, country, index) => {
  if (index === countriesToConcat.length - 1) {
    return acc + " ," + 'Estonia' + " " +  "and" + " "  + country + ' are north European countries';
  } else {
    return acc + ', ' + country;
  }
});
console.log(mySentence);
*/

//question 19
//some: Check if some of the elements are similar in one aspect. It returns boolean
//every:Check if all the elements are similar in one aspect. It returns boolean

//question 20
/*
const classNames = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const checkClassNames = classNames.some((className) => className.length > 7 )
console.log(checkClassNames)
*/


/* question 21
const landOrNotCountries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const landOrNot = landOrNotCountries.every((landCountries)=> landCountries.includes("land"))
console.log(landOrNot) //try some
*/

/* question 22
find: Return the first element which satisfies the condition
findIndex: Return the position of the first element which satisfies the condition*/

// question 23
/*
const findSixCountries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const findSix = findSixCountries.find((sixString) => sixString.length === 6)
console.log(findSix)
*/

// question 24
/*
const findSixCountriesPosition = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const findSixPosition = findSixCountriesPosition.findIndex((sixString) => sixString.length === 6)
console.log(findSixPosition) */

//question 25 & 26 
/*
const findCountryPosition = ['Finland', 'Sweden', 'Denmark', ] //'Norway', 'IceLand', 'Russia']
const index = findCountryPosition.findIndex(country => country === 'Norway');
console.log(index); // 3
*/

// level 2
// Question 1
/*
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

let totalPrice = products.filter((eachprice) => eachprice.price != '' && eachprice.price != ' ' ).reduce((prev, cur) => prev + cur.price, 0);
console.log(totalPrice)
*/

// Question 2
/*
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
 totalPrice = products.reduce((acc, cur) => acc + cur.price, 0)
*/

//question 3
// using import/export function
//step1 start by exporting the variable countries in countries.js
//step2 go to main.js and import the countries from path
//step 3 include your algorithim, i choose to sort by length using sort higher order function taught in this lesson

/*topCountries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]


function sortCountriesByLength(){
  return topCountries.sort((a,b) => a.sortCountriesByLength  - b.sortCountriesByLength)
}

//sortedCountries = sortCountriesByLength()

console.log(sortCountriesByLength())
*/

// 4 SKIPPED

// QUESTION 5
/*
topCountries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

function getFirstTenCountries (){
   return topCountries.slice(0, 10)
}

console.log(getFirstTenCountries())
*/


// QUESTION 6
/*
topCountries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

function getLastTenCountries (){
   return topCountries.slice(1, 12)
}

console.log(getLastTenCountries())
*/

/*let topCountries = [
  'Albania',
  'Bolivia',
  'Belgium',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

function mostCommonIntial(countries){
  let letterCounts = {};

  for (const country of countries){
    const firstLetter = country[0]

if (letterCounts[firstLetter]){
  letterCounts[firstLetter] +=1;
}

else {
  letterCounts[firstLetter] = 1;
}    
  }

  let mostCommonLetter = null;
  let maxCount = 0;

  for (const letter in letterCounts){
    if (letterCounts[letter] > maxCount){
      maxCount = letterCounts[letter];
      mostCommonLetter = letter;
    }
  }
  return mostCommonLetter
}

const result = mostCommonIntial(topCountries);
console.log(`The most common initial letter is: ${result}`) */


// level 3
// abandoned for now









