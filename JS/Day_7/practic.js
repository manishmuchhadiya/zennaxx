/** 
 * 1. Register
 * 2. Send wellcome Email
 * 3. Login
 * 4. Get User data
 * 5. Display user data
 
Slove using callback then promisce and async await
*/

//  Callbacks  ===================================================================================

// const register = (callback) => {
//   setTimeout(() => {
//     console.log("   - 1.Register ");
//     callback();
//   }, 5000);
// };

// const sendEmail = (callback) => {
//   setTimeout(() => {
//     console.log("   - 2.Email Send");
//     callback();
//   }, 4000);
// };

// const logIn = (callback) => {
//   setTimeout(() => {
//     console.log("   - 3.Login succesful ");
//     callback();
//   }, 3000);
// };

// const getUserData = (callback) => {
//   setTimeout(() => {
//     console.log("   - 4.Got user data");
//     callback();
//   }, 2000);
// };

// const displayUserData = () => {
//   setTimeout(() => {
//     console.log("   - 5.User data display");
//   }, 1000);
// };

// register(function () {
//   sendEmail(function () {
//     logIn(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

// console.log("  Last But First");

// Promises  ============================================================================================

// const register = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("   - 1.Register");
//       resolve();
//     }, 5000);
//   });
// };

// const sendEmail = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("   - 2.Email send");
//       resolve();
//     }, 4000);
//   });
// };

// const logIn = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("   - 3.Login succesful");
//       // reject("error at login");
//       resolve();
//     }, 3000);
//   });
// };

// const getUserData = () => {
//   promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("   - 4.Got user data");
//       resolve();
//     }, 2000);
//   });
//   return promise;
// };

// const displayUserData = () => {
//   setTimeout(() => {
//     console.log("   - 5.User data display");
//   }, 1000);
// };

// register()
//   .then(sendEmail)
//   .then(logIn)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((err) => console.log(err));

// console.log("  Last But First");

// Async Await ==========================================================================================

const register = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("   - 1.register");
      resolve();
    }, 5000);
  });
};
const sendEmail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("   - 2.sendEmail");
      resolve();
    }, 4000);
  });
};
const logIn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("   - 3.Login succesful");
      resolve();
    }, 3000);
  });
};
const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("   - 4.Get user data");
      resolve();
    }, 2000);
  });
};
const displayUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("   - 5.Display user data");
      // resolve();
      reject("error ");
    }, 1000);
  });
};

async function funCall() {
  // try {
  await register();
  await sendEmail();
  await logIn();
  await getUserData();
  await displayUserData();
  // }
  // catch (err) {
  // console.log("Something Went Wrong.......", err);
  // }
}

funCall();
console.log("Last but First");
