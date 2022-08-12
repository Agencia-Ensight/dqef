import { GetServerSidePropsContext } from "next";
import ScrollContainer from "react-indiana-drag-scroll";

import * as S from "./styles";
import { IInsideJob } from "./typings";
import { JobCard } from "@/components";
import { InfoCard } from "./components/InfoCard";
import { FileCard } from "./components/FileCard";
import { useJob } from "@/hooks";

function InsideJob({ id }: IInsideJob) {
  const job = useJob(id);

  if (job.isLoading) return <h1>Carregando...</h1>;

  if (job.error) return <h1>Erro!</h1>;

  if (!job.data) return <h1>Não encontrado!</h1>;

  return (
    <S.Wrapper>
      <S.JobContainer>
        <JobCard
          key={job.data.id}
          {...job.data}
          type="student" // TODO: check how to do this
          status="finished" // TODO: check how to do this
          discipline={job.data.discipline.name}
          typeOfWork={job.data.typeOfWork.name}
        />
      </S.JobContainer>
      <S.Container>
        <InfoCard
          title={job.data.title}
          pages={job.data.pages}
          plagiarism={job.data.maximumPlagiarism}
          format={job.data.format.name}
          description={job.data.instructions}
          observations={job.data.obs}
        />
        <ScrollContainer horizontal hideScrollbars className="files-container">
          {job.data.medias.map((media) => (
            <FileCard key={media.id} title={media.title} />
          ))}
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
