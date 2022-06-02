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

export interface IGetUrgentJobs {
  id: string;
  delivery: string;
  higher_course: {name : string};
  title: string;
  job_has_knowledges: {knowledge: {
    name: string;
  }}[];
  value_pay: number;
  job_formats: { name: string}[];
}

export const getUrgentJobs = async (): Promise<IGetUrgentJobs[]> => {
  const result = await apolloClient.query({
    query: gql`
     query {
      jobs {
        id
        delivery
        higher_course {
          name
        }
        title
        job_has_knowledges {
          knowledge {
            name
          }
        }
        value_pay
      }
      job_formats {
        name
      }
    }
    `
  })
  return result.data.jobs;
}