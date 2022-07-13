import { gql } from "@apollo/client";

export type Job = {
  id: string;
  title: string;
  theme: string;
  value_pay: number;
  delivery: string;
  job_has_knowledges: { knowledge: { name: string } }[];
  job_format: {
    name: string;
  };
};

export const GET_URGENT_JOBS = gql`
  query {
    jobs {
      id
      title
      theme
      value_pay
      delivery
      job_has_knowledges {
        knowledge {
          name
        }
      }
      job_format {
        name
      }
    }
  }
`;
