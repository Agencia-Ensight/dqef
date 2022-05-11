import * as S from "./styles";

import { UrgentWorkCard } from "../../components/UrgentWorkCard";

function urgentWorks() {
  return (
    <S.Wrapper>
      <S.SubTitle>IMPORTANTE</S.SubTitle>
      <S.HeaderContainer>
        <div>
          <S.Title>Trabalhos Urgentes</S.Title>
          <S.Description>
            Atividades com menos de 48h para a entrega final. Somente redatores
            premium possuem permissão para realizar.
          </S.Description>
        </div>
      </S.HeaderContainer>
      <S.MainContainer>
        <UrgentWorkCard
          jobId="1"
          course="ARQUITETURA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={true}
          status="EMPLOYEE-SEE"
        />
        <UrgentWorkCard
          jobId="1"
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={true}
          status="EMPLOYEE-SEE"
        />
        <UrgentWorkCard
          jobId="1"
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={true}
          status="EMPLOYEE-SEE"
        />
        <UrgentWorkCard
          jobId="1"
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={true}
          status="EMPLOYEE-SEE"
        />
        <UrgentWorkCard
          jobId="1"
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={true}
          status="EMPLOYEE-SEE"
        />
        <UrgentWorkCard
          jobId="1"
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={true}
          status="EMPLOYEE-SEE"
        />
      </S.MainContainer>
    </S.Wrapper>
  );
}

export default urgentWorks;
function useState(arg0: string[]): [any, any] {
  throw new Error("Function not implemented.");
}
