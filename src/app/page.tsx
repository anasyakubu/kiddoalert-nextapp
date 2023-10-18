import Image from "next/image";
import HomeHeader from "./sections/HomeHeader/HomeHeader";
import Priority from "./sections/Priority/Priority";
import Goals from "./sections/Goals/Goals";
import Diverse from "./sections/Diverse/Diverse";

export default function Home() {
  return (
    <div className="">
      <HomeHeader />
      <Priority />
      <Goals />
      <Diverse />
    </div>
  );
}
