import { gql } from "@apollo/client";
import { apolloClient } from "./api";

export interface IJobFileFormat {
    id: number;
    name: string;
}

export const getJobFileFormat = async (): Promise<IJobFileFormat[]> => {
    const result = await apolloClient.query({
      query: gql`
        query {
            job_file_format {
                name
                id
            }
        }
      `,
    });
    return result.data.job_file_format;
  };