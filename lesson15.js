// Object literal is a singleton. If we want to get a similar object , we have to write it. However, class allows to create many objects. 
//This helps to reduce amount of code and repetition of code.

//DEFINING A CLASS

/* syntax
class ClassName {
    //  code goes here
}
*/

//Class Instantiation
//Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new. 

/*
class Person {
    // code goes here
}

const person1 = new Person()

console.log(person1)
*/
//As you can see, we have created a person object. Since the class did not have any properties yet the object is also empty.

//class constructor

/*
class Person_ex1 {  //clas constructor is basically a function in the class object that we give arguments to 
    constructor(firstName, lastName){
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
    }
}
*/
//const person_ex1 = new Person_ex1()
//console.log(person_ex1)

/*
All the keys of the object are undefined. 
When ever we instantiate we should pass the value of the properties. 
Let us pass value at this time when we instantiate the class.
*/

//const person_ex1 = new Person_ex1("Ethan", "Edeko")
//console.log(person_ex1)

/*
As we have stated at the very beginning that once we create a class we can create many object using the class. 
Now, let us create many person objects using the Person class.
*/

/*

class Person_ex2 {  
    constructor(firstName, lastName){
        console.log(this)
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person1 = new Person_ex2("Edeko", "Ethan")
const person2 = new Person_ex2("Emmanuel", "Hughes")
const person3 = new Person_ex2("Stephen", "Samuel")

console.log(person1, person2, person3)

*/

//lets add more propertiesv to our class

/*
class Person_ex3 {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}

const person_ex3 = new Person_ex3("Ethan", "Edeko", "25", "Nigeria", "Warri")

console.log(person_ex3)
*/

//Default values with constructor

/*
class Person_ex4 {
    constructor(firstName = "Ethan",
        lastName = "Edeko",
        age = 25,
        country = "Nigeria",
        city = "Warri"){
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.country = country
            this.city = city  
       }
}
const person_ex4 = new Person_ex4()
console.log(person_ex4)
*/

//class methods
/*
*The constructor inside a class is a builtin function which allow us to create a blueprint for
*the object. In a class we can create class methods. Methods are JavaScript functions inside
*the class. Let us create some class methods.
*/

/*
class Person_ex5 {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }

    getFullName() {
        return fullName = this.firstName + " " + this.lastName //i simplified
       // return fullName
    }
}
const person_ex5 = new Person_ex5("Ethan","Edeko", 25, "Warri", "Helsinki")
console.log(person_ex5.getFullName())
*/

//properties with initial value 
 /*
 When we create a class for some properties we may have an initial value. For instance if you are playing a game, you starting score will be zero. 
 So, we may have a starting score or score which is zero. In other way, we may have an initial skill and we will acquire some skill after some time.
*/

/*
class  Person_ex6 {
    constructor(firstName, lastName, age, country, city){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score =  0
    this.skills = []
    }
getFullName() {
   return fullName = this.firstName + " " + this.lastName
}
}

const person_ex6 = new Person_ex6("Ethan", "Edeko", 25, "Nigeria", "Warri")

console.log(person_ex6.score)
console.log(person_ex6.skills)
*/

//getter 
/*this method allows us to access the value from the object
We write a get method using keyword get followed by a function. 
Instead of accessing properties directly from the object 
we use getter to get the value. 
See the example bellow
*/

/*
class Person_ex7 {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName(){
        return fullName = this.firstName + ' ' + this.lastName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills
    }
}

const person_ex7 = new Person_ex7("Ethan", "Edeko", 25, "Nigeria", "Warri")
console.log(person_ex7.getFullName(), person_ex7.getSkills, person_ex7.getScore)
*/

//setter
/*
The setter method allow us to modify the value of certain properties. We write a setter method using keyword set followed by a function. See the example bellow.
*/

/*
class Person_ex8{
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.testScore = 0
        this.skills = []
    }
    getFullName(){
        return fullName = this.firstName + ' ' + this.lastName
    }

    set setScore(score){
        return  this.testScore += score
    }

    set setSkill(skill){
        this.skills.push(skill)
    }
}

const person_ex8 = new Person_ex8("Ethan", "Edeko", 25, "Nigeria", "Warri")

person_ex8.setScore = 1
person_ex8.setSkill = [ "HTML", "CSS", "JavaScript" ]

console.log(person_ex8.testScore)
console.log(person_ex8.skills)

*/

