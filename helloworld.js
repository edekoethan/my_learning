//lesson 2 

let space = ' '
let lastName = 'edeko'

let countryName = 'nigeria'
let city = 'benin'
let language = 'edo'
let age = '25'
let firstName = 'ethan'
let fullName = firstName + space + lastName
let personInfo = `I am ${fullName}. I am  ${age}. I live in ${countryName}. `
console.log (personInfo)

let a = 2
let b = 3

console.log(`${a} is greater than ${b} : ${a > b}`)                                   

let string = '   30 Days Of JavaScript   '
// trim removes the space at the begining and ending
console.log(string)
console.log(string.trim(' '))

let first_Name = ' Asabeneh '
console.log (first_Name)

/* It takes a substring argument and it checks if substring 
argument exists in the string. 
includes() returns a boolean. If a substring exist in a string, 
it returns true, otherwise it returns false. 
*/
let fact = 'the first city to own a big statue is Rome'
console.log (fact.includes('city'))

/* replace(): takes as a parameter the old 
substring and a new substring. */
let replaceable = 'a word in this sentence would be replaced'
console.log(replaceable.replace('word', 'class'))

/* charAt(): Takes index and it returns the value at 
that index */

let newString = 'the taking of pelham 123'
console.log(newString.charAt(5))

/*IndexOf(): Takes a substring and if the 
substring exists in a string it returns the first position of the substring if 
does not exist it returns -1 */

let newStringB = 'the good the bad and the ugly'
console.log(newStringB.indexOf('good'))

/*lastIndexOf(): Takes a substring and if the 
substring exists in a string it returns 
the last position of the substring if it does 
not exist it returns -1
*/

//concat(): it takes many substrings and joins them.

let string1 = '30'

console.log(string1.concat('  days of smoking weed'))

/*startsWith: it takes a substring 
as an argument and it checks if the 
string starts with that specified substring. 
It returns a boolean(true or false). */

let string2 = 'the face of danger is red'
console.log(string2.endsWith('red'))


/*search: it takes a substring as an 
argument and it returns the index of the first match. The search value can be a 
string or a regular expression pattern */

let string3 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string3.search("sex"))

/* match: it takes a substring or 
regular expression pattern as an 
argument and it returns an array if 
there is match if not it returns null.
 Let us see how a regular expression 
 pattern looks like. It
 starts with / sign and ends with / sign.*/

 let string5 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string5.match('you'))

let pattern = /love/gi
console.log(string5.match(pattern)) 

let string7 = 'love'
console.log(string7.repeat(10))

let facts = 'champions league is bae'
console.log(typeof 'chmpions league is bae')

let num = '19.81'




let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length)

console.log(challenge.toUpperCase())
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(19))

console.log(challenge.lastIndexOf("t"))
let challenge2 = '30 days of JavaScript'

let pattern2 = /days/
console.log(challenge2.match(pattern))

let quote = "\"There is no exercise better for the heart than reaching down and lifting people up.\" by John Holmes teaches us to help one another."
console.log(quote)

let number = 'food'

/*Calculate the total annual income of the person by extracting the numbers
 from the following text. 'He earns 5000 euro from salary per month, 10000 
 euro annual bonus, 15000 euro online courses per month.*/

 // decleare a variable for the string needed to be assesed
let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' 

// make the integers precipitate or in simple terms bring out the integers
console.log(income.match(/\d+/g))

// decleare a new variable known as incomeTotal, use a map  function to parse the list as an integer
let incomeTotal = income.match(/\d+/g).map(function(item) {
    return parseInt(item, 10); // note the 10 here is showing our int should be parsed as multiples of 10
})
console.log(incomeTotal)



var res = 0; //res var shows we want to begin our count from 0;
for (i = 0; i < incomeTotal.length; i++){
    res += incomeTotal[i] //loop function more on this later
}
console.log(res)


/* Clean the following text and find the most frequent word 
(hint, use replace and regular expressions).
*/

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[@%#$&]/g, ''));

let phrase = 'You cannot end a sentence with because because because is a conjunction'
let pattern4 = /because/gi
console.log(phrase.match(pattern4))

let myNum = Math.round(Math.random()* 1000) + 6
console.log(myNum)

//lesson 2 was fun