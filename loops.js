/* Loops

   For Loop Syntax

   for (statement 1; statement 2; statement 3) {
      code block to be executed
   }

   Statement 1 = (var i = 0;) This is executed before the code block starts
   Statement 2 = (i < 25;) This defines the condition for running the loop (code block)
   Statement 3 = (i++) This statement increments the value contained in i by one using the increment operator (++) */

console.log('First Loop');
for (var i = 0; i < 5; i++) {
    console.log(i); // prints all values from 0 to 24
}

// Statement 1 can be omitted. Just make sure that values are initialized before the loop
console.log('Second Loop - Statement 1 omitted');
var g = 0;
for (; g < 10; g++) {
    console.log(g);
}

// Statement 2 can be omitted too, but a "break" must be inside the loop to end the loop.
console.log('Third Loop - Statement 2 omitted');
for (var h = 5;;h--) {
    if(h === 0) {
        break;
    }
    console.log(h);
}

console.log('Fourth Loop - Statement 3 omitted');
for (var k = 7; k > 0;) {
    console.log(k);
    k--;
}

// For/In Loop
// Loops through properties of an object.

var person = {firstName:"Steve", lastName:"Jobs", age:55}; //Dictionary Object (key:value)

var text = "";
var x;
for (x in person) { // x represents the key i.e firstName, lastName, and age
    text += person[x] + " ";
    console.log(x); // prints the keys
    console.log(person[x]) // prints the values
    console.log(text); // prints the text
}

/* While Loop

 Syntax
 while (condition) {
     code block to be executed
 } */

// As long as the condition inside () is true, then code block will keep looping.
console.log('While Loop');
var j = 0; // initialize variable.
while(j < 10) {
    console.log(j);
    j++; // incrementor. This is necessary otherwise loop will never end.
}

/* The Do/While Loop

Executes code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax

do {
    code block to be executed
}
while (condition); */

var result = ""
var b = 0;
do {
    console.log('do-while-loop!')
    b++;
}
while (b < 5);
