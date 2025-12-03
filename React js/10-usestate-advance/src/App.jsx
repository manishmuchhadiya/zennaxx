import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState({ name: "Manish", age: 23 });

  function name() {
    console.log(num.name);
    console.log(num.age);

    const newnum = { ...num };
    newnum.name = "dhruvi";
    newnum.age = 23;
    newnum.date = 29.5;
    setNum(newnum);
    console.log(num);
    console.log(num.age);
  }

  return (
    <div>
      <h1>
        Hello my name is {num.name} and i am {num.age} years old and date is
        {num.date}
      </h1>
      <button onClick={name}>Click!</button>
    </div>
  );
};

export default App;
