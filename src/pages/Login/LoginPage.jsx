import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import StyledHeaderLogin from "./StyledHeaderLogin";
import StyledMainLogin from "./StyledMainLogin";
import StyledDivLoginContent from "./StyledDivLoginContent";
import StyledButtonLogin from "./StyledButtonLogin";
import StyledButtonSignUp from "./StyledButtonSignUp";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import StyledIcon from "./StyledIcon";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { api } from "../../services/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./User/Context";
import { StyledToast } from "../../styles/StyledToast";

const schema = z.object({
  email: z
    .string()
    .email("Insira um email válido.")
    .nonempty("O email é obrigatório."),
  password: z.string().nonempty("Campo obrigatório"),
});

function LoginPage() {
  const methods = useForm({
    resolver: zodResolver(schema),
  });
  const { updateData } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      toast.success("Login realizado com sucesso!", {
        autoClose: 700,
      });
      updateData(response.data.user);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@TOKEN", response.data.token);

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } catch {
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
      <StyledHeaderLogin>
        <img src="/Logologin.svg" alt="logo" />
      </StyledHeaderLogin>
      <StyledToast />
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
    </StyledMainLogin>
  );
}

export default LoginPage;