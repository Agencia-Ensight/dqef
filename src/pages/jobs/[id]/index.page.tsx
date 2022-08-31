import { GetServerSidePropsContext } from "next";
import ScrollContainer from "react-indiana-drag-scroll";

import * as S from "./styles";
import { IInsideJob } from "./typings";
import { JobCard, Loading } from "@/components";
import { InfoCard } from "./components/InfoCard";
import { FileCard } from "./components/FileCard";
import { useJob } from "@/hooks";

function InsideJob({ id }: IInsideJob) {
  const job = useJob(id);

  if (job.isLoading) return <Loading size={25} />;

  if (job.error) return <h1>Erro!</h1>;

  if (!job.data) return <h1>Não encontrado!</h1>;

  return (
    <S.Wrapper>
      <S.JobContainer>
        <JobCard
          {...job.data}
          totalProposals={job.data.proposals.length}
          totalChanges={0}
          wasEvaluated={!!job.data.rating}
          urgent
          mediaType={job.data.mediaType.name}
          knowledges={job.data.knowledges.map((knowledge) => knowledge.name)}
          course={job.data.higherCourse.name}
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
            <FileCard key={media.id} {...media} />
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
