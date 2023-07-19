//DOM(Document Object Model)-Day 3

//common HTML  events are:
/**
 * on click
 * onchange
 * on mouseover
 * onmouseout
 * onkeydown
 * onkeyup
 * onload
 */

//We use addEventListener() method to listen different event types on HTML elements.
//the addEventListener() method taakes two arguments, an event and acall back function


selectedElement.addEventListener('eventlistiner', function(e){
 //the activity you want to occur after the event will be in here
})

//or 

selectedElement.addEventListener('eventlistiner', e => {
    // the activity you want to occur after the event will be in here
})

//click

//see example html sheet

//double click
/**
 * To attach an event listener to an element, first we select the element
 * then we attach the addEventListener method
 *  The event listener takes event type and callback functions as argument.
 */


//see example html sheet

//mouse enter
/**
 * To attach an event listener to an element, 
 * first we select the element then we attach the addEventListener method
 * The event listener takes event type and callback functions as argument.
 */


//see example html sheet

/*
click - when the element clicked
dblclick - when the element double clicked
mouseenter - when the mouse point enter to the element
mouseleave - when the mouse pointer leave the element
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout -when the mouse pointer out from the element
input -when value enter to input field
change -when value change on input field
blur -when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading a page
*/

//input value
/*
We usually fill forms and forms accept data
Form fields are created using input HTML element. 
Let us build a small application which allow us 
to calculate body mass index 
of a person using two input fields, one button and one p tag.
*/

//see 23b

//see 23c also for change

//blur event
//In contrast to input or change, the blur event occur when the input field is not on focus.

// see 23e
//We can access all the key numbers of the keyboard using different event listener types.


