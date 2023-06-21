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

const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

//const stringifyStudentObject = JSON.stringify(student, undefined, 4)
//console.log(stringifyStudentObject)

const stringifyStudentObject = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(stringifyStudentObject)

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`
const data = JSON.parse(txt);

let maxSkillUser;
let maxSkillCount = 0;

for (const eachUser in data){
    const skills = data[eachUser].skills
    if (skills.length > maxSkillCount){
        maxSkillCount = skills.length;
        maxSkillUser = eachUser
    }
}
console.log("User with the most skills:", maxSkillUser);
console.log("Number of skills:",  maxSkillCount);
