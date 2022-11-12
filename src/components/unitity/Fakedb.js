const addToCart = (time) => {
  const storedCart = localStorage.setItem("cart", time);
};
export { addToCart };
