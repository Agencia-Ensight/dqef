import React from "react";
import {
  AiFillStar,
  AiOutlineEdit,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import { FaPuzzlePiece } from "react-icons/fa";
import { HiOutlinePuzzle } from "react-icons/hi";

import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./styles";
import { Props } from "./typings";

export function ProfileCard({ img, profileName, course, variant }: Props) {
  const router = useRouter();
  const isActivePublished = router.asPath === "/profilestudentpublishedjobs";
  const isActiveRunning = router.asPath === "/profilestudentrunningjobs";
  const isActiveDone = router.asPath === "/profilestudentfinishedjobs";

  const isActiveProposal = router.asPath === "/profileredatorsentproposal";
  const isActiveRunningEmployee =
    router.asPath === "/profileredatorrunningjobs";

  const isActiveDoneEmpleyee = router.asPath === "/profileredatorfinishedjobs";

  return (
    <S.MainWrapper>
      <S.Wrapper>
        <S.ProfileImage src={img} />
        <S.Course>{course}</S.Course>
        <S.ProfileName>{profileName}</S.ProfileName>
        {variant === "EMPLOYEE" && (
          <S.RatingContainer>
            <AiFillStar size={20} color="#ffb200" />
            <AiFillStar size={20} color="#ffb200" />
            <AiFillStar size={20} color="#ffb200" />
            <AiFillStar size={20} color="#ffb200" />
            <AiFillStar size={20} />
            <S.RatingNumber>4.0</S.RatingNumber>
          </S.RatingContainer>
        )}
        <S.MainInfo>
          <S.InfoContainer>
            <HiOutlinePuzzle size={20} color="#42A4EF" />
            {variant === "STUDENT" && (
              <Link href="/profilestudentpublishedjobs" passHref>
                <S.InfoTitle className={`${isActivePublished && "selected"}`}>
                  Trabalhos Publicados
                </S.InfoTitle>
              </Link>
            )}
            {variant === "EMPLOYEE" && (
              <Link href="/profileredatorsentproposal" passHref>
                <S.InfoTitle className={`${isActiveProposal && "selected"}`}>
                  Propostas enviadas
                </S.InfoTitle>
              </Link>
            )}
          </S.InfoContainer>
          <S.Line />
          <S.InfoContainer>
            <AiOutlineEdit size={20} color="#42A4EF" />
            {variant === "STUDENT" && (
              <Link href="/profilestudentrunningjobs" passHref>
                <S.InfoTitle className={`${isActiveRunning && "selected"}`}>
                  Trabalhos em Andamento
                </S.InfoTitle>
              </Link>
            )}
            {variant === "EMPLOYEE" && (
              <Link href="/profileredatorrunningjobs" passHref>
                <S.InfoTitle
                  className={`${isActiveRunningEmployee && "selected"}`}
                >
                  Trabalhos em Andamento
                </S.InfoTitle>
              </Link>
            )}
          </S.InfoContainer>
          <S.Line />
          <S.InfoContainer>
            <AiOutlineCheckSquare size={20} color="#42A4EF" />
            {variant === "STUDENT" && (
              <Link href="/profilestudentfinishedjobs" passHref>
                <S.InfoTitle className={`${isActiveDone && "selected"}`}>
                  Trabalhos Finalizados
                </S.InfoTitle>
              </Link>
            )}
            {variant === "EMPLOYEE" && (
              <Link href="/profileredatorfinishedjobs" passHref>
                <S.InfoTitle
                  className={`${isActiveDoneEmpleyee && "selected"}`}
                >
                  Trabalhos Finalizados
                </S.InfoTitle>
              </Link>
            )}
          </S.InfoContainer>
        </S.MainInfo>
      </S.Wrapper>
      <S.MobileContainer>
        <S.InfoContainer>
          <HiOutlinePuzzle size={20} color="#42A4EF" />
          {variant === "STUDENT" && (
            <Link href="/profilestudentpublishedjobs" passHref>
              <S.InfoTitle className={`${isActivePublished && "selected"}`}>
                Trabalhos Publicados
              </S.InfoTitle>
            </Link>
          )}
          {variant === "EMPLOYEE" && (
            <Link href="/profileredatorsentproposal" passHref>
              <S.InfoTitle className={`${isActiveProposal && "selected"}`}>
                Propostas enviadas
              </S.InfoTitle>
            </Link>
          )}
        </S.InfoContainer>
        <S.Line />
        <S.InfoContainer>
          <AiOutlineEdit size={20} color="#42A4EF" />
          {variant === "STUDENT" && (
            <Link href="/profilestudentrunningjobs" passHref>
              <S.InfoTitle className={`${isActiveRunning && "selected"}`}>
                Trabalhos em Andamento
              </S.InfoTitle>
            </Link>
          )}
          {variant === "EMPLOYEE" && (
            <Link href="/profileredatorrunningjobs" passHref>
              <S.InfoTitle
                className={`${isActiveRunningEmployee && "selected"}`}
              >
                Trabalhos em Andamento
              </S.InfoTitle>
            </Link>
          )}
        </S.InfoContainer>
        <S.Line />
        <S.InfoContainer>
          <AiOutlineCheckSquare size={20} color="#42A4EF" />
          {variant === "STUDENT" && (
            <Link href="/profilestudentfinishedjobs" passHref>
              <S.InfoTitle className={`${isActiveDone && "selected"}`}>
                Trabalhos Finalizados
              </S.InfoTitle>
            </Link>
          )}
          {variant === "EMPLOYEE" && (
            <Link href="/profileredatorfinishedjobs" passHref>
              <S.InfoTitle className={`${isActiveDoneEmpleyee && "selected"}`}>
                Trabalhos Finalizados
              </S.InfoTitle>
            </Link>
          )}
        </S.InfoContainer>
      </S.MobileContainer>
    </S.MainWrapper>
  );
}
