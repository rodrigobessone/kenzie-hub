import React, { createContext, useContext, useState } from "react";
import { ModalContext } from "../ModalContext/ModalContext";
import { UserContext } from "../UserContext/UserContext";
import { toast } from "react-toastify";
import api from "../../services/Api";

const TechContext = createContext();

function TechProvider({ children }) {
  const [userTech, setTech] = useState([]);
  const { setIsLoading, setModalState } = useContext(ModalContext);
  const { updateData } = useContext(UserContext);
  async function onDeleteTech() {
    const token = localStorage.getItem("@TOKEN");
    setIsLoading(true);
    try {
      setIsLoading(true);
      await api.delete(`/users/techs/${userTech.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoading(false);
      setModalState(false);

      const { data } = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      updateData(data);
      toast.info("Tecnologia deletada com sucesso!", {
        autoClose: 980,
      });
    } catch (err) {
      setIsLoading(false);
      toast.error("Ops! Algo deu errado.", {
        autoClose: 600,
      });
    }
  }
  return (
    <TechContext.Provider value={{ userTech, setTech, onDeleteTech }}>
      {children}
    </TechContext.Provider>
  );
}

export { TechContext, TechProvider };
