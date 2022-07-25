import Link from "next/link";

import { ButtonKnewave } from "@/components";

import * as S from "./styles";

function SuccessCreated() {
  return (
    <S.Wrapper>
      <S.Image src="/images/nerdzin.png" />
      <h1>Sucesso :)</h1>
      <p>
        Bem-vindo, agora navegue na plataforma <br /> e publique seus trabalhos.
      </p>
      <S.ButtonContainer>
        <Link href="/" passHref>
          <ButtonKnewave margin-left="25px" variant="SECONDARY" size="sm">
            Explorar
          </ButtonKnewave>
        </Link>

        <ButtonKnewave variant="PRIMARY" size="sm">
          Publicar Trabalho
        </ButtonKnewave>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export { SuccessCreated };
