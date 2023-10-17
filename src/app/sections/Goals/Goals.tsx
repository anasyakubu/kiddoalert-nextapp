import GoalsCard from "@/app/components/GoalsCard/GoalsCard";
import React from "react";
import "./Goal.scss";

const Goals = () => {
  return (
    <div
      className="Goals"
      style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
    >
      <div className="p-10 pad">
        <div className="space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div
            className="bg-transparent text-center mt-5 pb-20 pt-20 p-10 rounded-lg"
            // style={{ height: "2rem", width: "auto" }}
          >
            <h2
              className="text-3xl font-extrabold"
              style={{ color: "#122231" }}
            >
              6 ways to safe guard your child
            </h2>
            {/* <p className="mt-20">
              Earn 5%-15% when you save with any of these PiggyVest plans.
            </p> */}
          </div>
          <GoalsCard
            title="EASY TO USE"
            text="The service is so easy to use. School do not need any additional technical know how to operate"
            titleStyle="#122231"
          />
          <GoalsCard
            title="SERVICE USES SMS"
            text="This service is a SMS based service (Text Messaging), This allows a wide range of users, and end users don’t need to use the Internet."
            titleStyle="#122231"
          />
          <GoalsCard
            title="ONE CHILD, 4 WAYS OF VERIFICATION"
            text="You can verify pick up via Face Recognition, Finger Print, Smart Card, Pass code or any combination"
            titleStyle="#122231"
          />
          <GoalsCard
            title="AMAZING BATTERY LIFE"
            text="Device can run on battery for 3 days when fully charged."
            titleStyle="#122231"
          />
          <GoalsCard
            title="4G NETWORK"
            text="The service works on the 4G network ensuring that the service is fast and reliable"
            titleStyle="#122231"
          />
          <GoalsCard
            title="ATTENDANCE FOR STAFF"
            text="Take your Staff attendance at extra cost"
            titleStyle="#122231"
          />
        </div>
      </div>
    </div>
  );
};

export default Goals;
