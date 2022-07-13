import { gql } from "@apollo/client";
import { apolloClient } from "./api";

export interface IJobFormat {
    id: number;
    name: string;
}

export const getJobFormat = async (): Promise<IJobFormat[]> => {
    const result = await apolloClient.query({
      query: gql`
        query {
            job_format {
                name
                id
            }
        }
      `,
    });
    return result.data.job_format;
  };