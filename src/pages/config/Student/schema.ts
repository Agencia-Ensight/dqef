import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string(),
    email: yup.string().email("E-mail obrigatório"),
    phone: yup.string(),
    cpf: yup.string().min(11, "CPF inválido").max(11, "CPF inválido"),
    courseId: yup.number().positive(),
    collegeId: yup.number().positive(),
  })
  .required();

export { schema };
