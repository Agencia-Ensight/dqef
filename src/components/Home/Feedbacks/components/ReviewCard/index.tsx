import { AiFillStar } from "react-icons/ai";

import * as S from "./styles";

import { Props } from "./typings";

export function ReviewCard({ img, description, profileName }: Props) {
  return (
    <S.Wrapper>
      <S.ProfileImage src={img} />
      <S.ProfileName>{profileName}</S.ProfileName>
      <S.RatingContainer>
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} />
      </S.RatingContainer>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
