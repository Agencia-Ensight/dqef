import { AiFillStar } from "react-icons/ai";

import * as S from "./styles";
import { IModalSeeRating } from "./typings";

export function ModalSeeRating({ obs, rating }: IModalSeeRating) {
  return (
    <>
      <S.NerdImage>
        <img src="/images/deal-done.png" alt="" />
      </S.NerdImage>
      <S.Description>
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} color="#ffb200" />
        <AiFillStar size={20} />
        {rating}
      </S.Description>

      <S.TextInformation>
        <p>{obs}</p>
      </S.TextInformation>
    </>
  );
}
