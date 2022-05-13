import { AllJobs } from "../components/jobs/AllJobs";
import * as S from "./styles";

function allWorks() {
  return (
    <S.Wrapper>
      <S.SubTitle>PADRÃO</S.SubTitle>
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
