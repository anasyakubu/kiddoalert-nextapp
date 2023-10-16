import React from "react";

const GoalsCard = () => {
  return (
    <div className="GoalsCard">
      <div
        className="bg-white text-center mt-5 pb-20 pt-20 p-10 rounded-lg shadow-sm"
        // style={{ height: "2rem", width: "auto" }}
      >
        <h2 className="text-3xl font-semibold" style={{ color: "#122231" }}>
          5 ways to build your savings
        </h2>
        <p className="mt-20">
          Earn 5%-15% when you save with any of these PiggyVest plans.
        </p>
      </div>
    </div>
  );
};

export default GoalsCard;
