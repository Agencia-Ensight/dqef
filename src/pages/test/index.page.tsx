import React from "react";
import { Modal } from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import { ModalAlright } from "../components/modal/ModalAlright";
import { ModalApproved } from "../components/modal/ModalApproved";
import { ModalCalmaLa } from "../components/modal/ModalCalmaLa";
import { ModalChanges } from "../components/modal/ModalChanges";
import { ModalConfirmInformation } from "../components/modal/ModalConfirmInformation";
import { ModalCounterProposal } from "../components/modal/ModalCounterProposal";
import { ModalDealDone } from "../components/modal/ModalDealDone";
import { ModalDone } from "../components/modal/ModalDone";
import { ModalExplanation } from "../components/modal/ModalExplanation";
import { ModalFeedback } from "../components/modal/ModalFeedback";
import { ModalHelp } from "../components/modal/ModalHelp";
import { ModalInsertWork } from "../components/modal/ModalInsertWork";
import { ModalNotApproved } from "../components/modal/ModalNotApproved";
import { ModalOpenWork } from "../components/modal/ModalOpenWork";
import { ModalOpenWorkStep2 } from "../components/modal/ModalOpenWorkStep2";
import { ModalPayment } from "../components/modal/ModalPayment";
import { ModalRating } from "../components/modal/ModalRating";
import { ModalRequestChanges } from "../components/modal/ModalRequestChanges";
import { ModalRules } from "../components/modal/ModalRules";
import { ModalSendWork } from "../components/modal/ModalSendWork";
import { ModalSentProposal } from "../components/modal/ModalSentProposal";
import { ModalVerifying } from "../components/modal/ModalVerifying";
import { ModalWontFinish } from "../components/modal/ModalWontFinish";
import * as S from "./styles";

export default function Test() {
  const { isShown, toggle } = useModal();
  return (
    <S.Wrapper>
      <button onClick={toggle}>Open Modal</button>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText=""
        modalContent={<ModalWontFinish />}
      />
    </S.Wrapper>
  );
}
