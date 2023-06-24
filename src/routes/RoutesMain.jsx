import { Route, Routes } from "react-router-dom";
import React from "react";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import HomePage from "../pages/HomePage/HomePage";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoutes";

function RoutesMain() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route index path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default RoutesMain;
