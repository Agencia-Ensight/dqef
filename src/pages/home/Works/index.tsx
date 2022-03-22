import { ButtonKnewave } from "../../../components/ButtonKnewave";
import { Modal } from "../../../components/Modal";
import { ProfileCard } from "../../../components/ProfileCard";
import { ProfileCardEmployee } from "../../../components/ProfileCardEmployee";
import { UrgentWorkCard } from "../../../components/UrgentWorkCard";
import { useModal } from "../../../hooks/useModal";
import { ModalDealDone } from "../../components/modal/ModalDealDone";
import { ModalHelp } from "../../components/modal/ModalHelp";
import { ModalRules } from "../../components/modal/ModalRules";

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
          status="EMPLOYEE-SEND"
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
          status="EMPLOYEE-START"
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
          status="EMPLOYEE-BILL"
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
          status="EMPLOYEE-CHANGE"
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
          status="EMPLOYEE-DONE"
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
          status="EMPLOYEE-WANT"
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
          status="EMPLOYEE-PAID"
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
          status="EMPLOYEE-SEE"
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
          status="STUDENT"
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
          status="STUDENT-CREATE"
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
          status="STUDENT-DONE"
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
          status="STUDENT-EDIT"
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
          status="STUDENT-GET"
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
          headerText="Banana 123"
          modalContent={<ModalDealDone />}
        />
      </S.ButtonContainer>
    </S.Wrapper>
  );
}
