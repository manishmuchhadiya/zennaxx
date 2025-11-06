const App = () => {
  let i = 1;

  // const Clicked1 = (i) => {
  //   console.log("1 clicked");
  // };
  // const Clicked0 = (i) => {
  //   console.log("0 clicked");
  // };
  // if (1 == i) {
  //   return <button onClick={Clicked1}>Ok</button>;
  // } else {
  //   return <button onClick={Clicked0}>Ok</button>;
  // }

  const Hii = (val) => {
    console.log(val);
    return <p>{val}</p>;
  };

  const Onscrool = (va) => {
    if (va > 0) {
      console.log("Scroling Down", va);
    } else {
      console.log("Scroling Uown", va);
    }
  };

  return (
    <>
      <div
        className="bg"
        onWheel={(em) => {
          Onscrool(em.deltaY);
        }}
      >
        <div className="input">
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(em) => {
              Hii(em.target.value);
            }}
          />
        </div>
      </div>
      <div className="bg bg-p ">
        <div className="input">
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(em) => {
              Hii(em.target.value);
            }}
          />
        </div>
      </div>
      <div className="bg">
        <div className="input">
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(em) => {
              Hii(em.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default App;
