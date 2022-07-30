import { createContext, useState } from "react";

export const ProductsContext = createContext({});

export const ProductsProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 0,
      nome: "Almofada Personalizada",
      preco: 20.0,
      img: "https://i.ibb.co/KFzW4LY/almofada-personalizada.png",
    },

    {
      id: 1,
      nome: "Caneca Personalizada",
      preco: 45.0,
      img: "https://i.ibb.co/GstbkTn/caneca-personalizada.png",
    },

    {
      id: 2,
      nome: "Quadros Decorativos",
      preco: 17.5,
      img: "https://i.ibb.co/ZmCKFs5/quadros-decorativos.jpg",
    },

    {
      id: 3,
      nome: "Squeeze Camuflada",
      preco: 35.0,
      img: "https://i.ibb.co/BwjzD4B/squeeze-camuflada.png",
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
