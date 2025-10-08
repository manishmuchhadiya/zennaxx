/*
 Problem: 1
 Create a function delay(ms) that returns a Promise. This Promise should resolve after ms milliseconds. Then, use .then() to log a message after the delay.
*/

// const delay = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("sucess ...");
//       resolve();
//     }, 2000);
//   });
// };

// const greething = () => {
//   return new Promise((resolve, reject) => {
//     console.log("hello !!!");
//     resolve();
//   });
// };

// greething().then(delay).then(greething).then(delay);

/*
Problem: 2
Create a function checkNumber(num) that returns a Promise. 
If num is even, the Promise should resolve with "Number is even!".
 If num is odd, it should reject with "Number is odd!". 
 Handle both the success and error cases using .then() and .catch().
*/

const checkNumber = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve("Number is even!");
    } else {
      reject("Number is odd!");
    }
  });
};

const num = () => {
  return Math.floor(Math.random() * 100) + 1;
};
const newnum = num();
// console.log(newnum);
// console.log(num());

checkNumber(newnum)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
