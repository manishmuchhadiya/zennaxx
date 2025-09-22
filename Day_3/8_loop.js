// ===============================================================for loop
// for (let i = 0; i < 4; i++) {
//   console.log("*");
// }

// const actor = [
//   {
//     name: "Actor 1",
//     payment: 100,
//   },
//   {
//     name: "Actor 2",
//     payment: 200,
//   },
//   {
//     name: "Actor 3",
//     payment: 150,
//   },
// ];

// for (let i = 0; i < actor.length; i++) {
//   //   actor[i].payment = actor[i].payment - 10;
//   // short version
//   //actor[i].payment -= 10;
//   //   console.log(actor[i]);
// }

//===============================================================forEach
// actor.forEach((act) => {
//   act.payment = act.payment - 10;
//   console.log(act);
//   console.log(act.name);
//   console.log(act.payment);
// });
// console.log(actor);

// ===============================================================for Of
// for (let act of actor) {
//   act.payment = act.payment - 10;
//   console.log(act);
// }

//===============================================================filter
const students = [
  {
    name: "student 1",
    marks: 45,
  },
  {
    name: "student 2",
    marks: 60,
  },
  {
    name: "student 3",
    marks: 35,
  },
];

// students.filter((stu) => {
// //   console.log(stu);
// return true; //filter return true or false
// });

/*
const failed = students.filter((stu) => {
  if (stu.marks < 45) {
    return true;
  } else {
    return false;
  }
});

// make it short
const failed = students.filter((stu) => {
  if (stu.marks < 45) {
    return true;
  }
  return false;
});


//more short
const failed = students.filter((stu) => {
  return stu.marks < 45;
});


// in one line more exra short
const failed = students.filter((stu) => stu.marks < 45);

console.log(failed);
console.log(students); //filter doesn't chang real aarry it make copy of new arry
*/

//=============================================================== Map
const users = [
  {
    fname: "John",
    lname: "Doe",
  },
  {
    fname: "Jane",
    lname: "Doe",
  },
];
// const finalUser = users.map((user) => {
//   //   return {
//   //     fullname: user.fname + " " + user.lname,
//   //   };
//   // better way to write
//   return {
//     fullname: `${user.fname} ${user.lname}`,
//   };
// });

// console.log(finalUser);

// ===============================================================Reduce
