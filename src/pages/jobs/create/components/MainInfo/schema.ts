import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required(),
    theme: yup.string().required(),
    pages: yup.number().required(),
    words: yup.number().required(),
    instructions: yup.string().required(),
    // job_format_id: yup.number().required(),
    higher_course_id: yup.number().required(),
    // job_knowledge_id: yup.number().required(),

  })
  .required();

export { schema };