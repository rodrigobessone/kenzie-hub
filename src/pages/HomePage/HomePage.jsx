import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StyledHeaderHome from "./components/StyledheaderHome";
import StyledDivHome from "./components/StyledDivHome";
import StyledDivAlert from "./components/StyledDivAlert";
import StyledMainHome from "./components/StyledHomeMain";
import StyledLink from "../../styles/StyledLink";
import { UserContext } from "../Login/User/Context";
import { StyledToast } from "../../styles/StyledToast";

function HomePage() {
  const { user, updateData } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    updateData(null);
  };

  return (
    <StyledMainHome>
      <StyledHeaderHome>
        <img src="/Logo.svg" alt="logo" />
        <StyledLink to={"/"} onClick={handleLogout}>
          Sair
        </StyledLink>
      </StyledHeaderHome>
      <StyledToast />
      <StyledDivHome>
        <div>
          <h2>Olá {user.name}</h2>
          <h3>{user.course_module}</h3>
        </div>
      </StyledDivHome>
      <StyledDivAlert>
        <div>
          <h2>Que pena, estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades.
          </p>
        </div>
      </StyledDivAlert>
    </StyledMainHome>
  );
}

export default HomePage;
