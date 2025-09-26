/** 
 * 1. Register
 * 2. Send wellcome Email
 * 3. Login
 * 4. Get User data
 * 5. Display user data
 
Slove using callback then promisce and async await
*/

//  Callbacks

const register = (callback) => {
  setTimeout(() => {
    console.log("   - 1.Register ");
    callback();
  }, 5000);
};

const sendEmail = (callback) => {
  setTimeout(() => {
    console.log("   - 2.Email Send");
    callback();
  }, 4000);
};

const logIn = (callback) => {
  setTimeout(() => {
    console.log("   - 3.Login succesful ");
    callback();
  }, 3000);
};

const getUserData = (callback) => {
  setTimeout(() => {
    console.log("   - 4.Got user data");
    callback();
  }, 2000);
};

const displayUserData = () => {
  setTimeout(() => {
    console.log("   - 5.User data display");
  }, 1000);
};

register(function () {
  sendEmail(function () {
    logIn(function () {
      getUserData(function () {
        displayUserData();
      });
    });
  });
});

console.log("  Last But First");

//Promises

//Async Await
