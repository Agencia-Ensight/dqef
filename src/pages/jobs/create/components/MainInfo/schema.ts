import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required(),
    theme: yup.string().required(),
    pages: yup.number().required(),
    words: yup.number().required(),
    instructions: yup.string().required(),
  })
  .required();

export { schema };