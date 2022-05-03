import { ButtonKnewave } from "../../../components/ButtonKnewave";
import { UrgentWorkCard } from "../../../components/UrgentWorkCard";
import * as S from "./styles";

export function UrgentWorks() {
  return (
    <S.Wrapper>
      <S.SubTitle>IMPORTANTE</S.SubTitle>
      <S.Title>Trabalhos Urgentes</S.Title>
      <S.HeaderContainer>
        <S.Description>
          Atividades com menos de 48h para a entrega final. Somente redatores
          premium possuem permissão para realizar.
        </S.Description>
      </S.HeaderContainer>
      <S.MainContainer>
        <UrgentWorkCard
          course="ARQUITETURA"
          date="23/04 às 17h"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={true}
          status="EMPLOYEE-SEE"
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04 às 17h"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={true}
          status="EMPLOYEE-SEE"
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04 às 17h"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={true}
          status="EMPLOYEE-SEE"
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04 às 17h"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={true}
          status="EMPLOYEE-SEE"
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04 às 17h"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={true}
          status="EMPLOYEE-SEE"
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04 às 17h"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={true}
          status="EMPLOYEE-SEE"
        />
      </S.MainContainer>
      <S.ButtonContainer>
        <ButtonKnewave variant="PRIMARY" size="lg">
          <a href="/urgent-works">Ver Todos</a>
        </ButtonKnewave>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
