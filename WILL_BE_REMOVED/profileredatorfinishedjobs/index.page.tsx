import { ButtonKnewave } from "../../src/components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";

import { UrgentWorkCard } from "../../src/components/UrgentWorkCard";

import { ProfileCard } from "../../src/components/ProfileCard";

export default function profileredatorfinishedjobs() {
  return (
    <S.Wrapper>
      <S.ContainerProfileCard>
        <ProfileCard
          img="/images/redatorpicture.png"
          profileName="Murilo Ricioli"
          course="Medicina"
          variant="EMPLOYEE"
        />
      </S.ContainerProfileCard>

      <div>
        <h4>Trabalhos Finalizados</h4>

        <S.ContainerJobCard>
          <UrgentWorkCard
            jobId="1"
            title="Faz Meu Trabalho Por Favor"
            course="MEDICINA"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="EMPLOYEE-DONE"
          />
          <UrgentWorkCard
            jobId="1"
            title="Faz Meu Trabalho Por Favor"
            course="MEDICINA"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="EMPLOYEE-DONE"
          />
          <UrgentWorkCard
            jobId="1"
            title="Faz Meu Trabalho Por Favor"
            course="MEDICINA"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="EMPLOYEE-DONE"
          />
          <UrgentWorkCard
            jobId="1"
            title="Faz Meu Trabalho Por Favor"
            course="MEDICINA"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="EMPLOYEE-DONE"
          />
          <UrgentWorkCard
            jobId="1"
            title="Faz Meu Trabalho Por Favor"
            course="MEDICINA"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="EMPLOYEE-DONE"
          />
          <UrgentWorkCard
            jobId="1"
            title="Faz Meu Trabalho Por Favor"
            course="MEDICINA"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="EMPLOYEE-DONE"
          />
        </S.ContainerJobCard>
      </div>
    </S.Wrapper>
  );
}
