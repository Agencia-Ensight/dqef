import { useModal } from "@/contexts";
import { TiStarFullOutline } from "react-icons/ti";
import { ModalPayment } from "./components/ModalPayment";

import { TagKnowledge } from "./components/TagKnowledge";

import * as S from "./styles";
import { Props } from "./typings";

function ProfileCardEmployee({
  id,
  img,
  price,
  course,
  profileName,
  avgRating,
  studying,
  userId,
  jobId,
}: Props) {
  const { open } = useModal();

  const formatPrice = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  function handleStartJob() {
    open("Calma lá!", {
      content: () => (
        <ModalPayment
          price={formatPrice}
          proposalId={id}
          editorId={userId}
          jobId={jobId}
        />
      ),
    });
  }


  const arrayRating = [1,2,3,4,5]

  return (
    <div>
      <S.Wrapper>
        <S.ImageWrapper>
          <S.ProfileImage src={img} />
          <S.Price>{formatPrice}</S.Price>
        </S.ImageWrapper>
        <S.Course>{course}</S.Course>
        <S.ProfileName>{profileName}</S.ProfileName>
        <S.RatingWrapper>
        <S.RatingContainer>
          {arrayRating.map((_, index) => (
            <TiStarFullOutline
              size={20}
              color={index < Math.floor(avgRating) ? "#ffb200" : 'gray'}
            />
          ))}
        </S.RatingContainer>
        <span>{avgRating.toFixed(1)}</span>
        </S.RatingWrapper>
       
        {/* <S.InfoContainer>
          <S.Line />
          <S.Course>{avgRating} estrelas</S.Course>
          <S.InfoTitle>Média de reviews</S.InfoTitle>
        </S.InfoContainer> */}
        {/* <S.Line /> */}
        {/* <S.InfoContainer>
          <S.InfoTitle>Conhecimentos</S.InfoTitle>
          <S.TagsContainer>
            <TagKnowledge>Banana</TagKnowledge>
            <TagKnowledge>Banana</TagKnowledge>
            <TagKnowledge>Banana</TagKnowledge>
            <TagKnowledge>Banana</TagKnowledge>
          </S.TagsContainer>
        </S.InfoContainer> */}
        <S.Line />
        <S.InfoContainer>
          <S.InfoTitle>{studying}</S.InfoTitle>
        </S.InfoContainer>
      </S.Wrapper>
      <S.Footer>
        {/* <S.ButtonSee>Ver Mais</S.ButtonSee> */}
        <S.ButtonStart onClick={handleStartJob}>Iniciar</S.ButtonStart>
      </S.Footer>
    </div>
  );
}

export { ProfileCardEmployee };
