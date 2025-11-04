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

let strVar: string;
strVar = "Hola";

let numVar: number;
numVar = 199;

let boolVar: boolean;
boolVar = true;

let dateVar: Date;
dateVar = new Date("November 04, 2025");
console.log("Date : ", dateVar);

let strArrayVar: Array<string>;
strArrayVar = ["Monica", "Joey", "Ross"];

let numArrayVar: number[];
numArrayVar = [98, 97, 92, 89];

let anyVar: any;
anyVar = "The String";
anyVar = 100;
anyVar = true;

let unknownVar: unknown;
unknownVar = "The String";
if (typeof unknownVar == "string") {
  console.log("Index of 'S': ", unknownVar.indexOf("S"));
}

unknownVar = 199;
unknownVar = true;

// Fixed length and varying types array sub-set
let tupleVar: [string, number];
tupleVar = ["John Doe", 21];

let unionVar: string | number;
unionVar = "Twenty-One";
unionVar = 21;

let functioVar: Function;
functioVar = () => {};

let functionVar2: () => string;
functionVar2 = () => "Hello World";

let nullOrStringVar: null | string;
nullOrStringVar = null;
nullOrStringVar = "The String";

function demoVoid(): void {
  console.log("Void Function");
}

function throwError(): never {
  throw new Error("Something went wrong");
}
