import React, { useEffect, useState } from "react";
import Exercise from "../Exercise/Exercise";
import "./Exercises.css";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  const handleAddToCart = (exercises) => {
    console.log(exercises);
  };
  return (
    <div>
      <h1> Gazi Exercise club</h1>
      <h3>Select Today's Exercise</h3>
      <div className="exercises-container">
        <div className="exercises">
          {exercises.map((exercise) => (
            <Exercise
              key={exercise._id}
              exercise={exercise}
              handleAddToCart={handleAddToCart}
            ></Exercise>
          ))}
        </div>
        <div className="cart-container"> Add To Cart </div>
      </div>
    </div>
  );
};

export default Exercises;
