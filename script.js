"use strict";
// Constructor classes
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   return 2037 - this.birthYear;
// };
// Person.prototype.name = function () {
//   console.log(this.firstName);
// };
// const alan = new Person("alan", 2001);
// console.log(alan.calcAge());
// alan.name()
////////////////////////////////////////////////////////////////////

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person);
// Student.prototype.intro = function () {
//   console.log(
//     `My name is ${this.firstName} and i am ${
//       2027 - this.birthYear
//     } years old and i study ${this.course}`
//   );
// };

// const alan = new Student("alan", 2001, "CSE");
// alan.intro();

////////////////////////////////////////////////////////////////////////////////////////////////

// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     return 2037 - this.birthYear;
//   }
//   get age() {
//     console.log(2037 - this.birthYear);
//   }

//   set firstName(name) {
//     return (this._firstName = name);
//   }

//   get firstName() {
//     return this._firstName;
//   }
// }

// class Student extends Person {
//   constructor(firstName, birthYear, course) {
//     super(firstName, birthYear);
//     this.course = course;
//   }

//   intro() {
//     console.log(
//       `My name is ${this.firstName} and i am ${
//         2027 - this.birthYear
//       } years old and i study ${this.course}`
//     );
//   }
// }

// const alan = new Student("Alan", 2001, "CSE");

// // alan.intro();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const Person = {
//   calcAge() {
//     return 2037 - this.birthYear;
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const alan = Object.create(Person);
// alan.init("Alan", 2001);
// console.log(alan.calcAge())
// const Student = Object.create(Person);
// Student.initt = function (firstName, birthYear, course) {
//   Person.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.intro = function () {
//   console.log(
//     `My name is ${this.firstName} and i am ${
//       2027 - this.birthYear
//     } years old and i study ${this.course}`
//   );
// };

// const alan = Object.create(Student);
// alan.initt("alan", 2001, "CSE");
// console.log(alan.calcAge());
// alan.intro();

// const arr = [1, 2, 3, 4];
// const x = arr.map((m, i) => {
//   return m + i;
// });

// // console.log(x);

// // const sum = arr.reduce((m, i) => {
// //   return m + i;
// // }, 0);
// // console.log(sum);
// // arr.forEach((m, i) => {
// //   console.log(`${m} is at position ${i}`);
// // });

// const Emirates = {
//   name: "alan ",
//   gender: "male",
//   flightNo: "IX456",
//   intro: function () {
//     console.log("");
//   },
// };
