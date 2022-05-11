import { ModalFeedback } from "../../pages/components/modal/ModalFeedback";
import { Button } from "../Button";
import * as S from "./styles";

import { Props } from "./typings";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../Modal";
import { ModalInsertWork } from "../../pages/components/modal/ModalInsertWork";
import { ModalSendWork } from "../../pages/components/modal/ModalSendWork";
import { ModalDone } from "../../pages/components/modal/ModalDone";
import { ModalChanges } from "../../pages/components/modal/ModalChanges";
import { ModalRules } from "../../pages/components/modal/ModalRules";
import { ModalCounterProposal } from "../../pages/components/modal/ModalCounterProposal";
import { ModalDealDone } from "../../pages/components/modal/ModalDealDone";
import { ModalRating } from "../../pages/components/modal/ModalRating";
import { ModalOpenWork } from "../../pages/components/modal/ModalOpenWork";
import { ModalOpenWorkStep2 } from "../../pages/components/modal/ModalOpenWorkStep2";
import { ModalRequestChanges } from "../../pages/components/modal/ModalRequestChanges";
import { ModalCalmaLa } from "../../pages/components/modal/ModalCalmaLa";
import { ModalPayment } from "../../pages/components/modal/ModalPayment";

export function UrgentWorkCard({
  jobId,
  course,
  title,
  discipline,
  theme,
  typeOfWork,
  price,
  date,
  urgent,
  status,
}: Props) {
  const { isShown, toggle } = useModal();
  const { isShown: isShown2, toggle: toggle2 } = useModal();
  return (
    <S.Wrapper>
      <S.Container>
        {urgent === true ? <S.RocketImage src="/images/rocket.png" /> : ""}
        <S.CourseContainer course={course}>
          <S.Course>{course}</S.Course>
        </S.CourseContainer>
        <S.MainContainer>
          <S.Title>{title}</S.Title>
          <S.InformationContainer>
            <S.Subtitle>Disciplina</S.Subtitle>
            <S.Description>{discipline}</S.Description>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Tema</S.Subtitle>
            <S.Description>{theme}</S.Description>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Tipo do Trabalho</S.Subtitle>
            <S.Description>{typeOfWork}</S.Description>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Preço Total</S.Subtitle>
            <S.Price>R${price}</S.Price>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>
              Data de Entrega {urgent === true && "Urgente"}
            </S.Subtitle>

            <S.Date urgent={urgent}>{date}</S.Date>

            {/* Employee */}
            {status === "EMPLOYEE-SEND" && (
              <S.WaitStudent>Aguardando Estudante ...</S.WaitStudent>
            )}
            {status === "EMPLOYEE-START" && (
              <S.NextBill>
                Próxima Cobrança: <span>05/08 às 17h</span>
              </S.NextBill>
            )}
            {status === "EMPLOYEE-CHANGE" && (
              <S.NextBill>
                Próxima Cobrança: <span>05/08 às 17h</span>
              </S.NextBill>
            )}
            {status === "EMPLOYEE-BILL" && <S.Bill>Responda a Cobrança</S.Bill>}
          </S.InformationContainer>
        </S.MainContainer>
      </S.Container>
      {/* Employee */}
      {status === "EMPLOYEE-PAID" && (
        <S.FooterContainer>
          <Button variant="secondary">Ver mais</Button>
          <Button onClick={toggle} variant="primary">
            Iniciar Trabalho
          </Button>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Negócio Fechado!"
            modalContent={<ModalDealDone />}
          />
        </S.FooterContainer>
      )}
      {status === "EMPLOYEE-START" && (
        <S.FooterContainer>
          <Button onClick={toggle} variant="primary">
            Entregar
          </Button>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Deseja enviar o trabalho?"
            modalContent={<ModalInsertWork />}
          />
          <a href={`/inside-job/${jobId}`}>
            <Button variant="secondary">Ver Mais</Button>
          </a>
          <a target="_blank" href="https://wa.me/5541999959588">
            <Button variant="tertiary">Problema</Button>
          </a>
        </S.FooterContainer>
      )}
      {status === "EMPLOYEE-BILL" && (
        <S.FooterContainer>
          <Button onClick={toggle} variant="primary">
            Entregar
          </Button>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Deseja enviar o trabalho?"
            modalContent={<ModalInsertWork />}
          />{" "}
          <a href={`/inside-job/${jobId}`}>
            <Button variant="secondary">Ver Mais</Button>
          </a>
          <Button onClick={toggle} variant="tertiary">
            Cobrança
          </Button>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Olá, Enrico!"
            modalContent={<ModalDone />}
          />
        </S.FooterContainer>
      )}
      {status === "EMPLOYEE-CHANGE" && (
        <S.FooterContainer>
          <Button onClick={toggle2} variant="primary">
            Entregar
          </Button>
          <Modal
            isShown={isShown2}
            hide={toggle2}
            headerText="Deseja enviar o trabalho?"
            modalContent={<ModalInsertWork />}
          />
          <a href={`/inside-job/${jobId}`}>
            <Button variant="secondary">Ver Mais</Button>
          </a>
          <Button onClick={toggle} variant="quinternary">
            Alterações
          </Button>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Olá, Bruno. Essas são as alterações solicitadas"
            modalContent={<ModalChanges />}
          />
        </S.FooterContainer>
      )}
      {status === "EMPLOYEE-DONE" && (
        <S.FooterContainer>
          <Button onClick={toggle} variant="primary">
            Ver FeedBack
          </Button>
          <Button onClick={toggle} variant="secondary">
            Ver mais
          </Button>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Feedback do Estudante"
            modalContent={<ModalFeedback />}
          />
        </S.FooterContainer>
      )}
      {status === "EMPLOYEE-SEE" && (
        <S.FooterContainer>
          <a href={`/inside-job/${jobId}`}>
            <Button variant="secondary">Ver Mais</Button>
          </a>
        </S.FooterContainer>
      )}
      {status === "EMPLOYEE-WANT" && (
        <S.FooterContainer>
          <Button onClick={toggle} variant="primary">
            Aceitar Proposta
          </Button>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Informações da Entrega"
            modalContent={<ModalRules />}
          />
          <Button onClick={toggle2} variant="secondary">
            Contraproposta
          </Button>
          <Modal
            isShown={isShown2}
            hide={toggle2}
            headerText="Alterar Valor"
            modalContent={<ModalCounterProposal />}
          />
        </S.FooterContainer>
      )}
      {/* Student */}
      {status === "STUDENT-CREATE" && (
        <S.FooterContainer>
          <a href="/studentviewproposals">
            <Button variant="primary">Ver Propostas</Button>
          </a>
          <a href="/studentviewproposals">
            <Button variant="secondary">Ver Mais</Button>
          </a>
        </S.FooterContainer>
      )}
      {status === "STUDENT-GET" && (
        <S.FooterContainer>
          <Button onClick={toggle} variant="primary">
            Entrega
          </Button>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Olá, Enrico."
            modalContent={<ModalOpenWorkStep2 />}
          />
          <a href={`/inside-job/${jobId}`}>
            <Button variant="secondary">Ver Mais</Button>
          </a>
          <Button onClick={toggle2} variant="tertiary">
            Alterações
          </Button>
          <Modal
            isShown={isShown2}
            hide={toggle2}
            headerText="Solicitar Alteração"
            modalContent={<ModalRequestChanges />}
          />
        </S.FooterContainer>
      )}
      {status === "STUDENT-DONE" && (
        <S.FooterContainer>
          <Button onClick={toggle} variant="primary">
            Entrega
          </Button>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Olá, Enrico."
            modalContent={<ModalOpenWork />}
          />
          <a href={`/inside-job/${jobId}`}>
            <Button variant="secondary">Ver Mais</Button>
          </a>
          <Button onClick={toggle2} variant="quaternary">
            Avaliar
          </Button>
          <Modal
            isShown={isShown2}
            hide={toggle2}
            headerText="Olá, Enrico"
            modalContent={<ModalRating />}
          />
        </S.FooterContainer>
      )}
      {status === "STUDENT" && ""}
      {status === "STUDENT-EDIT" && (
        <S.FooterContainer>
          <a href={`/proposalstudentedit/${jobId}`}>
            <Button variant="primary">Editar Trabalho</Button>
          </a>
        </S.FooterContainer>
      )}
    </S.Wrapper>
  );
}
