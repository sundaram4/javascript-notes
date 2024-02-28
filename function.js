//block of code that performs a specific task
// can be invoked whenever needed

//example
console.log("hello"); //log("hello") --> fn

[(1, 2, 3)].push(4); //push(4) ---> fn

"abc".toUpperCase(); //toUpperCase() ---> fn

//parameter argument

function myFunction(msg) {
  //msg --> parameter
  console.log(msg);
}

myFunction(msg); // msg --> argument

// scope --> koi variable kaha tak
// zinda hain
function myFunction(msg) {
  let param = 123;
  console.log(msg, param); // accessible
}
// console.log(param) --> not accessible

// practice qsn
//let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// the above declaration cannot be accessed inside
// function printVowel or in the log fn

function printVowel(word) {
  let vowelChecker = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  console.log(vowelChecker);
  word.split("").forEach((element) => {
    if (vowelChecker.includes(element)) {
      console.log(element);
    }
    // console.log(element);
  });
}
//console.log(vowel); // cannot access vowel here
printVowel("kunal");

// Method and function
"this is a string".toUpperCase();
// we have binded string to toUpperCase function
// now toUpperCase() becomes a method since we
// have binded it
// bind karna matlab kiske sath associate karna

Array.forEach((element, index, arr) => {
  // index --> 0,1,2...
  // arr --> the whole array itself
});

// Higher order Function
// ex- Array.forEach()
// it takes a function as argumrnt
// or returns a function
// or both

Array.map((element, index, arr) => {
  /* return some value*/
});

// map and foreach do the same work
// diff map --> returns a new array
// foreach--> works on the same array

//filter method
let filteredArray = Array.filter((element) => {
  return; // elements based on some condition
});

//reduce method --> perform some operation and
// reduce the array to single value
let totalSum = Array.reduce((accumulator, element) => {
  accumulator + element;
}, (initialValue = 0));

//using array.reduce to print largest number
let arr = [5, 6, 2, 101, 3];
const output = arr.reduce((prev, next) => {
  return prev > next ? prev : next;
});
console.log(output);
