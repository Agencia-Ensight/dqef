import { gql } from "@apollo/client";
import { apolloClient } from "./api";

export interface ICollege {
    id: number;
    name: string;
    sigla: string;
}

export const getColleges = async (): Promise<ICollege[]> => {
    const result = await apolloClient.query({
      query: gql`
        query {
            colleges {
             name
             id
             sigla
          }
        }
      `,
    });
    return result.data.colleges;
  };