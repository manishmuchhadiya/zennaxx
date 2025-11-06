import React, { useState } from "react";

const App = () => {
  let num = 10;
  const [chanum, setChanum] = useState(0);
  function change() {
    // if (chanum == 10) {
    //   console.log(chanum);
    //   setChanum(20);
    // } else {
    //   console.log(chanum);
    //   setChanum(10);
    // }

    setChanum(chanum + 1);
    console.log(chanum);
  }

  return (
    <div>
      <h1>Number is {chanum}</h1>
      <button
        // onClick={change}
        onClick={() => {
          setChanum(chanum + 1);
        }}
      >
        Increment
      </button>
      <button
        // onClick={change}
        onClick={() => {
          setChanum(chanum - 1);
        }}
      >
        Decriment
      </button>
    </div>
  );
};

export default App;
