import { GetServerSidePropsContext } from "next";
import Router from "next/router";

import { ProfileCardEmployee } from "@/components";
import * as S from "./styles";
import { useProposals } from "@/hooks";
import { ProposalProps } from "./typings";

function Proposals({ jobId }: ProposalProps) {
  const proposals = useProposals(jobId);

  return (
    <S.Wrapper>
      <S.BackButton onClick={Router.back}>Voltar</S.BackButton>
      <S.Title>Propostas Recebidas</S.Title>
      <S.Container>
        <ProfileCardEmployee
          course="Direito"
          img="/images/redatorpicture.png"
          jobs={10}
          price={100}
          profileName="Joao Lobo"
          studying="1 Periodo"
        />
      </S.Container>
    </S.Wrapper>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { jobId } = context.query;

  return {
    props: { jobId },
  };
}

export default Proposals;
