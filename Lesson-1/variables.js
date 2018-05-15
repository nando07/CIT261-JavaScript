/*******************************************************************
* VARIABLES
*******************************************************************/

// variables are declared with the var keyword

var x; // if a variable does not have an assigned value, the contents are 'undefined'
x = 2;
console.log(x);

// you can do a complete declaration

var y = 5;
console.log(y);

// if a variable does not have an assigned value, the contents are 'undefined'
// so you can use conditionals like this:

var z;
if (z === undefined) {
    z = 'defined';
    console.log(z);
}

// Constants are created with the const keyword, they are unmodifiable

const color = 'red';
 console.log(color);

// variables can be strings, numbers, and booleans - The Primitives

var likesSoccer = true;
var ball = "Nike";
var goals = 10;
