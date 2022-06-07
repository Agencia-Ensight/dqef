import * as S from "./styles";

import { useRouter } from "next/router";

import { ProfileCardEmployee } from "../../../components/ProfileCardEmployee";

export default function studentviewproposals() {
  const router = useRouter();
  return (
    <S.Wrapper>
      <div>
        <button type="button" onClick={() => router.back()}>
          Voltar
        </button>
        <h1>Propostas Recebidas</h1>
        <S.ContainerJobCard>
          <S.ContainerProfileCard>
            <ProfileCardEmployee
              img="/images/fotobraba.png"
              price={150}
              course="Direito"
              profileName="Bruno..."
              jobs={25}
              studying="Cursando Oitavo Período"
            />
          </S.ContainerProfileCard>
          <S.ContainerProfileCard>
            <ProfileCardEmployee
              img="/images/fotobraba.png"
              price={150}
              course="Direito"
              profileName="Bruno..."
              jobs={25}
              studying="Cursando Oitavo Período"
            />
          </S.ContainerProfileCard>
          <S.ContainerProfileCard>
            <ProfileCardEmployee
              img="/images/fotobraba.png"
              price={150}
              course="Direito"
              profileName="Bruno..."
              jobs={25}
              studying="Cursando Oitavo Período"
            />
          </S.ContainerProfileCard>
        </S.ContainerJobCard>
      </div>
    </S.Wrapper>
  );
}
