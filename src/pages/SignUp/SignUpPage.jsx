import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import StyledLink from "../../styles/StyledLink";
import api from "../../services/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledToast } from "../../styles/StyledToast";
import StyledDivContent from "../../components/signUpComponents/StyledDivContent";
import StyledMain from "../../components/signUpComponents/StyledMain";
import StyledHeader from "../../components/signUpComponents/StyledHeader";
import StyledSelect from "../../components/signUpComponents/StyledSelect";
import StyledButton from "../../components/signUpComponents/StyledButton";
import { UserContext } from "../../providers/UserContext/UserContext";
import { schema } from "../../schema/schema";

function SignUpPage() {
  const methods = useForm({
    resolver: zodResolver(schema),
  });
  const { updateData } = useContext(UserContext);
  const navigate = useNavigate("/");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      toast.success("Conta criada com sucesso", {
        autoClose: 700,
      });
      updateData(data);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Ops! Algo deu errado", {
        autoClose: 700,
      });
    }
  };

  return (
    <StyledMain>
      <StyledHeader>
        <div>
          <img src="/Logo.svg" alt="logo" />
          <StyledLink to={"/"}>Voltar</StyledLink>
        </div>
      </StyledHeader>
      <StyledToast />
      <StyledDivContent>
        <h2>Crie sua conta</h2>
        <h3>Rápido e grátis, vamos nessa</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <label>E-mail:</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div>
            <label>Confirmar senha:</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirm")}
            />
            {errors.confirm && <p>{errors.confirm.message}</p>}
          </div>
          <div>
            <label>Bio:</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio && <p>{errors.bio.message}</p>}
          </div>
          <div>
            <label>Contato:</label>
            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            {errors.contact && <p>{errors.contact.message}</p>}
            <label>Selecionar módulo</label>
          </div>
          <StyledSelect>
            <select
              name="course_module"
              id="course_module"
              {...register("course_module")}
            >
              <option value="">Selecione o módulo do curso</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
          </StyledSelect>
          <StyledButton type="submit">Cadastrar</StyledButton>
        </form>
      </StyledDivContent>
    </StyledMain>
  );
}

export default SignUpPage;
