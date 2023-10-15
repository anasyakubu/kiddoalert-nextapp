import React from "react";
import Nav from "../../components/Nav";
import "./HomeHeader.scss";

const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <Nav />
      <div className="lg:px-8">
        <div className="pl-20 max-w-xl py-24 sm:py-48 lg:py-56 ">
          <div className="text">
            <h1 className="text-xl font-bold tracking-wide text-white shadow-2 sm:text-4xl">
              Kiddo Alert
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              We understand that the safety and well-being of your child are
              paramount, even when theyre at school. Thats why our schools kid
              monitoring software goes above and beyond to ensure parents are
              always informed about their childs arrival and departure.
            </p>
          </div>
          <div className="mt-10">
            {/* <BtnPrimary BtnName="Sign up now" /> */}
            <button className="p-4 bg-blue-600 pl-10 pr-10 text-white rounded-lg hover:bg-blue-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
