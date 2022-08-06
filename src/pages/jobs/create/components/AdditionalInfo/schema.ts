import * as yup from "yup";

const schema = yup
  .object({
    value: yup.string().required(),
    value_pay: yup.number(),
    job_format_id: yup.number().required(),
    obs: yup.number().required(),
    maximum_plagiarism: yup.number().required(),
  })
  .required();

export { schema };