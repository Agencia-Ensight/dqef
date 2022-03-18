import { UrgentWorkCard } from "../../components/UrgentWorkCard";
import * as S from "./styles";

function insideJob() {
  return (
    <S.Wrapper>
      <UrgentWorkCard
        course="MEDICINA"
        date="23/08"
        discipline="Direito Penal"
        price={65}
        theme="Teoria do Crime"
        title="Faz Meu Trabalho"
        typeOfWork="Banana"
        urgent={false}
      />
      <S.Container></S.Container>
    </S.Wrapper>
  );
}

export default insideJob;
