import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";
import { ModalProvider } from "../providers/ModalContext/ModalContext";
import { TechProvider } from "../providers/TechContext/TechContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <ModalProvider>
        <TechProvider>
          <App />
        </TechProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
