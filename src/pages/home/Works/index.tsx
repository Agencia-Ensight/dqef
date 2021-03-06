import { ButtonKnewave } from "../../../components/ButtonKnewave";
import { AllJobs } from "../../components/jobs/AllJobs";

import * as S from "./styles";

export function Works() {
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
      <S.ButtonContainer>
        <ButtonKnewave size="lg" variant="PRIMARY">
          <a href="/all-works">Ver Todos</a>
        </ButtonKnewave>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
