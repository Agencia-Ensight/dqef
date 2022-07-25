import { useMemo } from "react";
import { GetServerSidePropsContext } from "next";
import { useQuery } from "@apollo/client";
import ScrollContainer from "react-indiana-drag-scroll";

import * as S from "./styles";
import { IInsideJob } from "./typings";
import { JobCard } from "@/components";

import { GET_JOB, Job } from "@/services/graphql/jobs";
import { InfoCard } from "./components/InfoCard";
import { FileCard } from "./components/FileCard";

function InsideJob({ id }: IInsideJob) {
  const jobQuery = useQuery<{ jobs_by_pk: Job }>(GET_JOB, {
    variables: { id },
  });

  const job = useMemo(() => jobQuery.data?.jobs_by_pk, [jobQuery.data]);

  if (jobQuery.loading) return <h1>Carregando...</h1>;

  if (jobQuery.error) return <h1>Erro!</h1>;

  if (!job) return <h1>Não encontrado!</h1>;

  return (
    <S.Wrapper>
      <JobCard
        jobId={job.id}
        course="ECONOMIA" // higher_course_name TODO: Sincronizar com o banco de dados?
        date={job.delivery}
        discipline={job!.job_has_knowledges
          .map(({ knowledge: { name: knowledge_name } }) => knowledge_name)
          .join(", ")}
        price={job!.value_pay}
        theme={job!.theme}
        title={job!.title}
        typeOfWork={job!.job_type.name}
        urgent={false}
        status="STUDENT-EDIT" // TODO: Sincronizar com o banco de dados?
      />
      <S.Container>
        <InfoCard
          title={job.title}
          pages={job.pages}
          plagiarism={job.maximum_plagiarism}
          format={job.job_format.name}
          description={job.instructions}
          observations={job.obs}
        />
        <ScrollContainer horizontal hideScrollbars className="files-container">
          {job.job_has_medias.map(
            ({
              media: { id: media_id, title: media_name, link: media_url },
            }) => (
              <FileCard key={media_id} title={media_name} />
            )
          )}
        </ScrollContainer>
        {/* <FAQCard jobId={job.id} /> */}
      </S.Container>
    </S.Wrapper>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  return {
    props: { id },
  };
}

export default InsideJob;
