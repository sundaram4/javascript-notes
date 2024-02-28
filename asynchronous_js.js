/*
    order of the usuability
    descending order  
*/
//async await >> promise chains >> callback hell

//synchronous way
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("synchronous way");
// next line executes only after
// first has finished

//Asynchronous way
// console.log("one");
// console.log("two");
// setTimeout(() => {
//   console.log("Asynchronous way");
// }, 2000);
// console.log("three");
// console.log("four");

//callback
// function print() {
//   console.log("callback fn");
// }
// setTimeout(print, 2000);

//promises
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("promise resolved");
      //reject("promise rejected");
    }, 2000);
  });
}

//promise chaining
// getData(1)
//   .then((res) => {
//     console.log(res);
//     return getData(2);
//   })
//   .then((res) => {
//     console.log(res);
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Async Await
// async function getAllData() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
//   await getData(4);
// }

//IIFE
// Immediately Invoked Function Expression
(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
})();
