/*******************************************************************
*
* ARRAYS
*
*******************************************************************/

// Arrays are collecitons of elements
var groupMembers = ['Fernando', 'Kent', 'Mike']; // this is an array of 3 strings

// Another way
var cars = new Array('Lambo', 'Mercedez', 'BMW');

// Access elements of Array
console.log(groupMembers[2]); // will print Mike


// you can also overwrite elements
groupMembers[2] = 'Ricky';
console.log(groupMembers); // will print = (3) ["Fernando", "Kent", "Ricky"]

/*******************************************************************
* ARRAYS COME WITH SEVERAL METHODS
*******************************************************************/
// you can have different data types in an array
var student = ['Fernando', 'Gomez', 1988, 'red', false];

student.push('lambo'); // Will add lambo to the end of the array & returns the size of the array
console.log(student);

student.unshift('Sr.'); // adds an elment to the beginning of the array. and returns the size of the array
console.log(student);

var elementRemoved;
elementRemoved = student.shift(); // removes first element and returns that element
console.log(elementRemoved);
console.log(student);

var lastElementRemoved = student.pop(); // removes the last element of array and returns that element
console.log(lastElementRemoved);

if (student.lastIndexOf('blue') === -1) {    // finds if the array has the element 'blue' otherwise it returns -1 This would also be the last ocurrence
    console.log('This guy does not like blue');
}

if (student.indexOf('red') === -1) {    // finds if the array has the element 'blue' otherwise it returns -1 This would also be the first ocurrence
    console.log('This guy does not like blue');
} else {
    console.log(student.indexOf('red')); // prints 3
}

var allElements = student.join(); // adds all elements of array into a string
console.log(allElements);

student.reverse(); // Reverses the array, first is last, last is first
console.log(student);

student.splice(3, 1, "blue", "yellow"); // at index 3 remove it, then add blue and yellow.
console.log(student);

/*******************************************************************
*
* ASSOCIATIVE ARRAYS
*
*******************************************************************/

// An associative array is simply a set of key value pairs.

var food = {"fruit": 'grape',"meat":'turkey',"vegetable": 'broccoli'};
console.log(food['fruit']); // prints grape

// Associative arrays are also objects

var obj = new Object(); // create an object and assign values
obj["insect"] = "lady bug";
obj["reptile"] = "chameleon";
obj["bird"] = "Eagle";

for(var i in obj) {
    console.log(i + "=" + obj[i] + '\n'); // i is the key
}

// Attributes of the object are also keys

var obj2 = new Object();
obj2.insect = "firefly";
obj2.reptile = "snake";
obj2.fish = "salmon";

for(var i in obj2) {
    console.log('\n' + i + " = " + obj2[i] + '\n');
}

