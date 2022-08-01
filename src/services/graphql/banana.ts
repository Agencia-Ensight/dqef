import { gql } from "@apollo/client";

export const INSERT_JOB = gql`
mutation MyMutation {
    insert_jobs_one(object: {date_limit: "", delivery: "", higher_course: {data: {}}, higher_course_id: 10, instructions: "", job_format_id: 10, job_status_id: 10, job_type_id: 10, max_pages: 10, maximum_plagiarism: "", obs: "", pages: 10, theme: "", title: "", updated_at: "", user_id: "", value: 1.5, value_pay: 1.5, words: 10})
  }  
`