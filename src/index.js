import React from "react";
import ReactDOM from "react-dom/client";

import Routes from "./Routes";

import GlobalStyles from "./styles/global";

import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ProductsProvider>
      <CartProvider>
        <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Routes />
        </BrowserRouter>
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
