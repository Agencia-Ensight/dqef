import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";

import { RiLockPasswordFill } from "react-icons/ri";

export default function successchangepassword() {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/forgotpassword.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <S.Image src="/images/nerdzin.png" />
        <a onClick={() => router.back()}>
          <span>Voltar</span>
        </a>
        <h1>Sucesso :)</h1>
        <p>
          Sua nova senha está configurada e já entramos na plataforma com o
          e-mail e nova senha solicitadas
        </p>
        <div></div>
        <div></div>
        <Link href="/" passHref>
          <ButtonKnewave variant="PRIMARY" size="sm">
            Explorar
          </ButtonKnewave>
        </Link>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
