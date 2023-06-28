import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import api from "../services/Api";
import { toast } from "react-toastify";
import { UserContext } from "../providers/UserContext/UserContext";

function ProtectedRoute() {
  const { user, updateData } = useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    async function checkAuth() {
      if (!user) {
        try {
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          updateData(data);
        } catch (error) {
          navigate("/");
          toast.error("Você não está autenticado", {
            autoClose: 500,
          });
        }
      }
    }

    checkAuth();
  }, []);

  if (!user) {
    return (
      <div>
        <span>Carregando....</span>
      </div>
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;
