import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";
import { ButtonKnewave } from "../../components/ButtonKnewave";
import { Menu } from "./components/Menu";

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
        <S.MenuItem>Home</S.MenuItem>
        <S.MenuItem>Urgentes</S.MenuItem>
        <S.MenuItem>Trabalhos</S.MenuItem>
        <S.MenuItem>Sobre Nós</S.MenuItem>
        <S.MenuItem>
          <ButtonKnewave size="sm" variant="PRIMARY">
            Publicar Trabalho
          </ButtonKnewave>
        </S.MenuItem>
        <S.MenuItem>
          <ButtonKnewave size="sm" variant="SECONDARY">
            Entrar
          </ButtonKnewave>
        </S.MenuItem>
        <S.Line></S.Line>
        <button>
          <S.ImagePadrao>
            <img
              height={25}
              width={25}
              src="/images/homeconfiguraciones.png"
              alt="my image"
            />
          </S.ImagePadrao>
        </button>
        <button>
          <S.ImagePadrao>
            <img
              height={25}
              width={25}
              src="/images/homebell.png"
              alt="my image"
            />
          </S.ImagePadrao>
        </button>

        <button>
          <S.ImagePadrao>
            <img
              height={44}
              width={44}
              src="/images/imghomepadrao.png"
              alt="my image"
            />
          </S.ImagePadrao>
        </button>
      </S.Wrapper>
    </S.Container>
  );
}
