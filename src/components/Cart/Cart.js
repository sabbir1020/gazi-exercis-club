import React, { useState } from "react";
import "./Cart.css";

const Cart = ({ carts }) => {
  // console.log(carts);
  const [cart, setCart] = useState([10]);
  const clickHandle = (time) => {
    setCart(time);
  };

  const totalTime = carts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.time,
    0
  );
  // console.log(typeof totalTime);
  return (
    <div>
      <div>
        <button onClick={() => clickHandle(10)}>10s</button>
        <button onClick={() => clickHandle(20)}>20s</button>
        <button onClick={() => clickHandle(30)}>30s</button>
        <button onClick={() => clickHandle(40)}>40s</button>
      </div>
      <div className="cart-container">
        <h3>time: {totalTime}s</h3>
        <h3>Break Time: {cart} </h3>
      </div>
    </div>
  );
};

export default Cart;
