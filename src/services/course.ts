import { gql } from "@apollo/client";
import { apolloClient } from "./api";

export interface ICourse {
  id: number;
  name: string;
}

export const getCourses = async (): Promise<ICourse[]> => {
  const result = await apolloClient.query({
    query: gql`
      query {
        higher_courses {
          id
          name
        }
      }
    `,
  });
  return result.data.higher_courses;
};
