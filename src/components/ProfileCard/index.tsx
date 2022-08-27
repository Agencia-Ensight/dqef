import { useUser } from "@/contexts";
import {
  AiFillStar,
  AiOutlineEdit,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import { HiOutlinePuzzle } from "react-icons/hi";

import * as S from "./styles";
import { EditorMenuProps, Props } from "./typings";

function ProfileCard({
  img,
  profileName,
  course,
  variant,
  onChangeMenu,
}: Props) {
  const { user } = useUser();
  function handleMenuEditorChange(menu: EditorMenuProps) {
    onChangeMenu(menu);
  }

  return (
    <S.MainWrapper>
      <S.Wrapper>
        <S.ProfileImage src={img} />
        <S.Course>{course}</S.Course>
        <S.ProfileName>{profileName}</S.ProfileName>
        {user?.type === "EDITOR" && (
          <S.RatingContainer>
            <AiFillStar size={20} color="#ffb200" />
            <AiFillStar size={20} color="#ffb200" />
            <AiFillStar size={20} color="#ffb200" />
            <AiFillStar size={20} color="#ffb200" />
            <AiFillStar size={20} color="#ffb200" />
            <S.RatingNumber>5.0</S.RatingNumber>
          </S.RatingContainer>
        )}
        <S.MainInfo>
          <S.InfoContainer>
            <HiOutlinePuzzle size={20} color="#42A4EF" />
            {user?.type === "STUDENT" && (
              <S.InfoTitle onClick={() => handleMenuEditorChange("proposals")}>
                Trabalhos Publicados
              </S.InfoTitle>
            )}
            {user?.type === "EDITOR" && (
              <S.InfoTitle onClick={() => handleMenuEditorChange("proposals")}>
                Propostas enviadas
              </S.InfoTitle>
            )}
          </S.InfoContainer>
          <S.Line />
          <S.InfoContainer>
            <AiOutlineEdit size={20} color="#42A4EF" />
            <S.InfoTitle onClick={() => handleMenuEditorChange("jobsOnGoing")}>
              Trabalhos em Andamento
            </S.InfoTitle>
          </S.InfoContainer>
          <S.Line />
          <S.InfoContainer>
            <AiOutlineCheckSquare size={20} color="#42A4EF" />
            <S.InfoTitle onClick={() => handleMenuEditorChange("jobsDone")}>
              Trabalhos Finalizados
            </S.InfoTitle>
          </S.InfoContainer>
        </S.MainInfo>
      </S.Wrapper>
      <S.MobileContainer>
        <S.InfoContainer>
          <HiOutlinePuzzle size={20} color="#42A4EF" />
          {variant === "STUDENT" && (
            <S.InfoTitle onClick={() => handleMenuEditorChange("proposals")}>
              Trabalhos Publicados
            </S.InfoTitle>
          )}
          {variant === "EMPLOYEE" && (
            <S.InfoTitle onClick={() => handleMenuEditorChange("proposals")}>
              Propostas enviadas
            </S.InfoTitle>
          )}
        </S.InfoContainer>
        <S.Line />
        <S.InfoContainer>
          <AiOutlineEdit size={20} color="#42A4EF" />
          <S.InfoTitle onClick={() => handleMenuEditorChange("jobsOnGoing")}>
            Trabalhos em Andamento
          </S.InfoTitle>
        </S.InfoContainer>
        <S.Line />
        <S.InfoContainer>
          <AiOutlineCheckSquare size={20} color="#42A4EF" />
          <S.InfoTitle onClick={() => handleMenuEditorChange("jobsDone")}>
            Trabalhos Finalizados
          </S.InfoTitle>
        </S.InfoContainer>
      </S.MobileContainer>
    </S.MainWrapper>
  );
}

export { ProfileCard };
