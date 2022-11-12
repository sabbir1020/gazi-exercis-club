import React from "react";
import "./Cart.css";

const Cart = ({ carts }) => {
  console.log(carts);
  const totalTime = carts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.time,
    0
  );
  // console.log(typeof totalTime);
  return (
    <div className="cart-container">
      <h3>time: {totalTime}s</h3>
      <h3>Break Time: </h3>
    </div>
  );
};

export default Cart;
