//REGEX
 //without flag
 let pattern0 = 'love'
 let regEx0 = new RegExp(pattern)

 //Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor

 let regEx1 = new RegExp('love', 'gi') //uses regEx constructor


 //Creating a pattern without RegExp Constructor

 //Declaring regular expression with global flag and case insensitive flag.

let regEx2 = /love/gi // doesnt use the regEx constructor

//regEx1 is the same as regEx2

//RegExpp Object Methods

//1 test for match
//test():Tests for a match in a string. It returns true or false.
/*
const str = 'I love JavaScript'
const pattern1 = /love/
const result = pattern1.test(str) //does pattern exist in the string
console.log(result) 
*/
//Array containing all of the match
//match() Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.

/*
const str = 'I love JavaScript'
const pattern1 = /love/
const result = str.match(pattern1) //in the string can we find an array of the pattern, along with its position, recall that a string is also an array ?
console.log(result) 
*/

//match() with global
/*
const str = 'I love JavaScript'
const pattern1 = /love/g //flag has been added successfully
const result = str.match(pattern1) // using a flag in the string can we find an array of the pattern, along with its position, recall that a string is also an array ?
console.log(result)
*/

//search() : Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

/*
const str = 'I love JavaScript'
const pattern1 = /love/g 
const result = str.search(pattern1) //returns the index of the string
console.log(result)
*/

// Replacing a substring
//replace() :  Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

/*
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python | python/, "JavaScript ")
console.log(matchReplaced)
//without the g only the first search is replaced


const txt1 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced1 = txt1.replace(/Python | python/g, " JavaScript ")
console.log(matchReplaced1)

//lets do away with the or '|' by using gi


const txt2 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced2 = txt2.replace(/Python/gi, " JavaScript ")
console.log(matchReplaced2)
*/

/*
const clogged_txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

const cleared_text = clogged_txt.replace(/%/g, '')
console.log(cleared_text)
*/

//square brackets
//Let's use square bracket to include lower and upper case

/*
const pattern3 = /[Aa]pple/g // this square bracket means either A or a
const txt3 =  'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt3.match(pattern3)

console.log(matches)

const pattern5 = /[AaBb](pple|anana)/g; // this square bracket means either A or a
const txt5 =  'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches5 = txt5.match(pattern5)

console.log(matches5)
*/

//Escape character(\) in RegExp

/*
const pattern6 = /\d/g // d is a special character which means digits
const txt6 = 'This regular expression example was made in January 12th, 2020'
const matches6 = txt6.match(pattern6)

console.log(matches6) //not what we want '1', '2', '2', '0', '2', '0']

const pattern7 = /\d+/g // d is a special character which means digits
const txt7 = 'This regular expression example was made in January 12th, 2020'
const matches7 = txt7.match(pattern7)

console.log(matches7) //this is what we want

*/

//One or more times(+)

/*
const pattern8 = /\d+/g //d is a special character whoch means digit
const txt8 = 'This regular expression example was made in January 12,  2020.'
const matches8 = txt8.match(pattern8)
console.log(matches8)



//period(.)
const pattern9 = /[a]./g //the square bracket means a and . 
const txt9 = 'Apple and banana are fruits'
const matches9 = txt9.match(pattern9)
console.log(matches9) //this is not what we want
*/

/*
const pattern10 = /[a].+/g // any character, + any character one or more times . 
const txt10 = 'Apple and banana are fruits'
const matches10 = txt10.match(pattern10)
console.log(matches10) 

//Zero or one times(?)

const txt11 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'

const pattern11 = /[Ee]-?mail/g //? means optional
matches11 = txt11.match(pattern11)

console.log(matches11)
*/
/*
Yes, there are several other metacharacters commonly used in regular expressions. Here are some important ones:

. (dot): Matches any single character except a newline character.
*: Matches the preceding element zero or more times.
+: Matches the preceding element one or more times.
^: Matches the start of a line or string.
$: Matches the end of a line or string.
[]: Defines a character class, matches any single character within the brackets.
|: Acts as a logical OR, matches either the pattern before or after the pipe symbol.
(): Creates a capturing group, captures the matched substring for later use or back-references.
?: Matches the preceding element zero or one time (optional).


//Quantifier in RegExp
const txt12 = 'This regular expression example was made in December 6,  2019.'
const pattern12 = /\b\w{4}\b/g //looking for substring with length of exactly four characters
const matches12 = txt12.match(pattern12)
console.log(matches12)


// exactly four character  words without numbers
const txt13 = 'This regular expression example was made in December 6,  2019.'
const pattern13 = /\b[a-zA-Z]{4}\b/g //looking for substring with length of exactly four characters without the numbers
const matches13 = txt13.match(pattern13)
console.log(matches13)


const txt14 = 'This regular expression example was made in December 6,  2019.'
const pattern14 = /\d{4}/g //looking for exact 4 digits
const matches14 = txt14.match(pattern14)
console.log(matches14)
*/

