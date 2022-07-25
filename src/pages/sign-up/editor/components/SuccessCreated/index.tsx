import Link from "next/link";

import { ButtonKnewave } from "@/components";

import * as S from "./styles";

function SuccessCreated() {
  return (
    <S.Wrapper>
      <S.Image src="/images/nerdzin.png" />
      <h1>Sucesso :)</h1>
      <p>
        É oficial, você é um redator da Deixa Que Eu Faço! Agora você já pode
        realizar trabalhos e ganhar uma grana!
      </p>
      <S.ButtonContainer>
        <Link href="/" passHref>
          <ButtonKnewave margin-left="25px" variant="PRIMARY" size="sm">
            Explorar
          </ButtonKnewave>
        </Link>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export { SuccessCreated };
