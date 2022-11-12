import logo from "../images/dumbbell.png";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Exercise from "../Exercise/Exercise";
import Personal from "../Personal/Personal";
import "./Exercises.css";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [carts, setCarts] = useState([]);

  // fakadata load in json files
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  // button click handleAddToCart
  const handleAddToCart = (exercise) => {
    const newCarts = [...carts, exercise];
    setCarts(newCarts);
    // console.log(exercise.time);
  };

  return (
    <div>
      <div className="exercises-text">
        <img src={logo} alt="" />
        <h1> Gazi Exercise club</h1>
      </div>
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
        <div className="cart-container">
          <Personal></Personal>
          <h3>Add A Break</h3>
          <Cart carts={carts}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
