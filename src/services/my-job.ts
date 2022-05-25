import { axiosClient } from "./api";

interface IJob {
  job_type_id: number;
  job_status_id: number;
  job_format_id: number;
  higher_course_id: number;
  title: string;
  thema: string;
  instructions: string;
  value: number;
  value_pay: number;
  pages: number;
  max_pages: number;
  words: number;
  delivery: string; // "04-10-2022";
  date_limit: string; //"05-10-2022";
}

export async function getMyJobs(token: string) {
  const { data } = await axiosClient.post("/jobs/my", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}

export async function createMyJob(token: string, job: IJob) {
  const { data } = await axiosClient.post("/profile", job, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}

export async function editMyJob(token: string, job: IJob) {
  const { data } = await axiosClient.put("/profile", job, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}

export async function delMyJob(token: string, jobId: string) {
  const { data } = await axiosClient.delete(`/profile/${jobId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
}
