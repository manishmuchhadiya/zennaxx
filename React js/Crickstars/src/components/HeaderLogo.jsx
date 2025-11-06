import React from "react";
import logo from "../assets/Logo.svg";

const headerLogo = () => {
  return (
    <div className=" border-1 h-[88px] pt-[23px] mb-[30px] pl-[100px]">
      <div className="border-1 w-[189.86px] h-[65px] flex ">
        <img src={logo} alt="Crickstars-Logo" />
        <h2 className="border-1 w-[112px] h-[18px] font-bold my-[23.5px] ml-[15px] text-[25px] ">
          Crickstars
        </h2>
      </div>
    </div>
  );
};

export default headerLogo;
