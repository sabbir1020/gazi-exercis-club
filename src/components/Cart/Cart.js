import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../unitity/Fakedb";
import "./Cart.css";
const Cart = ({ carts }) => {
  // console.log(carts);
  const [cart, setCart] = useState([10]);

  const clickHandle = (time) => {
    setCart(time);
    addToCart(time);
  };
  const notify = () => toast.success("Wow Activity Completed!");
  const totalTime = carts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.time,
    0
  );
  // console.log(typeof totalTime);
  return (
    <div className="">
      <div className="click-button">
        <button onClick={() => clickHandle(10)}>10s</button>
        <button onClick={() => clickHandle(20)}>20s</button>
        <button onClick={() => clickHandle(30)}>30s</button>
        <button onClick={() => clickHandle(40)}>40s</button>
      </div>
      <div className="cart-container">
        <h3>Exercise Details</h3>
        <h4>Exercise time: {totalTime}s</h4>
        <h4>Break Time: {cart} </h4>
        <button onClick={() => notify()} className="btn-button">
          Activity Completed
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cart;
