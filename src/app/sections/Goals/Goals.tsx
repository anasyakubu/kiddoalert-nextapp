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
              5 ways to build your savings
            </h2>
            <p className="mt-20">
              Earn 5%-15% when you save with any of these PiggyVest plans.
            </p>
          </div>
          <GoalsCard />
          <GoalsCard />
          <GoalsCard />
        </div>
      </div>
    </div>
  );
};

export default Goals;
