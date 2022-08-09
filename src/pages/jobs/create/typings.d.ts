type CreateJobProps = {
  higher_course_id: number;
  job_status_id: number;
  job_type_id: number;
  title: string;
  value: number;
  value_pay: number;
  date_limit: Date;
  delivery: Date;
  theme: string;
  knowledge_id: number;
  user_id: number;
  pages: number;
  words: number;
  instructions: string;
  job_format_id: number;
  obs: string;
  maximum_plagiarism: string;
};

export { CreateJobProps };
