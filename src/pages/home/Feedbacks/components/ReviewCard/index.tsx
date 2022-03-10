import * as S from "./styles";

import { AiFillStar } from "react-icons/ai";

export function ReviewCard() {
  return (
    <S.Wrapper>
      <S.ProfileImage src="/images/profile-img.png" />
      <S.ProfileName>Bruno Vencato</S.ProfileName>
      <S.RatingContainer>
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} />
      </S.RatingContainer>
      <S.Description>
        Trabalho entregue de maneira muito rápido, tirei 10! Um ótimo redator.
      </S.Description>
    </S.Wrapper>
  );
}
