import { useQuery } from "@apollo/client";

import { JobCard } from "@/components";
import { GET_TOP_10_JOBS, Job } from "@/services/graphql/jobs";

export const AllJobs = (): JSX.Element => {
  const { loading, error, data } = useQuery<{ jobs: Job[] }>(GET_TOP_10_JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data!.jobs.map((job) => (
        <JobCard
          jobId={job.id}
          course="ECONOMIA" // higher_course_name TODO: Sincronizar com o banco de dados?
          date={job.delivery}
          discipline={job.job_has_knowledges
            .map(({ knowledge: { name: knowledge_name } }) => knowledge_name)
            .join(", ")}
          price={job.value_pay}
          theme={job.theme}
          title={job.title}
          typeOfWork={job.job_type.name}
          urgent={false} // TODO:Como pegar do banco
          status="EMPLOYEE-SEE" // TODO: Sincronizar com o banco de dados?
        />
      ))}
    </>
  );
};
