import Image from "next/image";
import Banner from "./components/homepage/banner/banner";
import Brands from "./components/homepage/brands/brands";
import Colaborate from "./components/homepage/collaborate/colaborate";
import Work from "./components/homepage/work/work";
import Connect from "./components/homepage/connect/connect";
import BgSection from "./components/homepage/bgSection/bgSection";
import WorkTab from "./components/homepage/workTab/workTab";
import Team from "./components/homepage/team/team";
import BestTeam from "./components/homepage/bestTeam/bestTeam";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Brands />
      <Colaborate />
      <Work />
      <Connect />
      <BgSection />
      <WorkTab />
      <Team />
      <BestTeam />
    </div>
  );
}
