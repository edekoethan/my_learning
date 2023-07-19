//dom manipulation 1
//HTML document is structured as a JavaScript Object
//Every HTML element has a different properties which can help to manipulate it
//It is possible to get, create, append or remove HTML elements using JavaScript.


//To select an HTML element, we use tag name, id, class name or other attributes.

//Getting Element

//getting elements by tag name
/*
*getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object. 
*An HTMLCollection is an array like object of HTML elements.
*The length property provides the size of the collection. 
*Whenever we use this method we access the individual elements using index or after loop through each individual items
*An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.
*/

//document.getElementByTagName('tagname')

/*
const allTitles = document.getElementsByTagName('h1')
console.log(allTitles)
console.log(allTitles.length) //4

for (let i = 0; i < allTitles.length; i++){
    console.log(allTitles[i])
}
*/

//Getting elements by class name

//document.getElementsByClassName('classname')

/*
const allTitlesClass = document.getElementsByClassName("title")
console.log(allTitlesClass)
console.log(allTitlesClass.length) //4

for (let i = 0; i < allTitlesClass.length; i++){
    console.log(allTitlesClass[i])
}
*/

//Getting element by Id
//document.getElementById('id')

/*
let firstTitle = document.getElementById('first-title')
console.log(firstTitle)
*/

/*
for (let i = 0; i < firstTitle.length; i++){
console.log(firstTitle)
}
*/

//Getting elements by using querySelector methods
/*
*The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.
*querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.
*
*/

/*
let firstTitle = document.querySelector('h1') // select the first available h1 element
let firstTitle2 = document.querySelector('#first-title')  // select id with first-title
let firstTitle3 = document.querySelector('.title') //// select the first available element with class title


console.log(firstTitle)
console.log(firstTitle2)
console.log(firstTitle3)
*/

//querySelectorAll: can be used to select html elements by its tag name or class.
//It returns a nodeList which is an array like object which supports array methods.
//We can use for loop or forEach to loop through each nodeList elements.

/*
const allTitles = document.querySelectorAll('h1') // selects all the available h1 elements in the page
console.log(allTitles.length)


for (let i = 0; i < allTitles.length; i++){
    console.log(allTitles[i])
}


allTitles.forEach(title => console.log(title))
*/

/*
const allTitles = document.querySelectorAll('.title')
console.log(allTitles)
*/

//Adding attribute
/*
*An attribute is added in the opening tag of HTML which gives additional information about the element.
*Common HTML attributes
*id, class
*src, style
*href,disabled
*title, alt.
*/

//Lets add id and class for the fourth title.

/*
const titles = document.querySelectorAll('h1')

titles[3].className = 'title'
titles[3].id = 'fourth-title'
*/

//console.log(titles.length)

//Adding attribute using setAttribute
/*
const titles = document.querySelectorAll('h1')

titles[3].setAttribute('class', 'title')
title[3].setAttribute('id', 'fourth-title')
*/

//adding attribut without setAttribute
/*
titles[3].className = 'title'
titles[3].id = 'fourth-title'
*/

//adding class using classList
//The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.

//titles[3].classList.add('title', 'header-title')

//Removing class using remove
//Similar to adding we can also remove class from an element. We can remove a specific class from an element

//titles[3].classList.remove('title', 'header-title')

//Adding Text to HTML element

/**
 * An HTML is a build block of an opening tag, 
 * a closing tag and a text content.
 * We can add a text content using the property 
 * textContent or *innerHTML.
 */

//Text Content
//We assign textContent HTML object property to a text

//const titles = document.querySelectorAll('h1')
//titles[3].textContent = 'Fourth Title'

//innerHTML
/**
 * We use innerHTML property when we like to replace 
 * or a completely new children content to a parent element
 *  It value we assign is going to be a string of HTML elements.
 */

//Adding style
//color

/*
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})
*/


/***
 * The code iterates over the titles NodeList using forEach and 
 * sets the font size to 24px for all titles
 * Additionally, it sets the color to green for even-indexed titles and red for odd-indexed titles.
 * 
 */
//adding background color

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.backgroundColor = 'red'
  }
})
