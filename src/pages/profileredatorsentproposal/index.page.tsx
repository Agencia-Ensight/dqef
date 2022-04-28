import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";

import { UrgentWorkCard } from "../../components/UrgentWorkCard";

import { ProfileCard } from "../../components/ProfileCard";

export default function profileredatorsentproposal() {
  return (
    <S.Wrapper>
      <S.ContainerProfileCard>
        <ProfileCard
          img="/images/redatorpicture.png"
          profileName="Murilo Ricioli"
          course="Medicina"
        />
      </S.ContainerProfileCard>

      <div>
        <h4>Propostas Enviadas</h4>

        <S.ContainerJobCard>
          <UrgentWorkCard
            title="Faz Meu Trabalho Por Favor"
            course="MEDICINA"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="EMPLOYEE-SEE"
          />
          <UrgentWorkCard
            title="Faz Meu Trabalho Por Favor"
            course="MEDICINA"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="EMPLOYEE-PAID"
          />
          <UrgentWorkCard
            title="Faz Meu Trabalho Por Favor"
            course="MEDICINA"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="EMPLOYEE-SEE"
          />
          <UrgentWorkCard
            title="Faz Meu Trabalho Por Favor"
            course="MEDICINA"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="EMPLOYEE-SEE"
          />
          <UrgentWorkCard
            title="Faz Meu Trabalho Por Favor"
            course="MEDICINA"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="EMPLOYEE-SEE"
          />
          <UrgentWorkCard
            title="Faz Meu Trabalho Por Favor"
            course="MEDICINA"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="EMPLOYEE-SEE"
          />
        </S.ContainerJobCard>
      </div>
    </S.Wrapper>
  );
}
