// function register() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //   return reject("Error while registering...");
//       console.log("Register End");
//       resolve();
//     }, 1000);
//   });
// }

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register End");
      resolve("Error while registering...");
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email End");
      resolve();
    }, 2000);
  });
}

function logIn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login End");
      resolve();
    }, 3000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Got user data");
      resolve();
    }, 1000);
  });
}

function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User data display");
      resolve();
    }, 1000);
  });
}

// register().then(() => {});
// we can use .then if fuction is returning something

/*
-what u pass in Resolve(passHere) u can get in .then(getHere) 
-what u pass in Reject(passHere) u can get in .catch(getHere)
*/

// register()
//   .then(sendEmail)
//   .then(logIn)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

// Async await

console.log("Other application work!");
