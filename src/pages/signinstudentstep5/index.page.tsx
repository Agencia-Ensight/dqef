import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import Link from "next/link";

export default function signinstudentstep5() {
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <S.CongratulationImage src="/images/nerdzin.png" />
        <h1>Sucesso :)</h1>
        <p>
          Bem-vindo, agora navegue na plataforma <br /> e publique seus
          trabalhos.
        </p>

        <div>
          <Link href="/" passHref>
            <ButtonKnewave margin-left="25px" variant="SECONDARY" size="sm">
              Explorar
            </ButtonKnewave>
          </Link>

          <ButtonKnewave variant="PRIMARY" size="sm">
            Publicar Trabalho
          </ButtonKnewave>
        </div>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
