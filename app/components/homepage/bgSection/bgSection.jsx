import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const BgSection = () => {
  return (
    <section className=" py-10">
      <div
        style={{
          background: "url(./section.png) center center / contain no-repeat",
          height: "70vh",
        }}
        className=" max-w-[1140px] mx-auto flex justify-end items-center pr-10"
      >
        <div className=" space-y-[8px] px-3">
          <h2 className=" text-2xl font-bold text-blackis text-center">
            The Ways We Work
          </h2>
          <p className=" text-lg font-medium text-center">
            How has our relationship with work changed?
          </p>
          <div className=" flex items-center justify-center">
            <button className=" flex items-center gap-2 bg-blue rounded-full text-white py-[12px] px-6 text-center justify-center">
              Sign up free
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BgSection;
