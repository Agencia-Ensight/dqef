import React from "react";
import {
  AiFillStar,
  AiOutlineEdit,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import { FaPuzzlePiece } from "react-icons/fa";

import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./styles";
import { Props } from "./typings";

export function ProfileCard({ img, profileName, course }: Props) {
  const router = useRouter();
  const isActivePublished = router.asPath === "/profilestudentpublishedjobs";
  const isActiveRunning = router.asPath === "/profilestudentrunningjobs";
  const isActiveDone = router.asPath === "/profilestudentfinishedjobs";

  return (
    <S.MainWrapper>
      <S.Wrapper>
        <S.ProfileImage src={img} />
        <S.Course>{course}</S.Course>
        <S.ProfileName>{profileName}</S.ProfileName>
        <S.MainInfo>
          <S.InfoContainer>
            <FaPuzzlePiece size={20} color="#42A4EF" />
            <Link href="/profilestudentpublishedjobs" passHref>
              <S.InfoTitle className={`${isActivePublished && "selected"}`}>
                Trabalhos Publicados
              </S.InfoTitle>
            </Link>
          </S.InfoContainer>
          <S.Line />
          <S.InfoContainer>
            <AiOutlineEdit size={20} color="#42A4EF" />
            <Link href="/profilestudentrunningjobs" passHref>
              <S.InfoTitle className={`${isActiveRunning && "selected"}`}>
                Trabalhos em Andamento
              </S.InfoTitle>
            </Link>
          </S.InfoContainer>
          <S.Line />
          <S.InfoContainer>
            <AiOutlineCheckSquare size={20} color="#42A4EF" />
            <Link href="/profilestudentfinishedjobs" passHref>
              <S.InfoTitle className={`${isActiveDone && "selected"}`}>
                Trabalhos Finalizados
              </S.InfoTitle>
            </Link>
          </S.InfoContainer>
        </S.MainInfo>
      </S.Wrapper>
      <S.MobileContainer>
        <S.InfoContainer>
          <FaPuzzlePiece size={20} color="#42A4EF" />
          <Link href="/profilestudentpublishedjobs" passHref>
            <S.InfoTitle className={`${isActivePublished && "selected"}`}>
              Trabalhos Publicados
            </S.InfoTitle>
          </Link>
        </S.InfoContainer>
        <S.Line />
        <S.InfoContainer>
          <AiOutlineEdit size={20} color="#42A4EF" />
          <Link href="/profilestudentrunningjobs" passHref>
            <S.InfoTitle className={`${isActiveRunning && "selected"}`}>
              Trabalhos em Andamento
            </S.InfoTitle>
          </Link>
        </S.InfoContainer>
        <S.Line />
        <S.InfoContainer>
          <AiOutlineCheckSquare size={20} color="#42A4EF" />
          <Link href="/profilestudentfinishedjobs" passHref>
            <S.InfoTitle className={`${isActiveDone && "selected"}`}>
              Trabalhos Finalizados
            </S.InfoTitle>
          </Link>
        </S.InfoContainer>
      </S.MobileContainer>
    </S.MainWrapper>
  );
}
