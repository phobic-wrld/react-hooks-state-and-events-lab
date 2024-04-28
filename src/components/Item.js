import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => {
    setInCart(true);
  };
  return (
    <li className={inCart ? "item-in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
         Add to cart
     </button>
    </li>
  );
}

export default Item;
