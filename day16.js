//console.log("try")
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
skillsJSON = JSON.stringify(skills, undefined, 4)
console.log(skillsJSON)

let age = 250;
const stringifyAge = JSON.stringify(age, undefined, 4)
console.log(typeof stringifyAge)

let isMarried = true

const isMarriedStringify = JSON.stringify(isMarried, undefined, 4)
console.log(typeof isMarriedStringify)