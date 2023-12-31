import React, { useContext } from "react";
import StyledModal from "../TechStyles/StyledModal";
import { ModalContext } from "../../../../providers/ModalContext/ModalContext";
import {
  Title3,
  LabelModal,
} from "../../../../components/homePageComponents/StyledTitle";
import StyledForm from "../TechStyles/StyledForm";
import StyledButton from "../../../../components/signUpComponents/StyledButton";
import StyledSelect from "../../../../components/signUpComponents/StyledSelect";
import { FormProvider, useForm } from "react-hook-form";
import api from "../../../../services/Api";
import { UserContext } from "../../../../providers/UserContext/UserContext";
import StyledWrapper from "../TechStyles/StyledWrapper";
import { TechContext } from "../../../../providers/TechContext/TechContext";
import { toast } from "react-toastify";
import ModalInput from "./ModalInput";

function Modal() {
  const { userTech, setTech, onDeleteTech } = useContext(TechContext);
  const { updateData } = useContext(UserContext);
  const { modalType, setModalState, setIsLoading } = useContext(ModalContext);

  const methods = useForm();

  const {
    handleSubmit,
    register
  } = methods;

  async function onSubmit(formData) {
    const token = localStorage.getItem("@TOKEN");

    setIsLoading(true);
    try {
      if (modalType === "editModal") {
        const { status } = formData;

        await api.put(
          `/users/techs/${userTech.id}`,
          { status },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setModalState(false);
        setIsLoading(false);
        toast.success("Status atualizado com sucesso!", {
          autoClose: 600,
        });
      } else {
        await api.post("/users/techs", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setModalState(false);
        setIsLoading(false);
        toast.success("Tecnlogia cadastrada com sucesso!", {
          autoClose: 900,
        });
      }

      const { data } = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      updateData(data);
    } catch (err) {
      setIsLoading(false);
      toast.error("Ops! Algo deu errado.", {
        autoClose: 600,
      });
    }
  }

  return (
    <StyledModal>
      <div>
        <Title3>
          {modalType === "createModal"
            ? "Cadastrar Tecnologia"
            : "Tecnologia detalhes"}
        </Title3>
        <img
          src="/X.svg"
          alt="close-modal"
          onClick={() => setModalState(false)}
        />
      </div>
      <FormProvider {...methods}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <ModalInput modalType={modalType} userTech={userTech}/>
          <LabelModal>Selecionar status</LabelModal>
          <StyledSelect>
            <select
              name="status"
              id="status"
              onChange={(e) =>
                setTech((prevUserTech) => ({
                  ...prevUserTech,
                  status: e.target.value,
                }))
              }
              defaultValue={userTech.status}
              {...register("status")}
            >
              <option defaultValue="Iniciante">Iniciante</option>
              <option defaultValue="Intermediário">Intermediário</option>
              <option defaultValue="Avançado">Avançado</option>
            </select>
          </StyledSelect>
          {modalType === "createModal" ? (
            <StyledButton type="submit">Cadastrar Tecnologia</StyledButton>
          ) : (
            <StyledWrapper>
              <StyledButton edit={"true"} type="submit">
                Salvar alterações
              </StyledButton>
              <StyledButton
                delete={"true"}
                type="button"
                onClick={onDeleteTech}
              >
                Remover
              </StyledButton>
            </StyledWrapper>
          )}
        </StyledForm>
      </FormProvider>
    </StyledModal>
  );
}

export default Modal;
