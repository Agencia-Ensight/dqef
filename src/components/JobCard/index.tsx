import { ModalFeedback } from "../../../WILL_BE_REMOVED/components/modal/ModalFeedback";
import { Button } from "../Button";
import * as S from "./styles";

import { Props } from "./typings";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../Modal";
import { ModalInsertWork } from "../../../WILL_BE_REMOVED/components/modal/ModalInsertWork";
import { ModalDone } from "../../../WILL_BE_REMOVED/components/modal/ModalDone";
import { ModalChanges } from "../../../WILL_BE_REMOVED/components/modal/ModalChanges";
import { ModalRules } from "../../../WILL_BE_REMOVED/components/modal/ModalRules";
import { ModalCounterProposal } from "../../../WILL_BE_REMOVED/components/modal/ModalCounterProposal";
import { ModalDealDone } from "../../../WILL_BE_REMOVED/components/modal/ModalDealDone";
import { ModalRating } from "../../../WILL_BE_REMOVED/components/modal/ModalRating";
import { ModalOpenWork } from "../../../WILL_BE_REMOVED/components/modal/ModalOpenWork";
import { ModalOpenWorkStep2 } from "../../../WILL_BE_REMOVED/components/modal/ModalOpenWorkStep2";
import { ModalRequestChanges } from "../../../WILL_BE_REMOVED/components/modal/ModalRequestChanges";
import { ModalCalmaLa } from "../../../WILL_BE_REMOVED/components/modal/ModalCalmaLa";
import { ModalPayment } from "../../../WILL_BE_REMOVED/components/modal/ModalPayment";

function JobCard(job: Props) {
  const { isShown, toggle } = useModal();

  const { isShown: isShown2, toggle: toggle2 } = useModal();

  return (
    <S.Wrapper>
      <S.Container>
        {job.urgent && <S.RocketImage src="/images/rocket.png" />}
        <S.CourseContainer course={job.course}>
          <S.Course>{job.course}</S.Course>
        </S.CourseContainer>
        <S.MainContainer>
          <S.Title>{job.title}</S.Title>
          <S.InformationContainer>
            <S.Subtitle>Disciplina</S.Subtitle>
            <S.Description>{job.discipline}</S.Description>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Tema</S.Subtitle>
            <S.Description>{job.theme}</S.Description>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Tipo do Trabalho</S.Subtitle>
            <S.Description>{job.typeOfWork}</S.Description>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Preço Total</S.Subtitle>
            <S.Price>R${job.price}</S.Price>
          </S.InformationContainer>
          <S.InformationContainer>
            <S.Subtitle>Data de Entrega {job.urgent && "Urgente"}</S.Subtitle>
            <S.Date urgent={job.urgent}>{job.date}</S.Date>

            {/* Employee */}
            {job.status === "EMPLOYEE-SEND" && (
              <S.WaitStudent>Aguardando Estudante ...</S.WaitStudent>
            )}

            {job.status === "EMPLOYEE-START" && (
              <S.NextBill>
                Próxima Cobrança: <span>05/08 às 17h</span>
              </S.NextBill>
            )}

            {job.status === "EMPLOYEE-CHANGE" && (
              <S.NextBill>
                Próxima Cobrança: <span>05/08 às 17h</span>
              </S.NextBill>
            )}

            {job.status === "EMPLOYEE-BILL" && (
              <S.Bill>Responda a Cobrança</S.Bill>
            )}
          </S.InformationContainer>
        </S.MainContainer>
      </S.Container>
      {/* Employee */}
      {job.status === "EMPLOYEE-PAID" && (
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
      {job.status === "EMPLOYEE-START" && (
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
          <a href={`/jobs/${job.jobId}`}>
            <Button variant="secondary">Ver Mais</Button>
          </a>
          <a target="_blank" href="https://wa.me/5541999959588">
            <Button variant="tertiary">Problema</Button>
          </a>
        </S.FooterContainer>
      )}
      {job.status === "EMPLOYEE-BILL" && (
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
          <a href={`/jobs/${job.jobId}`}>
            <Button variant="secondary">Ver Mais</Button>
          </a>
          <Button onClick={toggle} variant="tertiary">
            Cobrança
          </Button>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Olá!"
            modalContent={<ModalDone />}
          />
        </S.FooterContainer>
      )}
      {job.status === "EMPLOYEE-CHANGE" && (
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
          <a href={`/jobs/${job.jobId}`}>
            <Button variant="secondary">Ver Mais</Button>
          </a>
          <Button onClick={toggle} variant="quinternary">
            Alterações
          </Button>
          <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Olá. Essas são as alterações solicitadas"
            modalContent={<ModalChanges />}
          />
        </S.FooterContainer>
      )}
      {job.status === "EMPLOYEE-DONE" && (
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
      {job.status === "EMPLOYEE-SEE" && (
        <S.FooterContainer>
          <a href={`/jobs/${job.jobId}`}>
            <Button variant="secondary">Ver Mais</Button>
          </a>
        </S.FooterContainer>
      )}
      {job.status === "EMPLOYEE-WANT" && (
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
      {job.status === "STUDENT-CREATE" && (
        <S.FooterContainer>
          <a href="/studentviewproposals">
            <Button variant="primary">Ver Propostas</Button>
          </a>
          <a href="/studentviewproposals">
            <Button variant="secondary">Ver Mais</Button>
          </a>
        </S.FooterContainer>
      )}
      {job.status === "STUDENT-GET" && (
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
          <a href={`/jobs/${job.jobId}`}>
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
      {job.status === "STUDENT-DONE" && (
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
          <a href={`/jobs/${job.jobId}`}>
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
      {job.status === "STUDENT" && ""}
      {job.status === "STUDENT-EDIT" && (
        <S.FooterContainer>
          <a href={`/proposalstudentedit/${job.jobId}`}>
            <Button variant="primary">Editar Trabalho</Button>
          </a>
        </S.FooterContainer>
      )}
    </S.Wrapper>
  );
}

export { JobCard };
