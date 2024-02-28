//direct way of creating an object
const student = {
  name: "kunal",
  marks: 25,
  detail: function () {
    console.log(
      `details of the student are name:${this.name}, marks:${this.marks}`
    ); // this refers to the current object we are dealing with
  },
};

// a js object has properties and method
// properties ---> name, marks
//method detail
// all objects have special property called prototype
//is nothing but an object inside an object
// It can be reference to an object or null

//using prototype we can inherit properties and methods of other object

//example of prototype
let arr = ["a", "b", "c"];
//console.log(typeof arr); // object

//since arr is an object
// push method comes from the prototype object

//whenever an object is created prototype is already inherited
// arr.push("e");
// console.log(arr);

// //1
// const myObj = {
//   name: "Kunal",
//   age: "25",
//   viewData() {
//     console.log(
//       "The properties inside object are:" + this.name + " " + this.age
//     );
//   },
// };

// //2
// class employee {
//   employee() {
//     this.name = name;
//     this.age = age;
//   }
//   viewData() {
//     console.log(`name: ${this.name} age: ${this.age}`);
//   }
// }

// let newObj = new employee("name", 25);

//ToyataClass
/*
    start(), stop method
    setBrand method which receives a param
    and sets this.brandName to param received
    create an object Fortuner

*/
/*
    constructor
*/

// class Toyata {
//   constructor(brand, mileage) {
//     console.log("constructor called");
//     this.brand = brand;
//     this.mileage = mileage;
//   }
//   start() {
//     console.log("car can start");
//   }
//   stop() {
//     console.log("car can stop");
//   }
//   //   setProperty(props) {
//   //     this.props = props;
//   //   }
// }

// let fortuner = new Toyata("fortuner", 10);

/*
    Inheritance
    Method Overiding
    Declare Parent Class, define method hello
    inherit Parent in Child class
    and using object from child class call hello method
*/
// class Parent {
//   hello() {
//     console.log("Parent Class");
//   }
// }
// class Child extends Parent {
//   Hay() {
//     console.log("Child Class");
//   }
// }

// let myObj = new Child();

/* superkeyword
    create a person class,
    define a constructor
    eat() method

    create Engineer class extends Person
    work()
    
    create Doctor class extends Person
    work()

*/

class Person {
  constructor(branch) {
    this.sapiens = "homo sapiens";
    this.branch = branch;
  }
  eat() {
    console.log("a person has to eat");
  }
  work() {
    console.log("a person does nothing");
  }
}
class Engineer extends Person {
  constructor(branch) {
    super(); //to invoke parent class constructor
    //sthis.branch = branch;
  }
  work() {
    super.eat();
    console.log("build something");
  }
}
let kunalObj = new Engineer("ISE");

class User {
  constructor(Name, Email) {
    this.Name = Name;
    this.Email = Email;
  }
  viewData() {
    console.log(`name:${this.Name} email:${this.Email}`);
  }
}
class Admin extends User() {
  constructor(Name, Email) {
    //super();

    super(Name, Email);
  }
  //   editData() {
  //     //super(name, email);
  //     super.viewData();
  //   }
}

//let someUser = new User("Kunal", "k@gmail.com");
let someAdmin = new Admin("kunal", "k@gmail.com");
