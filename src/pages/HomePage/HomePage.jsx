import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import StyledLink from "../../styles/StyledLink";
import { UserContext } from "../Login/User/Context";
import { StyledToast } from "../../styles/StyledToast";
import StyledDivHome from "../../components/homePageComponents/StyledDivHome";
import StyledHomeMain from "../../components/homePageComponents/StyledHomeMain";
import StyledHeaderHome from "../../components/homePageComponents/StyledheaderHome";
import StyledDivAlert from "../../components/homePageComponents/StyledDivAlert";


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
    </StyledHomeMain>
  );
}

export default HomePage;
