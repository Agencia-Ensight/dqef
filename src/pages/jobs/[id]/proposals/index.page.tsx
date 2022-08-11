import { ProfileCardEmployee } from "@/components";
import { useRouter } from "next/router";
import * as S from "./styles";

function Proposals() {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.BackButton onClick={() => router.back()}>Voltar</S.BackButton>
      <S.Title>Propostas Recebidas</S.Title>
      <S.Container>
        <ProfileCardEmployee
          course="Direito"
          img="/images/redatorpicture.png"
          jobs={10}
          price={100}
          profileName="Joao Lobo"
          studying="1 Periodo"
        />
      </S.Container>
    </S.Wrapper>
  );
}

export default Proposals;
