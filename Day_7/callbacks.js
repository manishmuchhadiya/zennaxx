// Seanario

/*
1. Register
2. Send wellcome Email
3. Login
4. Get User data
5. Display user data
*/

/*
function register() {
  setTimeout(() => {
    console.log("Register End");
  }, 1000);
}

function sendEmail() {
  setTimeout(() => {
    console.log("Email End");
  }, 1000);
}

function logIn() {
  setTimeout(() => {
    console.log("Login End");
  }, 1000);
}

function getUserData() {
  setTimeout(() => {
    console.log("Got user data");
  }, 1000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("User data display");
  }, 1000);
}

register();
sendEmail();
logIn();
getUserData();
displayUserData();

console.log("Other application work!");
*/

//=====================================================================================

// function register(callback) {
//   setTimeout(() => {
//     console.log("Register End");
//     callback();
//   }, 1000);
// }

// function sendEmail(callback) {
//   setTimeout(() => {
//     console.log("Email End");
//     callback();
//   }, 2000);
// }

// function logIn(callback) {
//   setTimeout(() => {
//     console.log("Login End");
//     callback();
//   }, 3000);
// }

// function getUserData(callback) {
//   setTimeout(() => {
//     console.log("Got user data");
//     callback();
//   }, 1000);
// }

// function displayUserData() {
//   setTimeout(() => {
//     console.log("User data display");
//   }, 1000);
// }

// callback hell
// register(function () {
//   sendEmail(function () {
//     logIn(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// console.log("Other application work!");

//==================================================================================================

function register(callback) {
  setTimeout(() => {
    console.log("Register End");
    callback();
  }, 1000);
}

function sendEmail(callback) {
  setTimeout(() => {
    console.log("Email End");
    callback();
  }, 2000);
}

function logIn(callback) {
  setTimeout(() => {
    console.log("Login End");
    callback();
  }, 3000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("Got user data");
    callback();
  }, 1000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("User data display");
  }, 1000);
}

register(function () {
  sendEmail(function () {
    logIn(function () {
      getUserData(function () {
        displayUserData();
      });
    });
  });
});

console.log("Other application work!");
