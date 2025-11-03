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

// // BLOCK SCOPE: let and const
// // - restrict the scope of the variable to the nearest block

// function scopeDemo(arr) {
//   // Variable Hoisting
//   // LOAD = undefined
//   // FLASH = undefined

//   if (arr.length > 2) {
//     //   LOAD = undefined
//     let LOAD = "LOADING...";
//     console.log(FLASH);
//   } else {
//     // FLASH = undefined
//     let FLASH = "FLASHING...";
//   }
// }

// scopeDemo([2, 3, 4, 5]);

// const username = "JOHN DOE";

// username = "Jenny Doe";

// const user = {
//   // xixi0123
//   name: "John Doe",
// };

// user.name = "Jenny Doe"; // xixi0123

// console.log("Username : ", user.name);

// user = {
//   name: "Mary Public",
// };

// const frineds = ["Monica", "Joey", "Ross", "Rachel"];

// frineds.push("Chandler");

// console.log("Friends Length : ", frineds.length);

// // frineds = ["Monica", "Joey", "Ross", "Rachel", "Chandler"];

// frineds[0] = "Jack";
// console.log("New Friends : ", frineds);

// const userTwo = Object.freeze({
//   name: "Monica",
// });

// userTwo.name = "Jenny";

// console.log("User Two Name : ", userTwo.name);

// // REST (...) : creates the collection

// function demoRest(args1, args2, ...args) {
//   console.log("Arguments : ", args[0]);
// }

// // demoRest("test@test.com")
// // demoRest("test@test.com", 21)
// demoRest("test@test.com", 21, true);

// // SPREAD (...) : spreads the collection

// let numbers = [3, 4, 5];

// let moreNumbers = [1, 2, ...numbers];

// console.log("Numbers : ", moreNumbers[2]); // [3,4,5]

// let userOne = {
//   name: "John",
//   company: "XYZ Inc",
// };

// let userTwo = {
//   ...userOne,
//   name: "Jenny",
// };

// console.log("User Two : ", userTwo);

// // DESTRUCTURING

// let userOne = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 21,
// };

// let userTwo = {
//   firstName: "Jenny",
//   lastName: "Doe",
//   age: 22,
// };

// let { lastName: userOneLastName, firstName: userOneFirstName } = userOne;
// let { firstName: userTwoFirstname, lastName: userTwoLastNAme } = userTwo;

// console.log("Full Name : ", userOneFirstName + " " + userOneLastName);

// let friends = ["Monica", "Ross", "Rachel", "Joey"];
// let [, , f3, f4] = friends;
// console.log(f3); // ?

// let userThree = {
//   name: "Monica Geller",
//   age: 21,
//   address: {
//     street: "201, Main Road",
//     city: "Bengaluru",
//   },
//   friends: [
//     { name: "Ross", age: 24 },
//     { name: "Rachel", age: 22 },
//   ],
// };

// let {
//   name,
//   age,
//   address: { street, city },
//   friends: [friendOne, friendTwo],
// } = userThree;

// // Reference Type: will change userThree Object
// friendOne.name = "Chandler Bing";

// // Primitive Type: No change in userThree Object
// name = "Mary Public";

// console.log("Username : ", userThree.name); //

// console.log("User Three Friends : ", userThree.friends);

// // console.log(name, age, street, city);

// const { name: friendOneName, age: friendOneAge } = friendOne;
// const { name: friendTwoName, age: friendTwoAge } = friendTwo;

// // console.log(friendOneName, friendOneAge);

// // Shallow Copy
// let a = { name: "A" }; // xixi0123

// let b = a; // xixi0123

// b.name = "B";

// console.log("After B Object change", a.name); // B

// // Deep Copy
// let c = JSON.parse(JSON.stringify(a));

// c.name = "C";

// console.log("After C Object change", a.name);
// console.log("After C Object change", c.name);

// let a = 10,
//   b = 20;

// [b, a] = [a, b];

// console.log("A : ", a); // ?
// console.log("B : ", b); // ?

// // TEMPLATE LITERALS
// // - Embed variable into string without (+)
// // - Multiline string without (\n)

let userName = "Monica Geller";
let userAge = 22;

let greetings = `Hello, This is ${userName}!
I'm ${userAge} years old!`;

console.log(greetings);

// // DEFAULT PARAMETER

function demoDefaultParameter(arr = []) {
  //   arr = arr || [];

  if (arr.length > 2) {
    console.log("Do some stuff");
  } else {
    console.log("Do something else");
  }
}

demoDefaultParameter([2, 3, 4, 5]);
