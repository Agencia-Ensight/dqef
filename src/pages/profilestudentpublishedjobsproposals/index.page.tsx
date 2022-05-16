import * as S from "./styles";

import { ProfileCardEmployee } from "../../components/ProfileCardEmployee";

export default function profilestudentpublishedjobsproposals() {
  return (
    <S.Wrapper>
      <div>
        <a href="#">Voltar</a>
        <h1>Propostas Recebidas</h1>
        <S.ContainerJobCard>
          <S.ContainerProfileCard>
            <ProfileCardEmployee
              img="/images/fotobraba.png"
              price={150}
              course="Direito"
              profileName="Bruno Vencato"
              jobs={25}
              studying="Cursando Oitavo Período"
            />
          </S.ContainerProfileCard>
          <S.ContainerProfileCard>
            <ProfileCardEmployee
              img="/images/fotobraba.png"
              price={150}
              course="Direito"
              profileName="Bruno Vencato"
              jobs={25}
              studying="Cursando Oitavo Período"
            />
          </S.ContainerProfileCard>
          <S.ContainerProfileCard>
            <ProfileCardEmployee
              img="/images/fotobraba.png"
              price={150}
              course="Direito"
              profileName="Bruno Vencato"
              jobs={25}
              studying="Cursando Oitavo Período"
            />
          </S.ContainerProfileCard>
        </S.ContainerJobCard>
      </div>
    </S.Wrapper>
  );
}
