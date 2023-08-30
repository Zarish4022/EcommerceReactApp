import React, { createContext, useContext, useEffect, useState } from "react";

const CARTSTORE = "cartItems";
const WISHSTORE = "wishItems";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishItems, setWishItems] = useState([]);
  const [wishCount, setWishCount] = useState(0);

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };
  const isProductInWish = (productId) => {
    return wishItems.some((item) => item.id === productId);
  };
  const storedWishItems = JSON.parse(localStorage.getItem(WISHSTORE)) || [];
  const storedWishCount = storedWishItems.reduce(
    (total, item) => total + item.cartquantity,
    0
  );
  useEffect(() => {
    setWishItems(storedWishItems);
    setWishCount(storedWishCount);
  }, []);
  useEffect(() => {
    localStorage.setItem(WISHSTORE, JSON.stringify(wishItems));
    setWishCount(
      wishItems.reduce((total, item) => total + item.cartquantity, 0)
    );
  }, [wishItems]);

  const addToWish = (product) => {
    const existingItemIndex = wishItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedWishItems = [...wishItems];
      updatedWishItems[existingItemIndex].cartquantity += 1;
      setWishItems(updatedWishItems);
    } else {
      setWishItems((prevItems) => [
        ...prevItems,
        { ...product, cartquantity: 1 },
      ]);
    }
  };
  const storedCartItems = JSON.parse(localStorage.getItem(CARTSTORE)) || [];
  const storedCartCount = storedCartItems.reduce(
    (total, item) => total + item.cartquantity,
    0
  );
  useEffect(() => {
    setCartItems(storedCartItems);
    setCartCount(storedCartCount);
  }, []);
  useEffect(() => {
    localStorage.setItem(CARTSTORE, JSON.stringify(cartItems));
    setCartCount(
      cartItems.reduce((total, item) => total + item.cartquantity, 0)
    );
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].cartquantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...product, cartquantity: 1 },
      ]);
    }
  };

  const getCartItemQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.cartquantity : 0;
  };
  const clearCart = () => {
    setCartCount(0);
    setCartItems([]);
    localStorage.removeItem(CARTSTORE);
  };
  const removeItem = (itemId) => {
    const updatedItems = wishItems.filter((item) => item.id !== itemId);
    setWishItems(updatedItems);
    setWishCount(wishCount - 1);
  };
  const removeCartItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
    setCartCount(cartCount - 1);
  };
  const isCartEmpty = cartItems.length === 0;
  const PreviewItem = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
        cartCount,
        addToWish,
        setCartItems,
        removeCartItem,
        setCartCount,
        wishItems,
        isProductInWish,
        getCartItemQuantity,
        isProductInCart,
        PreviewItem,
        setWishItems,
        wishCount, // Add this line
        setWishCount, // Add this line
        clearCart,
        isCartEmpty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
