function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Register End");
      resolve("succes");
    }, 1000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   return reject("Error while sending Email");
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

// register()
//   .then(sendEmail)
//   .then(logIn)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

//====================================================================================================================================== Async await
// async function authenicate() {
//   // when u write async fun it will by defult return promise we don't need to write like new promis etc...

//   await register();
//   await sendEmail(); //await means it wait for this fun to run then next line run
//   await logIn(); // if we use await so funcion must be async
//   await getUserData(); // just add async key word infront of fun name
//   await displayUserData();

//   // when you return promise you can use
//   // .then
//   //async await
// }

async function authenicate() {
  try {
    // 1 way to catch erro try catch
    const message = await register();
    await sendEmail();
    await logIn();
    await getUserData();
    await displayUserData();
    console.log(message);
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}

/** async fun it by defult return promise
 * so in fun call we can write .then
 */

// authenicate();
// authenicate()
//   .then(() => {
//     console.log("All set");
//   })

authenicate()
  .then(() => {
    console.log("All set");
  })
  .catch((err) => {
    //====== 2 way to catch error
    console.log(err);
  });

console.log("Other application work!");
