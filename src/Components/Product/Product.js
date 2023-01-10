import React from "react";
import "./Product.css";

const Product = ({ item, handleAddCart }) => {
  const { title, price, description, category, thumbnail } = item;
  // console.log(item)
  return (
    <div className="productContainer">
      <img className="productImage" src={thumbnail} alt={title} />
      <div className="cardHeading">
        <h2>{title}</h2>
        <h2>{price}</h2>
      </div>
      <p>{description}</p>
      <div className="cardBottom">
        <h1>{category}</h1>
        <button onClick={() => handleAddCart(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
