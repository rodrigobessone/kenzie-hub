import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import api from "../../services/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { StyledToast } from "../../styles/StyledToast";
import StyledButtonLogin from "../../components/loginComponents/StyledButtonLogin";
import StyledButtonSignUp from "../../components/loginComponents/StyledButtonSignUp";
import StyledIcon from "../../components/loginComponents/StyledIcon";
import StyledHeaderLogin from "../../components/loginComponents/StyledHeaderLogin";
import StyledMainLogin from "../../components/loginComponents/StyledMainLogin";
import StyledDivLoginContent from "../../components/loginComponents/StyledDivLoginContent";
import { UserContext } from "../../providers/UserContext/UserContext";
import { ModalContext } from "../../providers/ModalContext/ModalContext";
import Loading from "../HomePage/Tech/Modal/StyledSpinner";
import { loginSchema } from "../../schema/schema";

function LoginPage() {
  const methods = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { updateData } = useContext(UserContext);
  const { setIsLoading, isLoading } = useContext(ModalContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await api.post("/sessions", data);
      setIsLoading(false);
      toast.success("Login realizado com sucesso!", {
        autoClose: 500,
      });
      updateData(response.data.user);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@TOKEN", response.data.token);
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch {
      setIsLoading(false);
      toast.error("Ops! Algo deu errado", {
        autoClose: 700,
      });
    }
  };

  const [visibilityPass, setVisibility] = useState(false);

  function toggleVisibility() {
    setVisibility(!visibilityPass);
  }

  return (
    <StyledMainLogin>
      <StyledToast />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <StyledHeaderLogin>
            <img src="/Logologin.svg" alt="logo" />
          </StyledHeaderLogin>
          <StyledDivLoginContent>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>E-mail:</label>
                <input
                  type="text"
                  placeholder="Digite seu e-mail"
                  {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div>
                <label>Senha:</label>
                <input
                  type={visibilityPass ? "text" : "password"}
                  placeholder="Digite sua senha"
                  {...register("password")}
                />
                <StyledIcon
                  icon={visibilityPass ? faEye : faEyeSlash}
                  onClick={toggleVisibility}
                />
              </div>
              {errors.password && <p>{errors.password.message}</p>}
              <StyledButtonLogin type="submit">Entrar</StyledButtonLogin>
            </form>
            <h3>Ainda não possui conta?</h3>
            <StyledButtonSignUp to="/signup">Cadastre-se</StyledButtonSignUp>
          </StyledDivLoginContent>
        </>
      )}
    </StyledMainLogin>
  );
}

export default LoginPage;
