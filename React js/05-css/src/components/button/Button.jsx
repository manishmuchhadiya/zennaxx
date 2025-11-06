import React from "react";
import style from "./button.module.css";

const Button = () => {
  return (
    <div>
      <button type="submit" className={style.btn}>
        done
      </button>
    </div>
  );
};

export default Button;
