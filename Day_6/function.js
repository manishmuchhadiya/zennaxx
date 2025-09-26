// function upperCase(str) {
//   return str.toUpperCase();
// }

// const result = upperCase("manish");
// console.log(result);

// function calculatArea(hight, width) {
//   const area = hight * width;
//   return area;
// }
// const result = calculatArea(40, 20);
// console.log(result);

function calculatArea(hight, width) {
  // we can set perameter valu defolt like(hight,width=20)
  const area = hight * width;
  return area;
}
// const result = calculatArea(40); //in function call if u dont give value to perametr so it give u undefine thats why we set defult value
// console.log(result);

//======================
//variable scop

// const filename = "xyz";
// function download() {
//   // download file gos here
//   console.log(filename);
// }
// download();

// function declaration and function expression

//declaration
// function login() {
//code
// }

//expression
// const login = function () {
//   // this is anonymus function that has no name
//   // but we can store in varible
//   // this is function expression
//   console.log("logged in");
// };

// login(); // thats how can can call function

// callback
function formatText(text, formatCb) {
  return typeof formatCb == "function" ? formatCb(text) : text.toUpperCase();
}
// const result = formatText("hello", function (text) {
//   // text.toUpperCase();
//   return text.charAt(0).toUpperCase() + text.slice(1);
// });
// console.log(result);

// const hello = formatText("hello");
// console.log(hello);

//============================================================================
// IIFE (Immediately Invoked Function Expression)

// (function setup() {
//   console.log("setup done");
// })();
// (function setup() {
//   console.log("setup done");
// })();

//================================================================
//arrow function

// const login = function () {
//   console.log("logged in");
// };

// const login = () => {
//   console.log("logged in");
// };
// login();

// const sum = (num1, num2) => num1 + num2; // one line we dont write return and {}
// const result = sum(10, 20);
// console.log(result);

//callback arrow function
const result = formatText(
  "hello",
  (text) => text.charAt(0).toUpperCase() + text.slice(1)
);
console.log(result);

//good practice

// 1.Nameing
//show, get,calc
// 2.one fucncion one action
// 3. function should be descriptive
