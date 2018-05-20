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
console.log(athlete.getAge() + '\n');

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
console.log(student.estimateGraduationDate(2015) + '\n');

console.log("Snippet #3: " + '\n');
var student = {
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
console.log(student.estimateGraduationDate());
console.log(student.graduationYear + '\n');

console.log("Snippet #4: " + '\n');

function student(name, age) {
        this.name = name;
        this.age = age;
    };

var myStudent = new student("Fego", 30);
console.log(myStudent.name + ' ' + myStudent.age + '\n');


console.log("Snippet #5: INHERITANCE" + '\n');

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
console.log(car2.getCarInfo() + '\n');

console.log("Snippet #6: INHERITANCE" + '\n');

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
console.log(car2.getCarInfo() + '\n');


console.log("Snippet #7: INHERITANCE" + '\n');


