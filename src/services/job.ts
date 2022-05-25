import { axiosClient } from "./api";

export async function getJobs(token: string) {
  const { data } = await axiosClient.post("/jobs", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}
