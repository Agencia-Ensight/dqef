import React, { useState } from "react";
import { format } from "date-fns";

import { ButtonKnewave } from "@/components";
import { useMedia, useJobDelivery } from "@/hooks";
import { useModal, useToast } from "@/contexts";
import * as S from "./styles";
import { IModalInfoDelivery } from "./typings";

export function ModalInfoDelivery({
  jobId,
  dateFirstCharge,
  dateSecondCharge,
  dateThirdCharge,
}: IModalInfoDelivery) {
  const [showMore, setShowMore] = useState(true);
  const isMobile = useMedia("(max-width:600px)");
  const { delivery } = useJobDelivery();
  const { close } = useModal();
  const { addToast } = useToast();

  async function onStartJob() {
    try {
      await delivery(jobId, "IN_PROGRESS");
      close();
      addToast({
        type: "success",
        msg: "Trabalho iniciado com sucesso!",
      });
    } catch (err) {
      addToast({
        type: "error",
        msg: "Aconteceu um erro ao inciar o trabalho, tente novamente mais tarde.",
      });
    }
  }

  function formatDate(date: Date) {
    format(date, "dd/MM 'às' HH'h'");
  }

  return (
    <>
      <S.Description>Infos para iniciar</S.Description>
      <S.List>
        1.Todos os detalhes sobre o trabalho estão disponíveis no seu painel de
        controle. Clique na foto da atividade para visualizar.
      </S.List>
      <S.List>
        2.Durante o período de execução vamos realizar algumas cobranças, para
        verificar o andamento do trabalho. No(s) dia(s){" "}
        {formatDate(dateFirstCharge)}, {formatDate(dateSecondCharge)} e{" "}
        {formatDate(dateThirdCharge)}, você será notificado para acessar seu
        painel de controle e nos atualizar sobre o andamento da atividade. Caso
        deixe de responder, o trabalho será cancelado e enviado ao próximo
        redator da lista de espera.
      </S.List>
      <S.List>
        3.A entrega deverá ser realizada através da nossa plataforma, pelo
        painel de controle, clicando em "Realizar Entrega" no trabalho em
        questão.
      </S.List>
      {!showMore ? (
        <S.List>
          4.Após a entrega, o estudante terá direito de solicitar algumas
          mudanças. Caso o mesmo solicite, você será notificado a ajustar com o
          tempo estipulado de reenvio.
        </S.List>
      ) : (
        ""
      )}

      <S.Button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Ler Mais" : "Aparecer Menos"}
      </S.Button>
      <S.ButtonContainer>
        <ButtonKnewave
          variant="PRIMARY"
          size={isMobile ? "sm" : "lg"}
          onClick={onStartJob}
        >
          Iniciar
        </ButtonKnewave>
      </S.ButtonContainer>
    </>
  );
}
