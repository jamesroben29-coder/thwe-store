import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("thwe-store-cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      return [];
    }
  });


  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("thwe-store-item");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "thwe-store-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem(
      "thwe-store-item",
      JSON.stringify(orders)
    );
  }, [orders]);


  const addToCart = (product, quantity) => {

    const alreadyAdded = cartItems.some(
      (item) => item.id === product.id
    );

    if (alreadyAdded) {
      return;
    }

    setCartItems((prevItems) => [
      ...prevItems,
      {
        ...product,
        quantity
      }
    ]);
  };


  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  };


  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1
                ? item.quantity - 1
                : 1
            }
          : item
      )
    );
  };


  const addOrder = (order) => {

    setOrders((prevOrders) => {

      const alreadyExists = prevOrders.some(
        (existingOrder) =>
          existingOrder.id === order.id
      );

      if (alreadyExists) {
        return prevOrders;
      }

      return [
        ...prevOrders,
        order
      ];
    });
  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        addOrder,
        orders
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext);
};