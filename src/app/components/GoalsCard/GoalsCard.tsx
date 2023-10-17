import React from "react";
import './GoalsCard.scss'

interface cardsProps {
  titleStyle: any;
  title: string;
  text: string;
}

const GoalsCard = (props: cardsProps) => {
  const { title, text } = props;
  return (
    <div className="GoalsCard">
      <div
        className="bg-white text-center mt-5 pb-20 pt-20 p-10 rounded-lg shadow-sm"
        // style={{ height: "2rem", width: "auto" }}
      >
        <h2
          className="text-3xl font-semibold text-left"
          // style={{ color: "{titleStyle}" }}
          style={{ color: "#122231" }}
        >
          {title}
        </h2>
        <p className="mt-20 text-left">{text}</p>
      </div>
    </div>
  );
};

export default GoalsCard;
