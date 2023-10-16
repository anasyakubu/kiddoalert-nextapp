import Link from "next/link";
import React from "react";
import "./Priority.scss";

const Priority = () => {
  return (
    <div
      className="Priority"
      style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
    >
      <div className="p-10">
        <div className="flex">
          <div className="m-5">
            <h1>ICON</h1>
          </div>
          <div className="m-5">
            <h3 className="font-bold text-xl" style={{ color: "#122231" }}>
              Your security is our priority
            </h3>
            <p
              className="mt-5 font-light text-md
            "
            >
              Kiddo Alert uses the highest level of Internet Security and it is
              secured by 256 bits SSL <br /> security encryption to ensure that
              your child information is completely protected from fraud.
            </p>
            <div className="mt-5">
              <Link
                className="font-bold text-md hover:underline"
                style={{ color: "#122231" }}
                href="/"
              >
                More on our security measures
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Priority;
