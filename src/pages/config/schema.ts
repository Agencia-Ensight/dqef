import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string(),
    phone: yup.string(),
    cpf: yup.string().min(11).max(11),
    formation: yup.string(),
    course: yup.string(),
    college: yup.string(),
    password: yup.string(),
    passwordConfirmation: yup.string(),
  })
  .required();

export { schema };
