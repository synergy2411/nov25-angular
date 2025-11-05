// Implicit Types
// let x = "Hello World";

// Explicit Types
// let y: number;
// y = 101;

// Structural Types
// Custom Type using 'type' keyword
// type MyCustomType = {
//   name: string;
//   age: number;
// };

// let userOne: MyCustomType;

// userOne = {
//   name: "John Doe",
//   age: 21,
// };

// // Custom Type using interface
// interface ITodo {
//   label: string;
//   status: boolean;
// }

// let todo: ITodo;
// todo = {
//   label: "Shopping",
//   status: true,
// };

// // Custom Type using class
// class Foo {}

// let foo: Foo;
// foo = new Foo();

// // Type Errors do not prevent JavaScript code emission
// let x: string = 200;

// console.log("Length : ", x.length);
// console.log("Value of X : ", x);

// // VARIOUS TYPES IN TYPESCRIPT

// let strVar: string;
// strVar = "Hola";

// let numVar: number;
// numVar = 199;

// let boolVar: boolean;
// boolVar = true;

// let dateVar: Date;
// dateVar = new Date("November 04, 2025");
// console.log("Date : ", dateVar);

// let strArrayVar: Array<string>;
// strArrayVar = ["Monica", "Joey", "Ross"];

// let numArrayVar: number[];
// numArrayVar = [98, 97, 92, 89];

// let anyVar: any;
// anyVar = "The String";
// anyVar = 100;
// anyVar = true;

// let unknownVar: unknown;
// unknownVar = "The String";
// if (typeof unknownVar == "string") {
//   console.log("Index of 'S': ", unknownVar.indexOf("S"));
// }

// unknownVar = 199;
// unknownVar = true;

// // Fixed length and varying types array sub-set
// let tupleVar: [string, number];
// tupleVar = ["John Doe", 21];

// let unionVar: string | number;
// unionVar = "Twenty-One";
// unionVar = 21;

// let functioVar: Function;
// functioVar = () => {};

// let functionVar2: () => string;
// functionVar2 = () => "Hello World";

// let nullOrStringVar: null | string;
// nullOrStringVar = null;
// nullOrStringVar = "The String";

// function demoVoid(): void {
//   console.log("Void Function");
// }

// function throwError(): never {
//   throw new Error("Something went wrong");
// }

// // CLASESS

// class Person {
//   // private name: string;
//   // private age: number;

//   constructor(private name: string, private age: number) {
//     // this.name = name;
//     // this.age = age;
//   }

//   getDetails(): string {
//     return `${this.name} - ${this.age}`;
//   }
// }

// let personOne = new Person("Monica Geller", 21);
// console.log(personOne.getDetails());

// class Student extends Person {
//   static numOfStudentsEnrolled: number = 0;

//   constructor(
//     private studId: string,
//     private course: string,
//     name: string,
//     age: number
//   ) {
//     super(name, age);
//     Student.numOfStudentsEnrolled += 1;
//   }

//   getDetails(): string {
//     return `Student Details - ${this.studId} - ${
//       this.course
//     } | ${super.getDetails()} `;
//   }
// }

// let studentOne = new Student(
//   "S001",
//   "Angular Intermediate",
//   "Rachel Green",
//   22
// );

// console.log(studentOne.getDetails());
// let studentTwo = new Student(
//   "S002",
//   "Angular Intermediate",
//   "Chandler Bing",
//   24
// );

// console.log(studentTwo.getDetails());

// console.log("Total Enrollments : ", Student.numOfStudentsEnrolled);

// // ABSTRACT CLASSES

// abstract class Recipe {
//   abstract collectIngredients(): void;
//   abstract prepareTheDish(): void;
//   abstract cleanUp(): void;

//   execute() {
//     this.collectIngredients();
//     this.prepareTheDish();
//     this.cleanUp();
//   }
// }

// class Tea extends Recipe {
//   collectIngredients(): void {
//     console.log("Ready with Tea leafs, suger, water and milk");
//   }
//   prepareTheDish(): void {
//     console.log("Boil Water");
//     console.log("Add the ingredients");
//     console.log("Serve the Tea");
//   }
//   cleanUp(): void {
//     console.log("Clean all utensils");
//   }
// }

// let gingerTea = new Tea();
// gingerTea.execute();

// // METHOD OVERLOADING
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//   if (typeof a === "string" || typeof b === "string") {
//     return a + " " + b;
//   } else if (typeof a === "number" || typeof b === "number") {
//     return a + b;
//   } else {
//     return "Unknown Operation";
//   }
// }

// const result = add(4, 5);
// console.log("Sum of numbers - ", result);

// const strResult = add("Hello", "World");
// console.log("String Concatenation : ", strResult);

// // GENERIC FUNCTION
// function addAtBeginning<T>(item: T, arr: T[]): T[] {
//   return [item, ...arr];
// }

// const allFriends = addAtBeginning<string>("Monica", ["Joey", "Ross", "Rachel"]);
// console.log("Friends Type : ", typeof allFriends[0]);

// const allMarks = addAtBeginning<number>(98, [89, 79, 96, 91]);
// console.log("Marks Type : ", typeof allMarks[0]);

// // // GENERIC INTERFACES
// interface IResource<T, K> {
//   resourceName: T;
//   resourceLocation: K;
// }

// let ServerOne: IResource<number, string> = {
//   resourceName: 199,
//   resourceLocation: "Pune",
// };

// // // GENERIC CLASS
// class List<T> {
//   private list: T[] = [];

//   addItem(item: T) {
//     this.list.push(item);
//   }

//   removeItem(index: number): T {
//     const [deletedItem] = this.list.splice(index, 1);
//     return deletedItem;
//   }

//   getItem(index: number): T {
//     const [fetchedItem] = this.list.splice(index, 1);
//     return fetchedItem;
//   }
//   getAllItems(): T[] {
//     return this.list;
//   }
// }

// let friendsList = new List<string>();
// friendsList.addItem("Monica");
// friendsList.addItem("Joey");
// friendsList.addItem("Chandler");
// console.log(friendsList.getAllItems());

// friendsList.removeItem(1);
// console.log(friendsList.getAllItems());

// console.log("Index 1 element : ", friendsList.getItem(1));

// GENERIC CONSTRAINTS

// function getLength<T extends { length: number }>(args: T) {
//   return args.length;
// }

// interface IBox {
//   width: number;
//   height: number;
//   length: number;
// }

// let box: IBox = {
//   width: 6,
//   height: 8,
//   length: 10,
// };

// const boxLength = getLength<IBox>(box);
// console.log("Box Length : ", boxLength);

// named import
import getQuote, { getLuckyNumber, getDailyRoutine } from "./utils/fortune";
import Student from "./utils/student";

import "bootstrap/dist/css/bootstrap.min.css";

// default import
// import getQuote from "./utils/fortune";

console.log("Your lucky number today : ", getLuckyNumber());

console.log("You daily routine : ", getDailyRoutine());

console.log("Quote for the day : ", getQuote());

let studentOne = new Student("S001", "Monica Geller");
console.log("Student Details : ", studentOne.getDetails());
