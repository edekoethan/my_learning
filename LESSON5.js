//array
/*const numbers = [0,1,2,2,3,4,5,6]
console.log(numbers)
console.log(`The total items in the numbers array is ${numbers.length}`)

const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr) 

let js = 'JavaScript'
const charInJavaScript = js.split('')
console.log(charInJavaScript) 


let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(txt.replace(/[.,]/g,''));
console.log(words)

const fruits = ['banana', 'apple', 'orange', 'mango', 'lemon']


const numbers = [23,1,2,3,45,89,90,33, 22.8]

console.log(numbers.length)
console.log(numbers[1])

let lastIndex = fruits.length -1
console.log(lastIndex)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
let lastTech = webTechs.length -1
console.log(webTechs[lastTech]) 
//FILL ARRAY
const eightXvalues = Array(8).fill('X')
console.log(eightXvalues)

const mynameFill = Array(12).fill('ethan')
console.log(mynameFill)

//CONCAT ARRAY

const firstLine = [1,2,3]
const secondLine = [4,5,6]
const zeroLine = prompt('enter list here')
const thirdLine = firstLine.concat(secondLine).concat(zeroLine)
console.log(thirdLine) 

const listsAbc = [1, 3, 5 , 7]
console.log(listsAbc.indexOf(5)) 

const  fruitSalad =  ['banana', 'orange', 'mango', 'lemon']
let index = fruitSalad.indexOf(prompt('Enter fruit here').toLocaleLowerCase())

if(index == -1) {
    console.log('This fruit does not exist in the array')
}
else{
    console.log('This fruit does exist in the array')
} 

const numbers = [5,4,3,2,1]
console.log(numbers.includes(11))
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 
'Redux', 'Node', 'MongoDB']

console.log(webTechs.includes('CSS')) 

const books = ['bible', 'quran', 'book of Eli']
console.log(books)
console.log(books.toString())

const  peoplesName= ['john', 'abel','einstein', 'drake']
console.log(peoplesName.join(' '))

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]
console.log(numbers.slice(1,11))   //slice

const numbers = [1,2,3,4,5,6]
numbers.splice(3,3,7,7,9)
console.log(numbers) 

const arr = ['food', 'friends', 'sick', 'biscuit']
arr.push('dog')
console.log(arr) 

const arr = ['food', 'friends', 'sick', 'biscuit']
arr.pop()
console.log(arr) 

const numbers = [1,2,3,4,5,6,7,8,9]
numbers.shift()
console.log(numbers) 

const numbers = [1,2,3,4,5,6,7,8,9]
numbers.unshift(11)
console.log(numbers) 

const myList = [2,4,6,8,10]
myreVersedarr = myList.reverse()
console.log(myreVersedarr) //easy way 


//sorting elements
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  webTechs.sort()
console.log(webTechs) //sort alphabetically

const arrayOdd = [1,3,5]
const arrayEven = [2,4,6]
const arrayOfArray = [  [1,3,5] ,[2,4,6]]

console.log( arrayOfArray [1])

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack) */

// excercise
const countries = [
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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


/* let lastElement = notEmptyArr.slice(-1)
console.log(lastElement) 

const arr  = [1,2,3,11,5,6,7]
middleElementIndex = (arr.length - 1 ) / 2
middleElementValue = arr[middleElementIndex]
console.log(middleElementValue)

const mixedDataTypes = [1, 'one', 5 , 'five', 'twelve', 3.5, false]
arr.length
console.log(arr.length)


console.log(`${itCompamnies.join(', ')} are big IT Companies`) 


 let index = itCompamnies.indexOf(prompt('Enter IT company here'))
 let itemFound = itCompamnies[index]
 if (i == -1) {
  console.log(`${itemFound} does not exist`)
 }  
 else {
  console.log(`${itemFound} exists in the list`)
 } 


 const  itCompamnies = [
  'facebook', 
  'google', 
  'microsoft', 
  'apple', 
  'iBM', 
  'oracle',
  'amazon' 
  ]
console.log(itCompamnies)
let newslice = itCompamnies.slice(5,6)
console.log(newslice) 
//slice gives you your nitr list excluding wat u sliced out as a ***new variable***

const  itCompamnies = [
  'facebook', 
  'google', 
  'microsoft', 
  'apple', 
  'iBM', 
  'oracle',
  'amazon' 
  ]

  console.log(itCompamnies)
  var newslice = itCompamnies.slice(3,4)
  console.log(newslice) 

  const  itCompamnies = [
    'facebook', 
    'google', 
    'microsoft', 
    'apple', 
    'iBM', 
    'oracle',
    'amazon' 
    ]
  
    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(text.replace(/[,]/g, ''));
    let words = text.split(' ')
    console.log(words.length) 
    console.log(topCountries.topCountries)
    console.log(web_techs3.itCompamnies) 

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart[shoppingCart.map ((x, i) => [i, x]).filter (
  x => x[1] == "tea")[''] ] = 'Green Tea'
  console.log(shoppingCart)

  


const topCountries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Finland',
    'Ethiopia',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
let index = topCountries2.indexOf('Ethiopia') 
if(index === -1){
   console.log(topCountries2.unshift('Ethopia'))  
} 
else {
    console.log('ETHOPIA exists')
}

const  itCompamnies = [
  'facebook', 
  'google', 
  'microsoft', 
  'apple', 
  'iBM', 
  'oracle',
  'amazon' 
  ]

  let index = itCompamnies.indexOf('SASS') 
  if(index === -1){
  
    console.log(itCompamnies.push('Sass'))  
  } 
  else {
      console.log('SASS is a CSS')
  }
   


const arr  = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
middleElementIndex = (arr.length  ) / 2
middleElementValue = arr[middleElementIndex]
console.log(middleElementValue)

var res = 0; //res var shows we want to begin our count from 0;
for (i = 0; i < arr.length; i++){
    res += arr[i] //loop function more on this later
}

average = res / 10
console.log(`The average is ${Math.floor(average)}`)

const max = Math.max(...arr)
const min = Math.min(...arr)

let range = max - min
console.log(`The range is ${range}`)

let min_average = min - average
let max_average = max - average
let difference_maxMin = min_average- max_average 

if (max_average == min_average) {
  console.log(`Values are equivalent`)
}
else{
  console.log(`Values are unequivalent ${Math.abs(difference_maxMin)}`)
} 

const topCountries2 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Finland',
  'Ethiopia',
  'Germany'

]
 topCountries2.length
 console.log(topCountries2)

let evenMedian = topCountries2.length / 2
let oddMedian = (topCountries2.length - 1) / 2
 if (topCountries2.length  % 2 === 0) {
  console.log(`The median is ${topCountries2[evenMedian]}`)
 }
else {
  console.log(topCountries2[oddMedian])
}


const topCountries2 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Finland',
  'Ethiopia',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

if (topCountries2.length  % 2 === 0) {
  console.log( topCountries2.slice(6) )
}

else {
  console.log( topCountries2.slice(6) )
}

 */

















































