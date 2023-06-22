//console.log("try")
//webstorages
localStorage.setItem('firstName', 'ethan')

localStorage.getItem('firstName')
/*
When we set data to be stored in a localStorage, it will be stored as a string. If we are storing an array or an object, we should stringify it first to keep the
format unless otherwise we lose the array structure or the object structure of the original data.
*/

//We store data in the localStorage using the localStorage.setItem method.

//syntax
localStorage.setItem('key', 'value')


//Storing string in a localStorage
localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)

//Storing number in a local storage
localStorage.setItem('age', 200)
console.log(localStorage)

//Storing an array in a localStorage
// If we are storing an array, an object or object array, we should stringify the object first. See the example below.

const skills2 = ['HTML', 'CSS', 'JS', 'React']
const skillsJSON = JSON.stringify(skills2, undefined, 4)
localStorage.setItem('skills2', skillsJSON)

let skills4 = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]
  
  let skillJSON = JSON.stringify(skills4)
  localStorage.setItem('skills4', skillJSON)

//Getting item from localStorage

//We get data from the local storage using localStorage.getItem() method.

//syntax
//localStorage.getItem('key')

let firstName = localStorage.getItem('firstName')
let my_age = localStorage.getItem('age')
let my_skills = localStorage.getItem('skills')
console.log(firstName, my_age, my_skills)

//As you can see the skill is in a string format. Let us use JSON.parse() to parse it to normal array.
const skillARR = JSON.parse(my_skills, undefined, 4)
console.log(skillARR)

//The clear method, will clear everything stored in the local storage
localStorage.clear()

//tasks
//Exercises: Level 1
localStorage.setItem('firstName','ethan') 
localStorage.getItem('firstName')

localStorage.setItem('lastName','edeko') 
localStorage.getItem('firstName')

localStorage.setItem('age', 24)
localStorage.getItem('age')

localStorage.setItem('country','westAfrica') 
localStorage.getItem('westAfrica')

localStorage.setItem('city','benin') 
localStorage.getItem('city')
console.log(localStorage)

//Exercises: Level 2
const studentOne = {
firstName : 'Amaka',
lastName : 'crush',
studentSkills : ['baking', 'planning', 'co-ordination', 'writting'],
tribe : 'ibo',
school : 'uniIlorin',
isEnrolled : true
}

studentInfoString = JSON.stringify('studentOne', undefined, 4)
localStorage.setItem('studentOne', studentInfoString)
console.log(localStorage)