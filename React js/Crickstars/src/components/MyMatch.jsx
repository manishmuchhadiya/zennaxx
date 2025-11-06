import React from "react";
import HeaderLogo from "../components/HeaderLogo";
import LeftS from "../components/LeftSection";
import MidS from "../components/MidSection";
import RightSf from "../components/RightSectionFirst";
import RightSs from "../components/RightSectionSecondCard";

const MyMatch = () => {
  return (
    <div className="w-[1440px] border-1">
      <HeaderLogo />
      <div className="flex">
        <div className="ml-[100px]">
          <LeftS />
        </div>
        <div className="mx-[20px]">
          <h1 className="font-bold text-[24px] mb-[30px] border-2">
            All Match
          </h1>
          <MidS />
          <MidS />
          <MidS />
        </div>
        <div className=" mr-[100px]">
          <RightSf />
          <RightSs />
        </div>
      </div>
    </div>
  );
};

export default MyMatch;
