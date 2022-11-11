import React from "react";
import "./Exercise.css";

const Exercise = ({ exercise, handleAddToCart }) => {
  const { picture, name, time } = exercise;
  //   console.log(handleAddToCart);
  return (
    <div className="exercise-container">
      <img src={picture} alt="" />
      <div>
        <h3>Name: {name}</h3>
        <h4>Time: {time}</h4>
      </div>
      <button onClick={() => handleAddToCart(exercise)} className="btn-cart">
        Add to list{" "}
      </button>
    </div>
  );
};

export default Exercise;
