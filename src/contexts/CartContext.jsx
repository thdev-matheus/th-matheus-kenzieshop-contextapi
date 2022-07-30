import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const currentCart = localStorage.getItem("cart");
    currentCart && setCart(JSON.parse(currentCart));
  }, []);

  const addCart = (product) => {
    const newCart = [...cart, product];

    return cart.some((prod) => prod.id === product.id)
      ? toast.dark("Este produto já está no carrinho!")
      : (localStorage.setItem("cart", JSON.stringify(newCart)),
        setCart(newCart));
  };

  const remCart = (product) => {
    const newCart = cart.filter((prod) => prod.id !== product.id);

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addCart, remCart }}>
      {children}
    </CartContext.Provider>
  );
};
