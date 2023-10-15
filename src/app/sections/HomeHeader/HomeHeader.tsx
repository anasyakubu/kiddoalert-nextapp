import React from "react";
import Image from "next/image";
import Nav from "../../components/Nav";
import Logo from "../../../../public/logo-small.png";
import "./HomeHeader.scss";

const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <Nav />
      <div className="lg:px-3">
        <div className="pl-20 sm:py-48 lg:py-56 ">
          <div className="text">
            <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <div className="">
                <h3 className="font-semibold text-gray-300">Welcome to</h3>
                <h1 className="text-xl mt-3 font-bold tracking-wide text-white shadow-2 sm:text-4xl">
                  <span>&lt;</span>
                  Kiddo Alert /<span>&gt;</span>
                </h1>
                <p className="mt-3 text-lg leading-8 text-gray-200">
                  A Frontend React and JavaScript Developer who likes to work
                  remotely from Home to provide a high functional frontend Apps.
                </p>
                <div className="mt-10">
                  {/* <BtnPrimary BtnName="Sign up now" /> */}
                  <button className="p-4 bg-blue-600 pl-10 pr-10 text-white rounded-lg hover:bg-blue-500">
                    Hire Me
                  </button>
                </div>
              </div>
              <div className="ImgMe">
                <div className="mockup-phone border-primary">
                  <div className="camera"></div>
                  <div className="display">
                    <div className="artboard artboard-demo phone-1">
                      <Image src={Logo} alt="Logo-Phone" className="w-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