/*
In the given code, there is a difference between using return this.testScore = score and return this.testScore += score. Let's understand each of them:

return this.testScore = score:
This line of code assigns the value of score to the testScore property of the Person_ex8 object and returns the assigned value. The assignment operation (=) sets the testScore to the value of score. It does not perform any addition or increment.

return this.testScore += score:
This line of code adds the value of score to the current value of testScore and assigns the result back to testScore. The += operator is a shorthand for adding and assigning. It increments the current value of testScore by the value of score and returns the updated value.

To summarize, the difference is that return this.testScore = score assigns a new value to testScore, while return this.testScore += score adds the value of score to the current value of testScore and assigns the updated value back to testScore.

*/

//Let us add regular method called getPersonInfo in the Person class.

/*
class Person_ex9{
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.testScore = 0
        this.skills = []
    }
    getFullName(){
        return fullName = this.firstName + ' ' + this.lastName
    }

    set setScore(score){
        return  this.testScore = score
    }

    set setSkill(skill){
        this.skills.push(skill)
    }

    getPersonInfo(){
        let fullName = this.getFullName()
        let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
      let formattedSkills = skills ? `He knows ${skills}` : ''

      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
}



const person_ex9 = new Person_ex9("Ethan", "Edeko", 25, "Nigeria", "Warri")

person_ex9.setSkill = 'Planning'
person_ex9.setSkill = 'Managing'
person_ex9.setSkill = 'Organizing'
person_ex9.setScore = 1
person_ex9.setSkill = [ "HTML", "CSS", "JavaScript" ]

console.log(person_ex9.getPersonInfo())

*/

//static methods 
//The static keyword defines a static method for a class.
/*
 Static methods are not called on instances of the class. Instead, they are called on the class itself. These are often utility functions, such as functions to create or clone objects. An example of static method is Date.now(). The now method is called directly from the class.
*/

/*

class Person_ex10 {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.scores = 0
        this.skills = []
    }
   getFullName(){
    const fullName = this.firstName + "  " + this.lastName
    return fullName
   }

   get getScore(){
    return this.scores
}
   get getSKills(){
    return this.skills
   }
   
   set setScore(score){
    this.scores +=  score
   }

   set setSkills(skill){
    this.skills.push(skill)
   }

static favouriteSkill(){
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() *  skills.length)
    return skills[index]
}

static showDateTime(){
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1 //anytime you use the built in function get month you need to add one cos the first month of the yesr january is stored as 0
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()

if (hours < 10){
    hours = "0" + hours
}

if ( minutes < 10){
    minutes = "0" + minutes //0 is added as a string so as to get double digits even at 1 - 9 minutes
}

let dateMonthYear = date + "." + month + "." + year
let time = hours + ":" + minutes
let fullTime = dateMonthYear + " " + time
return fullTime
}
}

console.log(Person_ex10.favouriteSkill()) //notice we do not needv to inststantiate the class because the methods we need are static 
console.log(Person_ex10.showDateTime()) //The static methods are methods which can be used as utility functions.


*/

//inheritance
//Using inheritance we can access all the properties and the methods of the parent class.
//This reduces repetition of code. If you remember, we have a Person parent class and we
//will create children from it. Our children class could be student, teach etc.

/*
class childClassName extends parentClass {
    //code goes here
}
*/

/*
class Person_ex10 {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = "Andrew"
        this.age = age
        this.country = country
        this.city = city
        this.scores = 0
        this.skills = []
    }
   getFullName(){
    const fullName = this.firstName + "  " + this.lastName
    return fullName
   }

   get getScore(){
    return this.scores
}
   get getSKills(){
    return this.skills
   }
   
   set setScore(score){
    this.scores +=  score
   }

   set setSkills(skill){
    this.skills.push(skill)
   }

static favouriteSkill(){
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() *  skills.length)
    return skills[index]
}

static showDateTime(){
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1 //anytime you use the built in function get month you need to add one cos the first month of the yesr january is stored as 0
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()

if (hours < 10){
    hours = "0" + hours
}

if ( minutes < 10){
    minutes = "0" + minutes //0 is added as a string so as to get double digits even at 1 - 9 minutes
}

let dateMonthYear = date + "." + month + "." + year
let time = hours + ":" + minutes
let fullTime = dateMonthYear + " " + time
return fullTime
}
}

class student extends Person_ex10{
    saySomething(){
        console.log('Student is a child of parent class')
    }
}

const student_one = new student("Edeko", "Ero", "Nigeria", 26, "Benin") //we stil have to instasntiate the child class
console.log(student_one.saySomething()) //we can call functions in the child class
console.log(student_one.getFullName()) //we can call functions from the parent class based on the parameters we persed in the child class, but if there is a default the default will be persed and notthe argument
*/

