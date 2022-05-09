import { useQuery } from "@apollo/client";
import { UrgentWorkCard } from "../../../../components/UrgentWorkCard";
import { JobData, JOBS_QUERY } from "../../../../queries/jobs";

export const AllJobs = (): JSX.Element => {
  const { loading, error, data } = useQuery<JobData>(JOBS_QUERY);


  if (loading) return <p>Loading...</p >;
  if (error) return <p>Error: {error.message}</p>;

  return <>
    {
      data!.jobs.map(({ id, value_pay, title, theme, job_type: { name: job_type_name }, higher_course: { name: higher_course_name }, delivery, job_has_knowledges }) => (
        <UrgentWorkCard
          jobId={id}
          course="ECONOMIA" // higher_course_name TODO: Sincronizar com o banco de dados?
          date={delivery}
          discipline={job_has_knowledges.map(({ knowledge: { name: knowledge_name } }) => knowledge_name).join(", ")}
          price={value_pay}
          theme={theme}
          title={title}
          typeOfWork={job_type_name}
          urgent={false} // TODO: Como pegar do banco de dados
          status="EMPLOYEE-SEE" // TODO: Sincronizar com o banco de dados?
        />
      ))
    }
  </>
}