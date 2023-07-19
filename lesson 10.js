//set
//Set is a collection of elements. 
//Set can only contains unique elements. Let us see how to create a set in the section below.
/*
const companies = new Set()  // set is a built in function like dateTime function
console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
*/
/*
// iterate a set
for (const language of languages){
    console.log(language)
}
*/
// adding an element to a set
const companies_new = new Set()
console.log(companies_new.size) // set size = 0

companies_new.add('Google')
companies_new.add('Facebook')
companies_new.add('Amazon')
companies_new.add('Extemp')



//Deleting an element from a set
console.log(companies_new.delete('Extemp'))
console.log(companies_new)

// checking an element in the set
console.log(companies_new.has('Apple'))

//Clearing the set
companies_new.clear()
console.log(companies_new)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]

const langSet = new Set(languages)
//console.log(langSet)
//console.log(langSet.size)

const counts = []
const count = {}

for (const I of langSet){
    const filteredLang = languages.filter((lng) => lng === I)
    console.log(filteredLang)
    counts.push({ lang : I, counts: filteredLang.length})

}
console.log(counts)

/*[
  { lang: 'English', count: 3 },
  { lang: 'Finnish', count: 1 },
  { lang: 'French', count: 2 },
  { lang: 'Spanish', count: 1 },
] */

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)

//Union of sets
/*
let a_array = [1, 2, 3, 4, 5]
let b_array = [3, 4, 5, 6]
let c_array = [...a_array, ...b_array]

let A = new Set(a_array)
let B = new Set (b_array)
let C = new Set(c_array)

console.log(C) */

//intersection of sets
/*
let a_array = [1, 2, 3, 4, 5]
let b_array = [3, 4, 5, 6]

let A = new Set(a_array)
let B = new Set (b_array)

let c_array = a_array.filter((num) => B.has(num))
let C = new Set(c_array)

console.log(C) */
/*
let a_array = [1, 2, 3, 4, 5]
let b_array = [3, 4, 5, 6]

let A = new Set(a_array)
let B = new Set (b_array)

let C = new Set(a_array.filter((num) => !B.has(num))) //optimised

console.log(C)

*/


//map

//creating an empty map
//const emptyMap = new Map()
//console.log(emptyMap)

//creating a map from an array
countriesWithMapArr = [
  ['Finland', 'Helsinki'], ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

const countriesMap = new Map(countriesWithMapArr)
console.log(countriesMap)
console.log(countriesMap.size)

//Adding values to the Map
/*const   newCountriesMap = new Map()
console.log(newCountriesMap.size)
newCountriesMap.set("finland", "Helsinki")
newCountriesMap.set("Sweeden", "Stockholm")
newCountriesMap.set("Norway", "Oslo")
console.log(newCountriesMap)

console.log(newCountriesMap.get("finland")) */

//cHECKING KEY IN mAP
//Check if a key exits in a map using _has_ method. it returns true/false
/*const newCountriesMap = new Map()
console.log(newCountriesMap.size)
newCountriesMap.set("finland", "Helsinki")
newCountriesMap.set("Sweeden", "Stockholm")
newCountriesMap.set("Norway", "Oslo")

console.log(newCountriesMap.has("Helsinki")) //false cos helsinki is not a key but a value

//to check fr values use

const values = Array.from(newCountriesMap.values());
console.log(values.includes("Helsinki")); */


//getting all values from map using loop
/*const newCountriesMap = new Map()
console.log(newCountriesMap.size)
newCountriesMap.set("finland", "Helsinki")
newCountriesMap.set("Sweeden", "Stockholm")
newCountriesMap.set("Norway", "Oslo")


for (const [key, value] of newCountriesMap){
  console.log(key + " ->" + value)
} 
*/

/*
for (i = 0; i < newCountriesMap.length; i++){
  console.log(newCountriesMap[i])
}
*/

//excercises
//level1
//1 create an empty set

/*const myEmptySet = new Set()
console.log(myEmptySet)


const newNumbers = []
function arrZeroToTen(){
  for (let i = 0; i <= 10; i++){
   newNumbers.push(i)
  }
  return newNumbers
}
console.log(arrZeroToTen())

setfromarr = new Set(newNumbers)
console.log(setfromarr)
*/

//or 
/*function generateSet() {
  const numberSet = new Set();
  for (let i = 0; i <= 10; i++) {
    numberSet.add(i);
  }
  return numberSet;
}

console.log(generateSet()); // Output: Set(11) {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
*/
//add an element to a set

/*
const appleSize = [4, 5, 8, 9]

const A = new Set(appleSize)
*/

/*
A.add("5")
console.log(A)
*/

/*
console.log(A.delete("4"))
console.log(A.size)
*/

// excercises an empty set 



 // create an empty set
 const empty_set = new Set()
 console.log(empty_set)

// Create a set containing 0 to 10 using loop

/*
function createSet(){
let my_set = new Set();
for (let i = 0; i < 10; i++){

  my_set.add(i)
}
return my_set
}

console.log(createSet()); */
/*
const az_set = new Set([4,5,6,7,8])
console.log(az_set.delete("6")) // this returns false because 6 here is a string not an int


az_set.clear()
console.log(az_set)
*/

/*
const az = [4, 5, 8, 9, 10];
const a_set = new Set(az.slice(0,5).map((element) => element.toString()));

console.log(a_set)
*/


/*
const excercise_countries = ['Finland', 'Sweeden', 'Norway']

const countries_map = new Map(excercise_countries.map((country, index) => [country, index]));
console.log(countries_map)
console.log(countries_map.size)

const countries_map_two = new Map(excercise_countries.map((country) => [country, country.length]))

console.log(countries_map_two)
*/

/*
const a_set = [1, 2, 3, 4, 5]
const b_set = [5, 7, 8, 9]


 // union

 let set_A = new Set(a_set);
 let set_B = new Set(b_set);

 let unionSet = new Set([...set_A, ...set_B])

 console.log(unionSet);
 */


 //intersection

 /*
 const a_set = [1, 2, 3, 4, 5]
 const b_set = [5, 7, 8, 9]
 
 let set_A = new Set(a_set);
 let set_B = new Set(b_set);
 
 let set_C = new Set(a_set.filter(num => set_B.has(num)));
 
 console.log(set_C)

*/
















