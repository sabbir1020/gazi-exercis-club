import React from "react";
import "./Exercise.css";

const Exercise = ({ exercise }) => {
  const { picture, name, time } = exercise;
  return (
    <div className="exercise-container">
      <img src={picture} alt="" />
      <div>
        <h3>Name: {name}</h3>
        <h4>Time: {time}</h4>
      </div>
    </div>
  );
};

export default Exercise;
