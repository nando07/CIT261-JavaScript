console.log("Snippet #1: " + '\n');

const athlete = new Object();
athlete.age = 30;
athlete.height = '5 feet 10 inches';
athlete.weight = '170 lbs';
athlete.sport = 'soccer';
athlete.getAge = function() {
    return this.age;
};
console.log(athlete.height);
console.log(athlete.getAge() + '\n' + '\n');

console.log("Snippet #2: " + '\n');

var student = {
    firstName: 'Fego',
    lastName: 'Gomez',
    major: 'Computer Science',
    isFullTime: true,
    birth: 1985,
    estimateGraduationDate: function(enrollmentYear) {
        return enrollmentYear + 4;
    }
};
console.log(student.estimateGraduationDate(2015) + '\n' + '\n');

console.log("Snippet #3: " + '\n');

var student = {
    firstName: 'Fego',
    lastName: 'Gomez',
    major: 'Computer Science',
    isFullTime: true,
    birth: 1985,
    enrollmentYear: 2015,
    estimateGraduationDate: function() {
        return this.enrollmentYear + 4;
    }
};
console.log(student.estimateGraduationDate() + '\n' + '\n');

console.log("Snippet #4: " + '\n');
var student2 = {
    firstName: 'Fego',
    lastName: 'Gomez',
    major: 'Computer Science',
    isFullTime: true,
    birth: 1985,
    enrollmentYear: 2015,
    estimateGraduationDate: function() {
        this.graduationYear = this.enrollmentYear + 4;
    }
};
console.log(student2.estimateGraduationDate());
console.log(student2.graduationYear + '\n' + '\n');

console.log("Snippet #5: " + '\n');

function learner(name, age) {
        this.name = name;
        this.age = age;
    };

var myStudent = new learner("Fego", 30);
console.log(myStudent.name + ' ' + myStudent.age + '\n' + '\n');


console.log("Snippet #6: INHERITANCE" + '\n');

var car = function(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  this.getCarInfo = function() {
    var info = "Your car is a " + this.color + " " + this.make + " " + this.model + ", year " + this.year;
    return info;
  };
};

var car1 = new car("Toyota", "Camry", 2014, "Barcelona Red");
var car2 = new car("Dodge", "Ram", 2006, "White");

console.log(car1.getCarInfo());
console.log(car2.getCarInfo() + '\n' + '\n');

console.log("Snippet #7: INHERITANCE" + '\n');

var car = function(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
};

car.prototype.getCarInfo = function() {
    var info = "Your car is a " + this.color + " " + this.make + " " + this.model + ", year " + this.year;
    return info;
  };

var car1 = new car("Toyota", "Camry", 2014, "Barcelona Red");
var car2 = new car("Dodge", "Ram", 2006, "White");

console.log(car1.getCarInfo());
console.log(car2.getCarInfo() + '\n' + '\n');


console.log("Snippet #8: INHERITANCE" + '\n');

// base class
var Hobby = function() {
  this.enjoyable = true;
};

// prototype method
Hobby.prototype.display = function() {
  console.log(this.enjoyable ? 'Keep doing it' : 'Try other things');
};

// Subclass

var Sport = function(name, enjoyable) {
  Hobby.call(this); // the call method refers to the Hobby function to make it its parent class.

  this.name = name;
  this.enjoyable = enjoyable;
};

Sport.prototype = Object.create(Hobby.prototype); // this line says that I want to inherit from the Hobby function
Sport.prototype.constructor = Sport; // This sets a constructor for Sport

var sport1 = new Sport('Soccer', true);
var sport2 = new Sport('Golf', false);

console.log(sport1.display());
console.log(sport2.display());
