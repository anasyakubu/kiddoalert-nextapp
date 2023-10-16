import Image from "next/image";
import HomeHeader from "./sections/HomeHeader/HomeHeader";
import Priority from "./sections/Priority/Priority";

export default function Home() {
  return (
    <div className="">
      <HomeHeader />
      <Priority />
    </div>
  );
}
