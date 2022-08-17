import { GetServerSidePropsContext } from "next";
import Router from "next/router";

import { ProfileCardEmployee } from "@/components";
import * as S from "./styles";
import { useProposals } from "@/hooks";
import { ProposalProps } from "./typings";

function Proposals({ id }: ProposalProps) {
  const proposals = useProposals(id);

  return (
    <S.Wrapper>
      <S.BackButton onClick={Router.back}>Voltar</S.BackButton>
      <S.Title>Propostas Recebidas</S.Title>
      <S.Container>
        {proposals.data?.map((proposal) => (
          <ProfileCardEmployee
            course={proposal.user.higherCourse}
            img={proposal.user.avatar || "/images/deal-done.png"}
            avgRating={proposal.user.avgRating}
            price={proposal.price}
            profileName={proposal.user.name}
            studying={proposal.user.formation}
          />
        ))}
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

export default Proposals;
