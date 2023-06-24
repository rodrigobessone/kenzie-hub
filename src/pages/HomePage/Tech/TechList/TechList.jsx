import React, { useContext, useEffect } from "react";
import StyledTitle from "../TechStyles/StyledTitle";
import StyledList from "../TechStyles/StyledList";
import StyledItem from "../TechStyles/StyledItem";
import { ModalContext } from "../../../../../providers/ModalContext/ModalContext";
import { UserContext } from "../../../../../providers/UserContext/UserContext";
import { TechContext } from "../../../../../providers/TechContext/TechContext";

function TechList() {
  const { setModalState, setModalType } = useContext(ModalContext);
  const { user } = useContext(UserContext);
  const { setTech } = useContext(TechContext);

  function handleOpenModal(tech) {
    setModalState(true);
    setModalType("editModal");
    setTech(tech);
  }

  return (
    <StyledList>
      {user.techs.map((tech, index) => (
        <StyledItem key={index} onClick={() => handleOpenModal(tech)}>
          <StyledTitle>{tech.title}</StyledTitle>
          <span>{tech.status}</span>
        </StyledItem>
      ))}
    </StyledList>
  );
}

export default TechList;
