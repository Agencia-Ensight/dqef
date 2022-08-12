import Link from "next/link";

import { ButtonKnewave } from "@/components";
import * as S from "./styles";

type ISuccessCreated = {
  type: "EDITOR" | "STUDENT";
};

function SuccessCreated({ type }: ISuccessCreated) {
  return (
    <S.Wrapper>
      <S.Image src="/images/nerdzin.png" />
      <h1>Sucesso :)</h1>
      {type === "STUDENT" ? (
        <p>
          Bem-vindo, agora navegue na plataforma <br /> e publique seus
          trabalhos.
        </p>
      ) : (
        <p>
          É oficial, você é um redator da Deixa Que Eu Faço! Agora você já pode
          realizar trabalhos e ganhar uma grana!
        </p>
      )}
      <S.ButtonContainer>
        <Link href="/" passHref>
          <ButtonKnewave margin-left="25px" variant="PRIMARY" size="sm">
            Explorar
          </ButtonKnewave>
        </Link>
        {type === "STUDENT" && (
          <Link href="/jobs/create" passHref>
            <ButtonKnewave variant="PRIMARY" size="sm">
              Publicar Trabalho
            </ButtonKnewave>
          </Link>
        )}
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export { SuccessCreated };
