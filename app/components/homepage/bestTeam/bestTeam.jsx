import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const BestTeam = () => {
  return (
    <section className=" flex items-center py-16">
      <div className="max-w-[1140px] mx-auto">
        <div className=" text-center relative mb-10">
          <h2 className=" text-blackis text-5xl font-bold text-center mb-6 inline-block">
            Loved by the world's best teams
          </h2>
          <div className=" flex justify-center">
            <button className=" flex items-center gap-2 border rounded-full text-blue border-blue py-[12px] px-7 text-center justify-center">
              See all customer stories →
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mb-10">
          <div>
            <img className=" mb-8" src="./vmware.png" alt="" />
            <p className=" text-grey/50 w-[75%] mb-12">
              “When the pandemic hit, those of us who thrive on in-person
              collaboration were worried that our creativity and productivity
              would suffer. Miro was the perfect tool to help us with
              collaboration, whiteboarding, and retrospectives while remote.”
            </p>
          </div>
          <div>
            <img className=" mb-8" src="./Docusign.png" alt="" />
            <p className=" text-grey/50 w-[75%]">
              “Miro helps solve one of the major gaps in product design: how to
              manage tasks across product designers whose projects are in
              different tools.”
            </p>
          </div>
          <div>
            <img className=" mb-8" src="./frog.png" alt="" />
            <p className=" text-grey/50 w-[75%]">
              “As we used Miro we moved from skepticism to belief to innovation,
              and now we have a tool that’s at the core of what we do and will
              continue to extend into the future.”
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className=" flex items-center gap-4">
            <img src="./div.png" alt="" />
            <div>
              <p className=" text-grey/60">Roxanne Mustafa</p>
              <p className=" text-grey/60">Design Team Lead at VMware</p>
            </div>
          </div>
          <div className=" flex items-center gap-4">
            <img src="./div-1.png" alt="" />
            <div>
              <p className=" text-grey/60">Jane Ashley</p>
              <p className=" text-grey/60">Head of Design at DocuSign</p>
            </div>
          </div>
          <div className=" flex items-center gap-4">
            <img src="./div-2.png" alt="" />
            <div>
              <p className=" text-grey/60">Roxanne Mustafa</p>
              <p className=" text-grey/60">Design Team Lead at VMware</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestTeam;
