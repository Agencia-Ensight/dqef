import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

export function NavBar() {
  return (
    <S.Container>
      <Link href="/" passHref>
        <S.LogoWrapper>
          <Image
            src="/images/logo-text.png"
            width={300}
            height={60}
            quality={100}
          />
        </S.LogoWrapper>
      </Link>
      <S.Wrapper>
        <S.MenuItem>Trabalhos</S.MenuItem>
        <S.MenuItem>Sobre Nós</S.MenuItem>
        <S.Line></S.Line>
        <button>Bnaana</button>
        <button>Bnaana</button>
      </S.Wrapper>
    </S.Container>
  );
}
