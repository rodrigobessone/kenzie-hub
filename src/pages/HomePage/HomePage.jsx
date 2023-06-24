import React, { useContext } from "react";
import StyledLink from "../../styles/StyledLink";
import { StyledToast } from "../../styles/StyledToast";
import StyledDivHome from "../../components/homePageComponents/StyledDivHome";
import StyledHomeMain from "../../components/homePageComponents/StyledHomeMain";
import StyledHeaderHome from "../../components/homePageComponents/StyledheaderHome";
import { UserContext } from "../../../providers/UserContext/UserContext";
import TechSection from "./Tech/TechSection/TechSection";

function HomePage() {
  const { user, updateData } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    updateData(null);
  };

  return (
    <StyledHomeMain>
      <StyledHeaderHome>
        <img src="/Logo.svg" alt="logo" />
        <StyledLink to={"/"} onClick={handleLogout}>
          Sair
        </StyledLink>
      </StyledHeaderHome>
      <StyledToast />
      <StyledDivHome>
        <div>
          <h2>Olá, {user.name}!</h2>
          <h3>{user.course_module}</h3>
        </div>
      </StyledDivHome>
      <TechSection />
    </StyledHomeMain>
  );
}

export default HomePage;