//OVERRIDING METHODS

/*
class Person_ex10 {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = "Andrew"
        this.age = age
        this.country = country
        this.city = city
        this.scores = 0
        this.skills = []
    }
   getFullName(){
    const fullName = this.firstName + "  " + this.lastName
    return fullName
   }

   get getScore(){
    return this.scores
}
   get getSKills(){
    return this.skills
   }
   
   set setScore(score){
    this.scores +=  score
   }

   set setSkills(skill){
    this.skills.push(skill)
   }

static favouriteSkill(){
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() *  skills.length)
    return skills[index]
}

static showDateTime(){
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1 //anytime you use the built in function get month you need to add one cos the first month of the yesr january is stored as 0
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()

if (hours < 10){
    hours = "0" + hours
}

if ( minutes < 10){
    minutes = "0" + minutes //0 is added as a string so as to get double digits even at 1 - 9 minutes
}

let dateMonthYear = date + "." + month + "." + year
let time = hours + ":" + minutes
let fullTime = dateMonthYear + " " + time
return fullTime
}
}
*/

/*
*We can customize the parent methods, we can add additional properties to a child class
*If we want to customize, the methods and if we want to add extra properties, we need to use the constructor function the child class too
* Inside the constructor function we call the super() function to access all the properties from the parent class.
*/

/*
class student extends Person_ex10 {
    constructor(firstName, lastName, age, country, city, gender){
        super(firstName, lastName, age, country, city, gender)
            this.gender = gender
    }
        saySomething() {
            console.log("Student is a child of parent")
        }
    
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
    
        let formattedSkills = skills ? `He knows ${skills}` : ''
        let pronoun = this.gender == 'Male' ? 'He' : 'She'
    
        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
      }
    }
const student_two = new student("Edeko", "Ero", "Nigeria", 26, "Benin", "Male")
console.log(student_two.getPersonInfo())
*/

