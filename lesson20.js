//journey so far 
/*
****Writing clean code
****A JavaScript style guide is a set of standards that tells how JavaScript code should be written and organized. In this section, we will talk about JavaScript guides and how to write a clean code.
****JavaScript is a programming language and like human language it has syntax
*/

//variables
let firstName = 'Ethan'
let lastName = 'Edeko'
let country = 'Nigeria'
let city = 'Warri'

const PI = Math.PI
const gravity = 9.81

//We chose to make array names plural

names;
numbers;
countries;
languages;
skills;
fruits;
vegetables;

//functions
// function which return full name of a person
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

const hexaColor = () => {
    const str = '0123456789abcdef'
    let hexa = '#'
    let index
    for (let i = 0; i < 6; i++) {
      index = Math.floor(Math.random() * str.length)
      hexa += str[index]
    }
    return hexa
  }
  
  const showDateTime = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
  
    const dateMonthYear = date + '.' + month + '.' + year
    const time = hours + ':' + minutes
    const fullTime = dateMonthYear + ' ' + time
    return fullTime
  }

//loops
for (let i = 0; i < n; i++){
    console.log()
}

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// iterating an array using regular for loop
let len = names.length;
for(let i = 0; i < len; i++){
    console.log(names[i].toUpperCase())
}


// iterating array using forEach 
names.forEach((name) => name.toUpperCase())

//objects
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
    isMarried: true
  }
  for(const key in person) {
      console.log(key)
  }

  //conditionals
  if (condition) {
    // this part of code run for truthy condition
   } else {
    // this part of code run for false condition
   }

// if else if else if else

   let a = 0
   if (a > 0) {
    console.log(`${a} is a positive number`)
   } else if (a < 0) {
    console.log(`${a} is a negative number`)
   } else if (a == 0) {
    console.log(`${a} is zero`)
   } else {
    console.log(`${a} is not a number`)
   }

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
 case 'monday':
   console.log('Today is Monday')
   break
 case 'tuesday':
   console.log('Today is Tuesday')
   break
 case 'wednesday':
   console.log('Today is Wednesday')
   break
 case 'thursday':
   console.log('Today is Thursday')
   break
 case 'friday':
   console.log('Today is Friday')
   break
 case 'saturday':
   console.log('Today is Saturday')
   break
 case 'sunday':
   console.log('Today is Sunday')
   break
 default:
   console.log('It is not a week day.')
}

// ternary
let isRaining = true
isRaining
 ? console.log('You need a rain coat.')
 : console.log('No need for a rain coat.')

//Classes
//We declare class with CamelCase which starts with capital letter.

class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }