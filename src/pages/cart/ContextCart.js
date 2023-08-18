import React, { createContext, useContext, useEffect, useState } from "react";

const CARTSTORE = "cartItems";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem(CARTSTORE)) || [];
    const storedCartCount = storedCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    setCartItems(storedCartItems);
    setCartCount(storedCartCount);
  }, []);

  useEffect(() => {
    localStorage.setItem(CARTSTORE, JSON.stringify(cartItems));
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  }, [cartItems]);
  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }

    setCartCount(cartCount + 1);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        cartCount,
        setCartItems,
        setCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
