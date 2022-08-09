import Link from "next/link";

import * as S from "./styles";
import { ButtonKnewave } from "@/components";

function Success() {
  return (
    <S.Wrapper>
      <S.Title>Sucesso! O trabalho foi publicado</S.Title>
      <p>Em breve você receberá propostas dos redatores para realizá-lo</p>
      <S.Image src="/images/nerdzin.png" />
      <p>
        Para acompanhar todo o processo é bem simples, basta entrar <br /> no
        seu
        <Link href="/profilestudentpublishedjobs" passHref>
          <span>painel de controle!</span>
        </Link>
      </p>
      <p>
        Lá você terá acesso às propostas dos redatores e também poderá <br />{" "}
        acompanhar o andamento do seu trabalho.
      </p>
      <S.ButtonContainer>
        <Link href="/" passHref>
          <ButtonKnewave variant="PRIMARY" size="sm">
            Ir para Home
          </ButtonKnewave>
        </Link>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export { Success };
