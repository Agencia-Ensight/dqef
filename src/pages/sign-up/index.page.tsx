import Link from "next/link";

import { ButtonKnewave } from "@/components";
import * as S from "./styles";

function SignUp() {
  return (
    <S.Wrapper>
      <S.ContainerButtons>
        <h1>Antes de criar sua conta</h1>
        <h2>
          Escolha qual será sua vocação na <span>Deixa Que Eu Faço</span>
        </h2>
      </S.ContainerButtons>

      <S.ContainerChoose>
        <S.Containerstudent>
          <S.Image src="/images/Estudante.png" />
          <h5>Estudante</h5>
          <p>
            Se você precisa de ajuda acadêmica, crie sua conta como estudante!
          </p>
          <div>
            <Link href="/sign-up/student" passHref>
              <ButtonKnewave variant="PRIMARY" size="sm">
                Vamos lá
              </ButtonKnewave>
            </Link>
          </div>
        </S.Containerstudent>

        <S.Containerstudent>
          <S.Image src="/images/Redator.png" />
          <h5>Redator</h5>
          <p>
            Se você deseja realizar os trabalhos publicados e ganhar uma grana
            extra, crie sua conta de redator!
          </p>
          <div>
            <Link href="/sign-up/editor">
              <ButtonKnewave variant="PRIMARY" size="sm">
                Vamos lá
              </ButtonKnewave>
            </Link>
          </div>
        </S.Containerstudent>
      </S.ContainerChoose>
      <S.ContainerBang>
        <a href="/sign-in">Já tenho uma conta</a>
      </S.ContainerBang>
    </S.Wrapper>
  );
}

export default SignUp;
