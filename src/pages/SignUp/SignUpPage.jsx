import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import StyledDivContent from "./components/StyledDivContent";
import StyledMain from "./components/StyledMain";
import StyledHeader from "./components/StyledHeader";
import StyledSelect from "./components/StyledSelect";
import StyledButton from "./components/StyledButton";
import StyledLink from "../../styles/StyledLink";
import { api } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { StyledToast } from "../../styles/StyledToast";

const schema = z
  .object({
    name: z.string().nonempty("O nome é obrigatório."),
    email: z
      .string()
      .email("Insira um email válido.")
      .nonempty("O email é obrigatório."),
    password: z
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/\d/, "A senha deve conter pelo menos um número")
      .regex(
        /[@$!%*?&[#{}()[\]]/,
        "A senha deve conter pelo menos um caractere especial"
      ),
    confirm: z.string().min(1, "Confirmar a senha é obrigatório"),
    bio: z.string().nonempty("Campo Obrigatório"),
    contact: z.string().nonempty("Campo obrigatório"),
    course_module: z.string().nonempty("Campo obrigatório"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "As senhas não coincidem",
    path: ["confirm"],
  });
function SignUpPage() {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate("/");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/users", data);
      console.log(response.data);
      toast.success("Conta criada com sucesso", {
        autoClose: 700,
      });
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
