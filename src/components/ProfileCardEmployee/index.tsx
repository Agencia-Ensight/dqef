import { useModal } from "@/contexts";
import { AiFillStar } from "react-icons/ai";
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
}: Props) {
  const { open } = useModal();

  const formatPrice = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  function handleStartJob() {
    open("Calma lá!", {
      content: () => <ModalPayment price={formatPrice} proposalId={id} />,
    });
  }

  return (
    <div>
      <S.Wrapper>
        <S.ImageWrapper>
          <S.ProfileImage src={img} />
          <S.Price>{formatPrice}</S.Price>
        </S.ImageWrapper>
        <S.Course>{course}</S.Course>
        <S.ProfileName>{profileName}</S.ProfileName>
        <S.RatingContainer>
          {new Array(avgRating).fill(0).map((_, index) => (
            <AiFillStar
              size={20}
              color={index < avgRating ? "#ffb200" : undefined}
            />
          ))}
        </S.RatingContainer>
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
