import Image from "next/image";
import HomeHeader from "./sections/HomeHeader/HomeHeader";
import WhatsOn from "./sections/WhatsOn/WhatsOn";

export default function Home() {
  return (
    <div className="">
      <HomeHeader />
      <WhatsOn />
    </div>
  );
}
