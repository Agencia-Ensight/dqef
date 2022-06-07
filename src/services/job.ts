import { gql } from "@apollo/client";
import { apolloClient, axiosClient } from "./api";

export async function getJobs(token: string) {
  const { data } = await axiosClient.post("/jobs", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}

export interface IJob {
  id: string;
  title: string;
  theme: string;
  value_pay: number;
  delivery: string;
  job_has_knowledges: { knowledge: { name: string } }[];
  job_format: {
    name: string;
  };
}

export const getUrgentJobs = async (): Promise<IJob[]> => {
  const result = await apolloClient.query({
    query: gql`
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
    `,
  });

  return result.data.jobs;
};
