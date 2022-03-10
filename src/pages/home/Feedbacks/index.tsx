import { ReviewCard } from "./components/ReviewCard";
import * as S from "./styles";

export function Feedbacks() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Feedbacks</S.Title>
        <S.SubTitle>Veja o que estão falando da Deixa Que Eu Faço</S.SubTitle>
        <S.MainContainer>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </S.MainContainer>
      </S.Container>
    </S.Wrapper>
  );
}
