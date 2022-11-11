import React from "react";

const Cart = ({ carts }) => {
  console.log(carts);
  const totalTime = carts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.time,
    0
  );
  console.log(typeof totalTime);
  return (
    <div>
      <h3>time: {totalTime}s</h3>
    </div>
  );
};

export default Cart;
