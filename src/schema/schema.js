import { z } from "zod";

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

const loginSchema = z.object({
  email: z
    .string()
    .email("Insira um email válido.")
    .nonempty("O email é obrigatório."),
  password: z.string().nonempty("Campo obrigatório"),
});

const newTechSchema = z.object({
  title: z.string().nonempty("O titulo é obrigatório."),
});

export { schema, loginSchema, newTechSchema };
