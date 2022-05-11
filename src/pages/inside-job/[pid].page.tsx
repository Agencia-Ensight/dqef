import { UrgentWorkCard } from "../../components/UrgentWorkCard";
import { FileCard } from "./components/FileCard";
import { InfoCard } from "./components/InfoCard";
import * as S from "./styles";

import ScrollContainer from "react-indiana-drag-scroll";
import { useQuery } from "@apollo/client";
import { Job, JobByPk, JOB_QUERY } from "../../queries/jobs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { apolloClient } from "../_app.page";
import { FAQCard } from "./components/FAQCard";

function insideJob() {
  const [job, setJob] = useState<Job | null>(null);
  const { query, isReady } = useRouter();

  useEffect(() => {
    if (isReady) {
      apolloClient.query({
        query: JOB_QUERY,
        variables: {
          id: query.pid
        }
      }).then(({ data }: { data: JobByPk }) => {
        console.log(data.jobs_by_pk);
        setJob(data.jobs_by_pk);
      })
    }
  }, [query, isReady]);

  if (!job) return null;

  return (
    <S.Wrapper>
      <UrgentWorkCard
        jobId={job.id}
        course="ECONOMIA" // higher_course_name TODO: Sincronizar com o banco de dados?
        date={job.delivery}
        discipline={job!.job_has_knowledges.map(({ knowledge: { name: knowledge_name } }) => knowledge_name).join(", ")}
        price={job!.value_pay}
        theme={job!.theme}
        title={job!.title}
        typeOfWork={job!.job_type.name}
        urgent={false} // TODO: Como pegar do banco de dados
        status="STUDENT-EDIT" // TODO: Sincronizar com o banco de dados?
      />
      <S.Container>
        <InfoCard
          title={job!.title}
          pages={job!.pages}
          plagiarism={job!.plagiarism}
          format={job!.job_format.name}
          description={job!.instructions}
          observations="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quam, quo culpa officia commodi, placeat eos voluptatem itaque fugit iste illo blanditiis numquam aperiam illum at sequi, cum distinctio odio!"
        />
        <ScrollContainer
          horizontal={true}
          hideScrollbars={true}
          className="files-container"
        >
          {job.job_has_medias.map(({ media: { id: media_id, title: media_name, link: media_url } }) => (
            <FileCard
              title={media_name}
              />
          ))}
        </ScrollContainer>
        <FAQCard jobId={job.id} />
      </S.Container>
    </S.Wrapper>
  );
}

export default insideJob;
