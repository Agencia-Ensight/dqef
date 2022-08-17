import { GetServerSidePropsContext } from "next";
import ScrollContainer from "react-indiana-drag-scroll";

import * as S from "./styles";
import { IInsideJob } from "./typings";
import { JobCard } from "@/components";
import { InfoCard } from "./components/InfoCard";
import { FileCard } from "./components/FileCard";
import { useJob } from "@/hooks";
import { ensureAuth } from "@/hocs";
import { useUser } from "@/contexts";
import { CardStatus } from "@/components/JobCard/typings";

function InsideJob({ id }: IInsideJob) {
  const job = useJob(id);
  const { user } = useUser();

  if (job.isLoading) return <h1>Carregando...</h1>;

  if (job.error) return <h1>Erro!</h1>;

  if (!job.data) return <h1>Não encontrado!</h1>;

  return (
    <S.Wrapper>
      <S.JobContainer>
        <JobCard
          key={job.data.id}
          {...job.data}
          type={user!.type}
          status={job.data.status as unknown as CardStatus}
          typeOfWork={job.data.typeOfWork.name}
          knowledges={job.data.knowledges.map((job) => job.name)}
          totalProposals={0}
          totalChanges={0}
          wasEvaluated={false}
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

export default ensureAuth(InsideJob);
