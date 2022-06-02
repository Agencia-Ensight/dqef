import React, { useState } from "react";
import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import { Modal } from "../../../../components/Modal";
import { ModalSentProposal } from "../ModalSentProposal";
import * as S from "./styles";
import { useModal } from "../../../../hooks/useModal";

export function ModalRules() {
  const [showMore, setShowMore] = useState(true);

  const { toggle, isShown } = useModal();
  return (
    <>
      <S.Description>Infos para iniciar</S.Description>
      <S.List>
        1.Todos os detalhes sobre o trabalho estão disponíveis no seu painel de
        controle. Clique na foto da atividade para visualizar.
      </S.List>
      <S.List>
        2.Durante o período de execução vamos realizar algumas cobranças, para
        verificar o andamento do trabalho. No(s) dia(s) XX às xxh, XX às xxh e
        XX às xxh, você será notificado para acessar seu painel de controle e
        nos atualizar sobre o andamento da atividade. Caso deixe de responder, o
        trabalho será cancelado e enviado ao próximo redator da lista de espera.
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
        <ButtonKnewave variant="PRIMARY" size="lg" onClick={toggle}>
          Iniciar
        </ButtonKnewave>
        <Modal
          isShown={isShown}
          hide={toggle}
          headerText="Proposta Enviada!"
          modalContent={<ModalSentProposal />}
        />
      </S.ButtonContainer>
    </>
  );
}
