import { AllJobs } from "../../../WILL_BE_REMOVED/components/jobs/AllJobs";
import * as S from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";

function allWorks() {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.SubTitle onClick={() => router.back()}>Voltar</S.SubTitle>
      <S.Title>Lista de Trabalhos</S.Title>
      <S.HeaderContainer>
        <S.Description>
          Se liga nas ofertas incríveis que estão disponíveis para você realizar
          e tirar uma grana extra!
        </S.Description>
      </S.HeaderContainer>
      <S.MainContainer>
        <AllJobs />
      </S.MainContainer>
    </S.Wrapper>
  );
}

export default allWorks;
