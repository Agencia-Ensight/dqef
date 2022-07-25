import * as yup from "yup";

const schema = yup
  .object({
    higher_course_id: yup.number().required(),
    job_status_id: yup.number().required(),
    job_type_id: yup.number().required(),
    title: yup.string().required(),
    value: yup.number().required(),
    value_pay: yup.number().required(),
    date_limit: yup.date().required(),
    delivery: yup.date().required(),
    theme: yup.string().required(),
    knowledge_id: yup.number().required(),
    user_id: yup.string().uuid().required(),
    pages: yup.number().required(),
    words: yup.number().required(),
    instructions: yup.string().required(),
    job_format_id: yup.number().required(),
    obs: yup.string().required(),
    maximum_plagiarism: yup.string().required(),
  })
  .required();

export { schema };
