import React from "react";
import Cart from "./components/Cart";

const App = () => {
  const jpg1 =
    "https://plus.unsplash.com/premium_photo-1682096515837-81ef4d728980?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870";
  const jpg2 =
    "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F957389f4-8432-11e8-ad58-ae35970199d3.jpg?crop=6411%2C3606%2C160%2C1670&resize=1200";

  return (
    <div className="parent">
      <Cart user="Dhruvi" jpg={jpg1} />
      <Cart user="Manish" jpg={jpg2} />
    </div>
  );
};

export default App;
