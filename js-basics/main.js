// var marks = [99, 95, 97, 93, 89, 76];

// var total = 0;

// // Approach 01 - Declarative
// for (var i = 0; i < marks.length; i++) {
//   total += marks[i];
// }

// // Approach 02: Enhanced 'for' loop - Imperative
// for (var mark of marks) {
//   total += mark;
// }

// // Approach 03: Functional Programming approach
// marks.forEach((mark) => (total += mark));

// console.log("Total Marks : ", total);

// function add(a, b) {
//   return a + b;
// }

// // function supplied to a variable
// var addition = function () {};

// // function supplied to an object property
// var user = {
//   getDetails: function () {},
// };

// // function returning another function
// function outerFn() {
//   return function () {};
// }

// // function supplied as a callback
// function greet(callback) {}

// greet(function () {});

// // ARROW FUNCTIONS
// - Do not have 'this' keyword
// - Do not have 'arguments' keyword
// - Can not be called with 'new' operator

// var sum = (n1, n2) => n1 + n2;
// console.log("SUM : ", sum(4, 5));

// var square = (num) => {
//   console.log("Finding the square of ", num);
//   return num ** 2;
// };
// console.log("SQUARE : ", square(2));

// var user = {
//   firstName: "John",
//   lastName: "Doe",
//   getDetails: function () {
//     return () => this.firstName + " " + this.lastName;
//   },
// };

// var nestedFn = user.getDetails();

// console.log("Full Name : ", nestedFn());

// var demo = () => console.log(arguments);

// demo("john@test", 32, true);

// var Person = (name, age) => {
//   this.name = name;
//   this.age = age;
// };

// let userOne = new Person("John Doe", 23);
// let userTwo = new Person("Jenny Doe", 21);

// console.log("USER ONE : ", userOne);
