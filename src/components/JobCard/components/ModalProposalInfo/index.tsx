import { ButtonKnewave } from "@/components";
import { useModal } from "@/contexts";
import { useMedia } from "@/hooks";
import { ModalSentProposal } from "./components/ModalSentProposal";
import * as S from "./styles";

export function ModalProposalInfo() {
  const isMobile = useMedia("(max-width:600px)");
  const { open } = useModal();

  function handleNeedsMoreTime() {
    open("Proposta Enviada!", { content: () => <ModalSentProposal /> });
  }

  return (
    <>
      <S.TextInformation>
        <div>Antes de tudo, vamos te explicar como funcionamos!</div>

        <div>
          <p>
            1- Após analisar o trabalho de seu interesse, você poderá aceitar a
            oferta de valor do estudante ou enviar uma proposta de aumento.
          </p>
        </div>
        <div>
          <p>
            2- A negociação e o acompanhamento do trabalho serão realizados no
            seu painel de controle (disponível para acesso no menu da home,
            clicando no seu nome).
          </p>
        </div>
        <div>
          <p>
            3- Após a realização do pagamento por parte do estudante, você será
            notificado(a) para iniciar o trabalho. Todas as instruções de
            confecção ficarão disponíveis no painel de controle.
          </p>
        </div>
        <div>
          <p>
            4- Ao realizar a entrega, a atividade é submetida a um teste de
            plágio e ortografia. Caso seja constatado alguma irregularidade, a
            entrega não será aceita e você terá um prazo para ajustar o
            trabalho.
          </p>
        </div>
        <div>
          <p>
            5- Após a entrega, o estudante terá um prazo para analisar a
            atividade e solicitar alterações, caso julgue necessário.
          </p>
        </div>
        <div>
          <p>
            6- O pagamento será realizado após a entrega, na conta bancária
            informada ou PIX ou Picpay. Caso o estudante exija alguma alteração,
            o valor será depositado após o envio da última versão do trabalho,
            com as melhorias realizadas.
          </p>
        </div>
      </S.TextInformation>

      <S.ButtonFinaleira>
        <ButtonKnewave
          size={isMobile ? "sm" : "lg"}
          variant="PRIMARY"
          onClick={() => handleNeedsMoreTime()}
        >
          Próximo
        </ButtonKnewave>
      </S.ButtonFinaleira>
    </>
  );
}
