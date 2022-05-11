import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";

import { UrgentWorkCard } from "../../components/UrgentWorkCard";

import { ProfileCard } from "../../components/ProfileCard";

export default function profilestudentpublishedjobs() {
  return (
    <S.Wrapper>
      <S.ContainerProfileCard>
        <ProfileCard
          img="/images/profilepicture.png"
          profileName="Enrico Silvestri"
          course="Direito"
        />
      </S.ContainerProfileCard>

      <div>
        <h4>Trabalhos Publicados</h4>

        <S.ContainerJobCard>
          <UrgentWorkCard
            jobId="1"
            title="Faz Meu Trabalho Por Favor"
            course="DIREITO"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="STUDENT-CREATE"
          />
          <UrgentWorkCard
            jobId="1"
            title="Faz Meu Trabalho Por Favor"
            course="DIREITO"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="STUDENT-CREATE"
          />
          <UrgentWorkCard
            jobId="1"
            title="Faz Meu Trabalho Por Favor"
            course="DIREITO"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="STUDENT-CREATE"
          />
          <UrgentWorkCard
            jobId="1"
            title="Faz Meu Trabalho Por Favor"
            course="DIREITO"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="STUDENT-CREATE"
          />
          <UrgentWorkCard
            jobId="1"
            title="Faz Meu Trabalho Por Favor"
            course="DIREITO"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="STUDENT-CREATE"
          />
          <UrgentWorkCard
            jobId="1"
            title="Faz Meu Trabalho Por Favor"
            course="DIREITO"
            discipline="Direito Penal"
            theme="Teoria do Crime"
            typeOfWork="Lista de Exercício"
            price={500}
            date="10/04/2022"
            status="STUDENT-CREATE"
          />
        </S.ContainerJobCard>
      </div>
    </S.Wrapper>
  );
}
