import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const WorkTab = () => {
  return (
    <section className=" py-10">
      <div className=" max-w-[1140px] mx-auto">
        <h2 className=" text-5xl text-left text-blackis font-bold">
          Built for the way you work
        </h2>
        <div className=" flex flex-wrap gap-2 items-center mt-8 mb-6">
          <button className=" px-4 py-3 rounded-full border">
            Brainstorming
          </button>
          <button className=" px-4 py-3 rounded-full border">
            Diagramming
          </button>
          <button className=" px-4 py-3 rounded-full border">
            Meetings & Workshops
          </button>
          <button className=" px-4 py-3 rounded-full border">
            Scrum Events
          </button>
          <button className=" px-4 py-3 rounded-full border">Mapping</button>
          <button className=" px-4 py-3 rounded-full border">
            Research & Design
          </button>
          <button className=" px-4 py-3 rounded-full border">
            Strategic Planning
          </button>
        </div>
        <div className=" grid grid-cols-2 gap-5 py-6">
          <div className=" space-y-[30px]">
            <h2 className=" text-lg text-blackis">Brainstorming</h2>
            <p className=" text-grey/50">
              Unleash creative ideas and build on them with the help of sticky
              notes, images, mind maps, videos, drawing capabilities — the list
              goes on.
            </p>
            <button className=" flex items-center gap-2  text-blue text-left ">
              <span className=" border-b border-blue pb-1"> Learn more</span>
              <IoIosArrowRoundForward />
            </button>
          </div>
          <div>
            <img className=" w-[700px]" src="./worktab.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTab;
