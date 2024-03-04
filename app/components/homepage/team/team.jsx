import React from "react";
import { IoIosArrowRoundForward, IoMdCheckmark } from "react-icons/io";

const Team = () => {
  return (
    <section className=" py-10 px-5">
      <div className=" max-w-[1140px] mx-auto">
        <h2 className=" text-5xl text-left text-blackis font-bold">
          Built for all kinds of teams
        </h2>
        <div className=" flex flex-wrap gap-2 items-center mt-8 mb-6">
          <button className=" px-4 py-3 rounded-full border">
            UX & Design
          </button>
          <button className=" px-4 py-3 rounded-full border">Marketing</button>
          <button className=" px-4 py-3 rounded-full border">
            Product Management
          </button>
          <button className=" px-4 py-3 rounded-full border">
            Engineering
          </button>
          <button className=" px-4 py-3 rounded-full border">
            Consultants
          </button>
          <button className=" px-4 py-3 rounded-full border">
            Agile Coaches
          </button>
          <button className=" px-4 py-3 rounded-full border">Sales</button>
        </div>
        <div className="md:flex py-6">
          <div className=" space-y-[30px] lg:w-[40%] w-full py-5">
            <div className=" space-y-[16px]">
              <p className=" text-grey/50 flex items-center gap-2">
                <IoMdCheckmark size={20} />
                <span>Build low-fi wireframes</span>
              </p>
              <p className=" text-grey/50 flex items-center gap-2">
                <IoMdCheckmark size={20} />
                <span>Involve stakeholders in the design process</span>
              </p>
              <p className=" text-grey/50 flex items-center gap-2">
                <IoMdCheckmark size={20} />
                <span>Run engaging design workshops</span>
              </p>
            </div>
            <button className=" flex items-center gap-2  text-blue text-left mb-[70px]">
              <span className=" border-b border-blue pb-1"> Learn more</span>
              <IoIosArrowRoundForward />
            </button>
            <p className=" text-grey/50">Integrate your favorite tools</p>
            <div className=" flex items-center gap-8">
              <img src="./rub.png" alt="" />
              <img src="./xd.png" alt="" />
              <img src="./fig.png" alt="" />
              <img src="./no.png" alt="" />
            </div>
          </div>
          <div className=" lg:w-[60%] w-full">
            <img
              className="w-full lg:max-w-[700px] max-h-[517px]"
              src="./team.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
