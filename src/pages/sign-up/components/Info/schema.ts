import * as yup from "yup";

const digitsOnly = (value?: string) => (!value ? true : /^\d+$/.test(value));

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
      .test(
        "Somente numeros",
        "O campo deve conter somente números",
        digitsOnly
      )
      .min(11, "Insira um CPF válido")
      .max(11, "Insira um CPF válido")
      .optional(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não conferem")
      .required("Confirmação de senha é obrigatória"),
    phone: yup
      .string()
      .test(
        "Somente numeros",
        "O campo deve conter somente números",
        digitsOnly
      )
      .required("Telefone é obrigatório com DDD")
      .min(11, "Telefone inválido (use o DDD)")
      .max(11, "Telefone inválido (use o DDD)"),
  })
  .required();

export { schema };
