import { AiFillStar } from "react-icons/ai";
import { TagKnowledge } from "./components/TagKnowledge";
import * as S from "./styles";
import { Props } from "./typings";

export function ProfileCardEmployee({
  img,
  price,
  course,
  profileName,
  jobs,
  studying,
}: Props) {
  return (
    <>
      <S.Wrapper>
        <S.ImageWrapper>
          <S.ProfileImage src={img} />
          <S.Price>R$ {price}</S.Price>
        </S.ImageWrapper>
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
          <S.Line />
          <S.Course>{jobs}</S.Course>
          <S.InfoTitle>Trabalhos Realizados</S.InfoTitle>
        </S.InfoContainer>
        <S.Line />
        <S.InfoContainer>
          <S.InfoTitle>Conhecimentos</S.InfoTitle>
          <S.TagsContainer>
            <TagKnowledge>Banana</TagKnowledge>
            <TagKnowledge>Banana</TagKnowledge>
            <TagKnowledge>Banana</TagKnowledge>
            <TagKnowledge>Banana</TagKnowledge>
          </S.TagsContainer>
        </S.InfoContainer>
        <S.Line />
        <S.InfoContainer>
          <S.InfoTitle>{studying}</S.InfoTitle>
        </S.InfoContainer>
      </S.Wrapper>
      <S.Footer>
        <S.ButtonSee>Ver Mais</S.ButtonSee>
        <S.ButtonStart>Iniciar</S.ButtonStart>
      </S.Footer>
    </>
  );
}
