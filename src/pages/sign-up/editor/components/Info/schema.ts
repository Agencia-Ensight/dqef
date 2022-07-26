import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Insira um e-mail válido")
      .required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
    cpf: yup
      .string()
      .min(11, "Insira um CPF válido")
      .max(11, "Insira um CPF válido")
      .required(),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha é obrigatória"),
    phone: yup.string().required("Telefone é obrigatório"),
  })
  .required();

export { schema };
