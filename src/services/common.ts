import { gql } from "@apollo/client";
import { apolloClient, axiosClient } from "./api";

export const uploadJobAttachment = async (
  token: string,
  jobId: string,
  file: File
): Promise<boolean> => {
  const payload = new FormData();
  payload.append("file", file);
  const response = await axiosClient.put(
    `/jobs/my/${jobId}/attachment`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return true;
};

export interface IFormation {
  id: number;
  name: string;
}

export const getFormations = async (): Promise<IFormation[]> => {
  const result = await apolloClient.query({
    query: gql`
      query {
        formations {
          id
          name
        }
      }
    `,
  });
  return result.data.formations;
};

export interface IKnowledge {
  id: number;
  name: string;
}

export const getKnowledges = async (): Promise<IKnowledge[]> => {
  const result = await apolloClient.query({
    query: gql``,
  });
  return result.data.knowledges;
};

export const func = async () => {};
