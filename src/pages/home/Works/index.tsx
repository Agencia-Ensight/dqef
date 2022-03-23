import { ButtonKnewave } from "../../../components/ButtonKnewave";
import { Modal } from "../../../components/Modal ";
import { ProfileCard } from "../../../components/ProfileCard";
import { ProfileCardEmployee } from "../../../components/ProfileCardEmployee";
import { UrgentWorkCard } from "../../../components/UrgentWorkCard";
import { useModal } from "../../../hooks/useModal";
import { ModalAlright } from "../../components/modal/ModalAlright";
import { ModalApproved } from "../../components/modal/ModalApproved";
import { ModalChanges } from "../../components/modal/ModalChanges";
import { ModalConfirmInformation } from "../../components/modal/ModalConfirmInformation";
import { ModalDealDone } from "../../components/modal/ModalDealDone";
import { ModalExplanation } from "../../components/modal/ModalExplanation";
import { ModalFeedback } from "../../components/modal/ModalFeedback";
import { ModalInsertWork } from "../../components/modal/ModalInsertWork ";
import { ModalNotApproved } from "../../components/modal/ModalNotApproved";
import { ModalOpenWork } from "../../components/modal/ModalOpenWork";
import { ModalOpenWorkStep2 } from "../../components/modal/ModalOpenWorkStep2";
import { ModalRating } from "../../components/modal/ModalRating";
import { ModalRequestChanges } from "../../components/modal/ModalRequestChanges";
import { ModalRules } from "../../components/modal/ModalRules";
import { ModalSendWork } from "../../components/modal/ModalSendWork";
import { ModalSentProposal } from "../../components/modal/ModalSentProposal";
import { ModalVerifying } from "../../components/modal/ModalVerifying";
import { ModalWontFinish } from "../../components/modal/ModalWontFinish";

import * as S from "./styles";

export function Works() {
  const { isShown, toggle } = useModal();
  const onConfirm = () => toggle();
  const onCancel = () => toggle();
  return (
    <S.Wrapper>
      <S.SubTitle>PADRÃO</S.SubTitle>
      <S.Title>Lista de Trabalhos</S.Title>
      <S.HeaderContainer>
        <S.Description>
          Se liga nas ofertas incríveis que estão disponíveis para você realizar
          e tirar uma grana extra!
        </S.Description>
      </S.HeaderContainer>
      <S.MainContainer>
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={false}
        />
        <UrgentWorkCard
          course="ARQUITETURA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={false}
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={false}
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={false}
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={false}
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={false}
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={false}
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={false}
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={false}
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={false}
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={false}
        />
        <UrgentWorkCard
          course="ECONOMIA"
          date="23/04"
          discipline="arroz"
          price={20}
          theme="banana"
          title="Arroz"
          typeOfWork="Banana"
          urgent={false}
        />
        <ProfileCard
          img="/images/profile-img.png"
          course="Direito"
          profileName="Enrico Silvestre"
        />
        <ProfileCardEmployee
          course="Direito"
          img="/images/profile-img.png"
          price={150}
          jobs={60}
          studying="Cursando Oitavo Período"
          profileName="Bruno Vencato"
        />
      </S.MainContainer>
      <S.ButtonContainer>
        <ButtonKnewave size="lg" variant="PRIMARY">
          <a href="/all-works">Ver Todos</a>
        </ButtonKnewave>
        <ButtonKnewave size="lg" variant="PRIMARY" onClick={toggle}>
          Open Modal
        </ButtonKnewave>
        <Modal
          isShown={isShown}
          hide={toggle}
          headerText="Um momento, estamos verificando"
          modalContent={<ModalConfirmInformation/>}
        />
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