/*
const txt15 = 'This regular expression example was made in December 16,  2019.'
const pattern15 = /\d{1,4}/g //looking for exact 2 or 4 digits
const matches15 = txt15.match(pattern15)
console.log(matches15)
*/

//Cart ^
/*
const txt16 = 'This regular expression example was made in December 6,  2019.'
const pattern16 = /^This/ //^means starts with
const matches16 = txt16.match(pattern16)
console.log(matches16)
*/

//Negation
/*
const txt17 = 'This regular expression example was made in December 6,  2019.'
const pattern17 = /[^A-Za-z,. ]+/g
const matches17 = txt17.match(pattern17)
console.log(matches17)
*/

//Exact match
//It should have ^ starting and $ which is an end.

/*
let pattern18 = /^[A-Z][a-z]{3,12}$/;
let name18 = 'Asabaneh';
let result18 = pattern18.test(name18);

console.log(result18);
*/


//excercises
//1
/*
let incomeStatement = 'He earns 4000 euro from salary per month,10000 euro annualbonus, 5500 euro online courses per month.'
let pattern_ex1 = /\d+/g
let match_ex1 = incomeStatement.match(pattern_ex1)
let income_array = match_ex1.map(Number); // Convert array of strings to array of numbers
*/
//console.log(income_array)
/*
function sumExpenses(array){
    let sum = 0;
    income_array.forEach(item => {
        sum += item
    })

    console.log(sum)
    return sum
}
sumExpenses(income_array) */

/*
function sumExpenses(array){
    let sum = 0;
    for ( let i = 0; i < income_array.length; i++){
        sum += array[i]
    }
    console.log(sum)
    return sum
}
sumExpenses(income_array)
*/

//excercise 2
/*
positionStatement = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'
pattern_ex2 = /-?\d+/g
matches_ex2 = positionStatement.match(pattern_ex2)
console.log(matches_ex2)
const positionNumbers = matches_ex2.map(Number)
const furthestDistance = Math.max(...positionNumbers) - Math.min(...positionNumbers)

console.log(furthestDistance)
*/

/*
function is_valid_variable(string){
    let pattern = /^\d|-/g 
    let result = pattern.test(string)
    return !result
}

console.log(is_valid_variable('first_name'))

console.log(is_valid_variable('first-name'))

console.log(is_valid_variable('1first_name'))

console.log(is_valid_variable('firstname'))

// updated AI solution
function is_valid_variable(string) {
    let pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return pattern.test(string);
  }
  
  console.log(is_valid_variable('first_name'));    // true
  console.log(is_valid_variable('first-name'));    // false
  console.log(is_valid_variable('1first_name'));   // false
  console.log(is_valid_variable('firstname'));     // true
  */

  //Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
/*
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(string){

const words = string.toLowerCase().match(/\b\w+\b/g)
wordFrequency = {}
for (let i = 0; i < words.length; i++){
const word = words[i]
if (word in wordFrequency){
    wordFrequency[word]++
}
else {
    wordFrequency[word] = 1
}

}
const sortedWords = Object.keys(wordFrequency).sort(
    (a, b) => wordFrequency[b] - wordFrequency[a]
)

const topTenWords = sortedWords.slice(0, 10)

const result = topTenWords.map(word => ({ word, count: wordFrequency[word] }));

return result;
}

console.log(tenMostFrequentWords(paragraph, 10))
*/

//level 3
// correct but to be revisited
/*
sentence_clogged = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function mostFrequentWords(string) {
    const cleaned_text = string.toLowerCase().replace(/[^a-zA-Z ]/g, '');
    const words = cleaned_text.split(' ');
  
    const wordFrequency = {};
    for (let i = 0; i < words.length; i++) {
      const cleared_text = words[i];
      wordFrequency[cleared_text] = (wordFrequency[cleared_text] || 0) + 1;
    }
  
    const sortedWords = Object.keys(wordFrequency).sort(
      (a, b) => wordFrequency[b] - wordFrequency[a]
    );
  
    const topThreeWords = sortedWords.slice(0, 3);
  
    const result = topThreeWords.map(word => ({ word, count: wordFrequency[word] }));
  
    return result;
  }
 
  console.log(mostFrequentWords(sentence_clogged));
  */

  