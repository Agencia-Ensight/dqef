import { gql } from "@apollo/client";

export type Job = {
  id: number;
  date_limit: string
  higher_course: {
    name: string
  },
  job_status: {
    name: string
  },
  job_type: {
    name: string
  },
  theme: string
  title: string
  value_pay: number
  value: number
  delivery: string,
  job_has_knowledges: {
    knowledge: {
      name: string
    }
  }[]
};
export type JobData = {
  jobs: Job[]
};
export const JOBS_QUERY = gql`
  query JobsQuery {
    jobs {
      id
      date_limit
      delivery
      theme
      title
      value_pay
      value
      higher_course {
        name
      }
      job_status {
        name
      }
      job_type {
        name
      }
      job_has_knowledges {
        knowledge {
          name
        }
      }
    }
  }
`;