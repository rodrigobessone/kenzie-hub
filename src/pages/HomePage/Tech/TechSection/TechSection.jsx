import React, { useContext } from "react";
import StyledTechSection from "../TechStyles/StyledTechSection";
import StyledTitle from "../TechStyles/StyledTitle";
import { StyledPlusIcon } from "../TechStyles/StyledPlusIcon";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TechList from "../TechList/TechList";
import { ModalContext } from "../../../../../providers/ModalContext/ModalContext";
import Modal from "../Modal/Modal";
import { UserContext } from "../../../../../providers/UserContext/UserContext";
import BackDropModal from "../Modal/BackDropModal";
import Loading from "../Modal/StyledSpinner";

function TechSection() {
  const { setModalType, modalState, setModalState, isLoading } =
    useContext(ModalContext);
  const { user } = useContext(UserContext);
  function handleOpenModal() {
    setModalType("createModal");
    setModalState(true);
  }

  return (
    <>
      {modalState && (
        <>
          <BackDropModal />
          {isLoading ? <Loading /> : <Modal />}
        </>
      )}
      <StyledTechSection>
        <div>
          <StyledTitle>Tecnologias</StyledTitle>
          <div onClick={handleOpenModal}>
            <StyledPlusIcon icon={faPlus} />
          </div>
        </div>
        {user.techs.length === 0 ? (
          <p>Adicione tecnologias e o status de seu aprendizado</p>
        ) : (
          <TechList />
        )}
      </StyledTechSection>
    </>
  );
}

export default TechSection;
