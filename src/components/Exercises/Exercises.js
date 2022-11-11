import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Exercise from "../Exercise/Exercise";
import "./Exercises.css";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);
  const handleAddToCart = (exercise) => {
    const newCarts = [...carts, exercise];
    setCarts(newCarts);
    // console.log(exercise.time);
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
        <div className="cart-container">
          <h2>Add To Cart</h2>
          <h4>Click To Tatal cart : {carts.length}</h4>
          <Cart carts={carts}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
