import React from "react";
import {
  AiFillStar,
  AiOutlineEdit,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import { FaPuzzlePiece } from "react-icons/fa";

import * as S from "./styles";
import { Props } from "./typings";

export function ProfileCard({ img, profileName, course }: Props) {
  return (
    <S.Wrapper>
      <S.ProfileImage src={img} />
      <S.Course>{course}</S.Course>
      <S.ProfileName>{profileName}</S.ProfileName>
      <S.RatingContainer>
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} />
      </S.RatingContainer>
      <S.InfoContainer>
        <FaPuzzlePiece size={20} color="#42A4EF" />
        <S.InfoTitle>Propostas Enviadas</S.InfoTitle>
      </S.InfoContainer>
      <S.Line />
      <S.InfoContainer>
        <AiOutlineEdit size={20} color="#42A4EF" />
        <S.InfoTitle>Trabalhos em Andamento</S.InfoTitle>
      </S.InfoContainer>
      <S.Line />
      <S.InfoContainer>
        <AiOutlineCheckSquare size={20} color="#42A4EF" />
        <S.InfoTitle>Trabalhos Finalizados</S.InfoTitle>
      </S.InfoContainer>
    </S.Wrapper>
  );
}
