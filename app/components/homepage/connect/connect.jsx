import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Connect = () => {
  return (
    <section className=" flex items-center py-10">
      <div className="max-w-[1140px] mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-28  mb-10 items-center">
          <div className=" order-2">
            <h2 className=" text-blackis font-bold text-5xl mb-4">
              Connect your tools, close your tabs
            </h2>
            <p className=" text-grey/50 mb-10">
              Whether you want to edit your Google Docs, resolve Jira issues, or
              collaborate over Zoom, Miro has 100+ integrations with tools you
              already use and love.
            </p>
            <button className=" flex items-center gap-2  text-blue text-left ">
              <span className=" border-b border-blue pb-1"> Learn more</span>
              <IoIosArrowRoundForward />
            </button>
          </div>
          <div className=" order-1">
            <img src="./connect.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
