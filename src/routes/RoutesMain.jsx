import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import HomePage from "../pages/HomePage/HomePage";
import RoutesComponent from "./routesComponent";
import PublicRoute from "./PublicRoute";
import { ModalProvider } from "../../providers/ModalContext/ModalContext";

function RoutesMain() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route element={<RoutesComponent />}>
        <Route index path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default RoutesMain;
