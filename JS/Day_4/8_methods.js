// ===============================================================Reduce

// const movies = [
//   {
//     name: "Interstellar 1",
//     budget: 100,
//   },
//   {
//     name: "social",
//     budget: 150,
//   },
//   {
//     name: "matrix ",
//     budget: 300,
//   },
// ];

// Q = want toatl budget of movies
/* first use foreach

let total = 0;
but we careat total variable outside forEach and change in forEach is not good so we can use reduce

movies.forEach((movi) => {
  total = total + movi.budget;
});

console.log(total);
*/

/* Reduce
acc name is must it work as total var like its value is 0 set in the end of fuction

const total = movies.reduce((acc, movie) => {
  acc = acc + movie.budget;
  return acc;
}, 0);
console.log(total);
*/

// IndexOf

// const admins = [2, 1, 5];
// Q=find user is admin or not
// const user = {
//   name: "xyz",
//   id: 5,
// };

// indedof give us index of arry if user obj has admin value
// if the value is not in user obj so it give u -1 value
// console.log(admins.indexOf(user.id));

//so we can check by adding condition so we can get boolean
// const isAdmin = admins.indexOf(user.id) > -1;
// console.log(isAdmin);

// includes
// we can also includes for find user is admin or not

// console.log(admins.includes(user.id));

//Find
// const users = [
//   {
//     name: "xyz",
//     id: 1,
//   },
//   {
//     name: "abc",
//     id: 2,
//   },
//   {
//     name: "pqr",
//     id: 3,
//   },
// ];

// const myUser = users.find((obj) => {
//   if (obj.id === 3) {
//     return true;
//   }
//   return false; //return boolean

//   // short way
//   //return user.id===2;
// });

// console.log(myUser);

//sort

// const names = ["manish", "dhruvi", "vishal", "tushar"];
// console.log(names);
// names.sort();
// console.log(names);

//splice
const names = ["manish", "dhruvi", "vishal", "tushar"];
// if i want to delet vishal i have to know his index
names.splice(2, 1);
// names.splice(2, 2);
// splice take 2 pearamiter 1 is index 2 is how much u want to delete
console.log(names);