//excercises
/*
 class Animal {
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.properties = []
    }

    animalType(legs) {
        if (legs === 0) {
          return 'winged animal';
        } else if (legs === 2) {
          return 'bird';
        } else if (legs === 4) {
          return 'land animal';
        } else {
          return 'unsure';
        }
      }

set setProperties(property){
    this.properties.push(property)
}

animalBio(){
 let formattedProperties =  this.properties.length > 0 &&
 this.properties.slice(0, this.properties.length - 1).join(', ') +
   ` and ${this.properties[this.properties.length - 1]}`
 let bio = `I am a ${this.animalType(this.legs)}, my name is ${this.name}, i am  ${this.age} year[s] old. \nMy properties are ${formattedProperties}`
 return bio
}

}

const dogRufus = new Animal("Rufus", 9, "brown", 4)

dogRufus.setProperties = "chiwawa"
dogRufus.setProperties = "likes to fetch"
dogRufus.setProperties = "play catch"
dogRufus.setProperties = "play dead"


console.log(dogRufus.animalBio())

class rufus_puppy extends Animal {

constructor(name, age, color, legs){
    super(name, age, color, legs)
    //this.tail = wiggle
}

saySomething(){
    console.log("I am rufus puppy")
}



}

const ruffy = new rufus_puppy("ruffy", 1, "brownNwhite", 4)

ruffy.setProperties = "wiggle my tail"
ruffy.setProperties = "play with puss"

console.log(ruffy.saySomething())
console.log(ruffy.animalBio())


class rufus_enemy extends Animal {

    constructor(name, age, color, legs, gender){
        super(name, age, color, legs)
        this.gender = gender
    }
    
    saySomething(){
        console.log("I am rufus enemy")
    }
    
    animalBio(){
        let formattedProperties =  this.properties.length > 0 &&
        this.properties.slice(0, this.properties.length - 1).join(', ') +
          ` and ${this.properties[this.properties.length - 1]}`
        let pronoun = this.gender == "Male" ? "He" : "She"
        let bio = `${pronoun} is a ${this.animalType(this.legs)}, her name is ${this.name}, ${pronoun} is ${this.age} year[s] old. \nHer properties are ${formattedProperties}`
        return bio
       }
    
    
    }
    
    const foxy_cat = new rufus_enemy("puss", 1, "black", 4, "Female")
    
    foxy_cat.setProperties = "chasing rats"
    foxy_cat.setProperties = "fighting ruffy"
    
    console.log(foxy_cat.saySomething())
    console.log(foxy_cat.animalBio())
    */

    //level 3
    class Statistics {
        constructor(data) {
          this.data = data;
        }
      
        count() {
          return this.data.length;
        }
      //The count() method returns the number of elements in the data array by accessing the length property.
        sum() {
          return this.data.reduce((total, value) => total += value, 0);
        }
      
      //The sum() method calculates the sum of all the values in the data array using the reduce() method. It starts with an initial value of 0 and adds each value in the array to the running total.
        min() {
          return Math.min(...this.data);
        }
      //The min() method uses the spread syntax (...) to spread the elements of the data array as arguments to the Math.min() function. It returns the smallest value in the array.
        max() {
          return Math.max(...this.data);
        }
      //The max() method uses the spread syntax to spread the elements of the data array as arguments to the Math.max() function. It returns the largest value in the array.
        range() {
          return this.max() - this.min();
        }
      //The range() method calculates the range of the data by subtracting the minimum value (obtained using min()) from the maximum value (obtained using max()).
        mean() {
          return this.sum() / this.count();
        }
      //The mean() method calculates the mean (average) of the data by dividing the sum of the values (obtained using sum()) by the count of the values (obtained using count()).
        median() {
          const sortedData = this.data.slice().sort();
          const n = sortedData.length;
          const middle = Math.floor(n / 2);
      
          if (n % 2 === 0) {
            return (sortedData[middle - 1] + sortedData[middle]) / 2;
          } else {
            return sortedData[middle];
          }
        }
      
        /* the sortedData is a variable that holds the data after it has been sorted, it has a slice function the absence of an argument in the slice function helpss it copy the data so as to preserve the original
        *In the code snippet provided, the length of the data is stored in the variable n, which is used to calculate the middle index
        * the actual median is calculated by dividing the length of sorted data (n) by 2, and rounding down
        * the if and else are use to switch between two possibilities case1 the aray is even, case 2 the array is odd
        * If the length of the data is even (n % 2 === 0), it means there is an even number of elements in the data set. In this case, the median is calculated by taking the average of the two middle elements.
        * On the other hand, if the length of the data is odd, the else block is executed. In this case, there is a single middle element in the sorted data, and that element is the median. The code simply returns the value of sortedData[middle] as the median.
        * === is used because it compares type and value == compares only value
        */
        mode() {
          const counts = {};
          this.data.forEach((value) => {
            counts[value] = counts[value] ? counts[value] + 1 : 1;
          });
      
          let maxCount = 0;
          let modes = [];
          for (const value in counts) {
            if (counts[value] > maxCount) {
              maxCount = counts[value];
              modes = [value];
            } else if (counts[value] === maxCount) {
              modes.push(value);
            }
          }
      
          return { mode: modes, count: maxCount };
        }
      
        /*explanation offline see extra sheets */
        var() {
          const mean = this.mean(); //initial step fr cal mean
          const variance = this.data.reduce((total, value) => { /*Var(X) = sum((X_i - mean(X))^2) / N */
            return total + Math.pow(value - mean, 0);
          }, 0) / this.count();
      
          return variance;
        }
      
        std() {
          return Math.sqrt(this.var());
        }
      
        freqDist() {
          const counts = {};
          this.data.forEach((value) => {
            counts[value] = counts[value] ? counts[value] + 1 : 1;
          });
      
          const freqDist = [];
          for (const value in counts) {
            freqDist.push([counts[value], parseInt(value)]);
          }
      
          freqDist.sort((a, b) => b[0] - a[0]);
      
          return freqDist;
        }
      
        describe() {
          const result = [];
          result.push(`Count: ${this.count()}`);
          result.push(`Sum: ${this.sum()}`);
          result.push(`Min: ${this.min()}`);
          result.push(`Max: ${this.max()}`);
          result.push(`Range: ${this.range()}`);
          result.push(`Mean: ${this.mean()}`);
          result.push(`Median: ${this.median()}`);
          result.push(`Mode: ${JSON.stringify(this.mode())}`);
          result.push(`Variance: ${this.var()}`);
          result.push(`Standard Deviation: ${this.std()}`);
          result.push(`Frequency Distribution: ${JSON.stringify(this.freqDist())}`);
          return result.join("\n");
        }
      }
      
      const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
      const statistics = new Statistics(ages);
      

console.log("count :", statistics.count())
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist())

/* to be continued
*Create a class called PersonAccount. It has firstname, lastname, incomes
*expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome,
*addExpense and accountBalance methods. Incomes is a set of incomes
*and its description and expenses is also a set of expenses and its description.
*/

