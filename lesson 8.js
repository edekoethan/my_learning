/* var is  function scoped, if scoped, looped scoped
function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}

if (true){
    var gravity = 9.81
    console.log(gravity)
  }
  console.log(gravity) 

for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3*/

/* let and const are the same 
function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity)
  
  }
  console.log(letsLearnScope()) //undefined because 

  The scope let and const are the same. 
  The difference is only reassigning. 
  We can not change or reassign the value of the const variable. 
  I would strongly suggest you to use let and const, by using let and const you will write clean code and avoid hard to debug mistakes. 
  As a rule of thumb, you can use let for any value which change, 
  const for any constant value, and for an array, object, 
  arrow function and function expression */
 
//OBJECT

//an empty object
const person = {}

//creating an object with empty values
/* const rectangle = {
length: 20,
width: 20 
}
console.log(rectangle)

const personData = {
    firstName: 'Ethan',
    lastName: 'Edeko',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
  
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+3584545454545'
  }

console.log(personData) 

//getting values from an object

//mtd1 using '.' followed by key name if the key-name is a one word

console.log(personData.firstName)
console.log(personData.getFullName())
console.log(personData.skills)

// value can be accessed using square bracket and key name

console.log(personData['firstName'])
console.log(personData['lastName'])  */


//Creating object methods
/* we cannot use arrow functiom for object method;

console.log(personData.getFullName()) */

// setting new key for an object
// An object is a mutable data structure and 
// we can modify 
// the content of an object after it gets created.

/*const personData = {
    firstName: 'Ethan',
    lastName: 'Edeko',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
  
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+3584545454545'
  }

personData.nationality = 'Nigerian'
personData.title = 'Pharmacist'
personData.skills.push('AWS')
personData.skills.push('W3.CSS')
personData.isMarried = true


personData.getPersonInfo = function(){
    let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length -1) //THIS PRESERVES THE ETIRE LIST
    .join(", ")

let lastSkill = this.skills.splice(this.skills.length -1)[0]

let skills = `${skillsWithoutLastSkill}, and  ${lastSkill}`


let statement = `${ this.getFullName()} is a ${this.title}. \n He lives in ${this.country}. \nHe teaches ${skills}. `

return statement
}

console.log(personData)
console.log(personData.getPersonInfo()) */

//OBJECT METHOD- OBJECT ASSIGN

const firstPerson = {
    firstName : 'Ero',
    age : 21,
    country : 'Ghana',
    city : 'Accra',
    skills : ['HTML', 'CSS', 'JS'],
    title : 'Pharm',
    address : {
        houseNumber : 15,
        street : 'Uwaifo',
        poBox : 2002,
        city : 'Accra'
    },
    getPersonInfo : function(){
        return `I Am ${this.firstName} and i live in ${this.city}, ${this.country}, \n I Am ${this.age} years old.`
    }
}

const copyfirstPerson = Object.assign({}, firstPerson)


//OBJECT METHOD- OBJECT KEYS

/*const keys = Object.keys(copyfirstPerson)
console.log(keys) //THIS gives you all the keys

const firstPersonAddress = Object.keys(copyfirstPerson.address)
console.log(firstPersonAddress)
//Object  values

const values = Object.values(copyfirstPerson)
console.log(values)*/

//Getting object keys and values using Object.entries

//const entries = Object.entries(copyfirstPerson)
//console.log(entries)

//Checking properties using hasOwnProperty()
//hasOwnProperty: To check if a specific key or property exist in an object

//console.log(copyfirstPerson.hasOwnProperty('name'))
//console.log(copyfirstPerson.hasOwnProperty('firstName')) //can check key but not value, firstName but not Ero


/*const myDog = {
    name : 'scar',
    legs : 4,
    color : 'brownNwhite',
    age_years : 1,
    bark : function(){
        return `Woof Woof`
    },

getDogInfo : function(){
    return  `This is my dog.\nHis name is ${this.name}. \nHe barks ${this.bark}. \nHe is  ${this.color} in color. `
}
}

const copyMyDog = Object.assign({}, myDog)
console.log(copyMyDog) */

/*const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
} */

/*let mostSkills;
let max = 0
for (const property in users) {
    if (users[property].skills.length > max){
        max = users[property].skills.length;
        mostSkills = property
    }
}   

console.log(mostSkills)


count = 0;

for (const loggedIn in users){
    if(users[loggedIn].isLoggedIn == true){
        count++
    }
}

console.log(count) */
 // 3 and 4 is skipped

/* const copyUsers = Object.assign({}, users)

console.log(copyUsers) */

/*const keys = Object.keys(users.Alex) // we referenced alex we could have left it blank 
 console.log(keys) */

/*const values = Object.values(users.Paul)
console.log(values) */

/*let country = {
  name: "Nigeria",
  capital: "?",
  population: "7 billion",
  languages: ["hausa", "igbo", "yoruba"]
}

console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.languages}`)*/

personAccount = {
firstName : 'Eromosele',
lastName : 'Edeko',
incomes :{ 
  nineToFive : 200,
  webJobs : 700,
  graphicdDesign : 300,
} ,
expenditure :{ 
rent: 100,
food : 200,
gym : 100,
clothes : 100,
},
/*
totalIncome: function(){
  let sumIncome = 0
  for (const value of Object.values(personAccount.incomes)) {
   sumIncome += value;
  }
  return `The calculated total income is  $${sumIncome} `
},

totalExpenditure: function(){
  let sumExpenditure = 0
  for (const value of Object.values(personAccount.expenditure)) {
   sumExpenditure += value;
  }
  return `The calculated total income is  $${sumExpenditure} `
}, */

/*accountInfo : function(){
  let sumIncome = 0
  for (const value of Object.values(personAccount.incomes)) {
   sumIncome += value;
  }
  let sumExpenditure = 0
  for (const value of Object.values(personAccount.expenditure)) {
   sumExpenditure += value;
  }


const statement = `Your monthly earning is $${sumIncome}, and your total monthly expenditure is $${sumExpenditure}. \nYou now have $${sumIncome - sumExpenditure} as allocated savings`
return statement
}, */
}


/*const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const signUp = (username, email, password) =>{
    users.forEach(user => {
      if (user.username === username && user.password === password){
        console.log('You are already have an account')
      }
      else{
        let date = new Date()
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        let id = [];
        for (let i = 0; i < 6; i++){
          id.push(chars[Mathh.floor(Math.random() * chars.length)])
        }
        id = id.join('');

        users.push({
         _id: id,
         username : username,
         email : email,
         password : password,
         createdAt : `${date.getDate()}/${date.getMonth()}/${date.getFullYear} ${date.getHours}: ${date.getMinutes}`,
         isLoggedIn : 'false'        
        })
      }
  })
  console.log(users[users.length - 1]);
}
*/
