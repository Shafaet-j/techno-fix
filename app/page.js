import Image from "next/image";
import Banner from "./components/homepage/banner/banner";
import Brands from "./components/homepage/brands/brands";
import Colaborate from "./components/homepage/collaborate/colaborate";
import Work from "./components/homepage/work/work";
import Connect from "./components/homepage/connect/connect";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Brands />
      <Colaborate />
      <Work />
      <Connect />
    </div>
  );
}
