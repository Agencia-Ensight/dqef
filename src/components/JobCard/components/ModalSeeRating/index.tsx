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
        {new Array(5).fill(0).map((_, index) => (
          <AiFillStar
            size={35}
            color={index < rating ? "#ffb200" : undefined}
          />
        ))}
      </S.Description>

      <S.TextInformation>
        <p>{obs}</p>
      </S.TextInformation>
    </>
  );
}
