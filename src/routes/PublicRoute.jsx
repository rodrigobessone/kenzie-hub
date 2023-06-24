import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PublicRoute() {
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");
  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  if (token) {
    return (
      <div>
        <span>Carregando...</span>
      </div>
    );
  }
  return <Outlet />;
}

export default PublicRoute;
