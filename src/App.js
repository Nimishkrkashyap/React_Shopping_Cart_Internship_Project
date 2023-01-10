import React, { useState } from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import "./App.css";

const App = () => {
  const [showHome, setShowHome] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems)

  const handleAddCart = (item) => {
    const newItem = {
      ...item,
      count: 1
    }
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div>
      <Navbar size={cartItems.length} setShowHome={setShowHome} />
      
      {showHome ? (
        <Home handleAddCart={handleAddCart} />
      ) : (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      )}
    </div>
  );
};

export default App;
