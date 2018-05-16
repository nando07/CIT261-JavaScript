// Functions

function calculateNumberOfMonths(fromYear, toYear) {

    var result;
    result = ((toYear - fromYear) * 12);
    return result;
}

var numberOfMonths = calculateNumberOfMonths(1990, 2018);

console.log(numberOfMonths);

// or use function directly like so:

console.log('This is the number of months from 1970: ' + calculateNumberOfMonths(1970, 2018) + ' months.');

// Function expressions are meant to produce a value, whereas function statements perform an action

var numberOfYears = function(fromYear, toYear) { // this is a function expression
    return toYear - fromYear;
}

console.log('Using a function expression: ' + numberOfYears(1980, 2020));

// if a variable is declared outside of the function it is considered global

var x = 10;
function y(){
    console.log(x);
}

console.log(y());
// if a variable is declared without the var keyword inside the function, it is considered global too.

function myName() {
    var firstname = "Fernando";
    secondName = "Gomez";
    console.log(firstname + ' ' + secondName);
}
console.log(myName() + secondName);
//console.log(secondName);
