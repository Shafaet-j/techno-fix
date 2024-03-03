import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Work = () => {
  return (
    <section className=" flex items-center py-16">
      <div className="max-w-[1140px] mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5  mb-10 items-center">
          <div>
            <h2 className=" text-blackis font-bold text-5xl mb-4">
              Work together, wherever you work
            </h2>
            <p className=" text-grey/50 mb-10">
              In the office, remote, or a mix of the two, with Miro, your team
              can connect, collaborate, and co-create in one space no matter
              where you are.
            </p>
            <button className=" flex items-center gap-2  text-blue text-left ">
              <span className=" border-b border-blue pb-1"> Learn more</span>
              <IoIosArrowRoundForward />
            </button>
          </div>
          <div>
            <img src="./work.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
