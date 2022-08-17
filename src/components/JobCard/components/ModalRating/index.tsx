import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

import { useMedia, useReview } from "@/hooks";
import { ButtonKnewave } from "@/components";
import * as S from "./styles";
import { useToast, useModal } from "@/contexts";

type IStar = 1 | 2 | 3 | 4 | 5;

type IModalRating = {
  jobId: string;
  editorId: string;
};

export function ModalRating({ jobId, editorId }: IModalRating) {
  const [stars, setStars] = useState<IStar>(1);
  const [testimonial, setTestimonial] = useState("");
  const isMobile = useMedia("(max-width:600px)");
  const { close } = useModal();
  const { sendReview } = useReview();
  const { addToast } = useToast();

  function handleReview() {
    try {
      sendReview({ jobId, review: stars, testimonial, editorId });
      close();
      addToast({
        type: "success",
        msg: "A avaliação foi enviada com sucesso!",
      });
    } catch (err) {
      addToast({
        type: "error",
        msg: "Não foi possível enviar sua avaliação, tente novamente mais tarde",
      });
    }
  }

  return (
    <>
      <S.TextInformation>
        <p>
          Visando o controle de qualidade de nossos redatores, gostaríamos de
          saber como foi seu desempenho na atividade 328, realizada conosco!! A
          nota foi positiva?
        </p>
      </S.TextInformation>

      <S.InputText
        placeholder="Digite uma observação..."
        value={testimonial}
        onChange={(e) => setTestimonial(e.target.value)}
      />

      <S.Description>
        {new Array(5).fill(0).map((_, index) => (
          <AiFillStar
            size={35}
            onClick={() => setStars((index + 1) as IStar)}
            color={index < stars ? "#ffb200" : undefined}
          />
        ))}
      </S.Description>

      <S.ButtonFinaleira>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="PRIMARY"
          onClick={handleReview}
        >
          Enviar
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
