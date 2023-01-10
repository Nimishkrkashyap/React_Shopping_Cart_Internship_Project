import React, { useEffect, useState } from "react";
import CartProduct from "../CartProduct/CartProduct";
import "./Cart.css";

const Cart = ({ cartItems, setCartItems }) => {
  // console.log()
  const [totalPrice, setTotalPrice] = useState(0);

  const handleRemove = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredItems);
  };

  const handleIncrement = (id) => {
    let filteredItems = cartItems.map((curElem) => {
      if (curElem.id === id) {
        let dec = curElem.count + 1;

        return {
          ...curElem,
          count: dec
        }
      } else {
        return curElem
      }
    });
    // console.log(filteredItems)
    setCartItems(filteredItems);
  };

  const handleDecrement = (id) => {
    
  };
  

  const handlePrice = () => {
    let totalPrice = 0;
    cartItems.forEach((elem) => {
      totalPrice += elem.count * elem.price;
    });
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <div className="cartContainer">
      <div className="heading">
        <div className="leftHeading">
          <h1>PRODUCT</h1>
        </div>
        <div className="rightHeading">
          <h1>PRICE</h1> <h1>QTY</h1> <h1>TOTAL</h1>
        </div>
      </div>
      {cartItems.map((item, index) => (
        <CartProduct
          item={item}
          key={index}
          handleRemove={handleRemove}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
        />
      ))}
      <div className="footer">
        <h2>SUBTOTAL ₹{totalPrice}</h2>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
