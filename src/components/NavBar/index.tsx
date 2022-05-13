import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";
import { ButtonKnewave } from "../../components/ButtonKnewave";
import { Menu } from "./components/Menu";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useMemo } from "react";
import { Button } from "../Button";

export function NavBar() {
  const { isAuthenticated, setToken } = useContext(AuthContext)!;

  const getLoginOrLogout = useMemo(() => {
    const logout = () => {
      setToken(null);
      window.location.href = "/";
    };

    if (!isAuthenticated) {
      return (
        <Link href="/login" passHref>
          <S.MenuItem>
            <S.ButtonLogin className="login-button">Entrar</S.ButtonLogin>
          </S.MenuItem>
        </Link>
      );
    } else {
      return (
        <Link href="#" passHref>
          <S.MenuItem>
            <ButtonKnewave onClick={logout} size="sm" variant="SECONDARY">
              Sair
            </ButtonKnewave>
          </S.MenuItem>
        </Link>
      );
    }
  }, [isAuthenticated, setToken]);

  return (
    <S.MainWrapper>
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
          <Link href="/urgent-works" passHref>
            <S.MenuItem>Urgentes</S.MenuItem>
          </Link>
          <Link href="/all-works">
            <S.MenuItem>Trabalhos</S.MenuItem>
          </Link>
          <Link href="/#about">
            <S.MenuItem>Sobre Nós</S.MenuItem>
          </Link>
          <Link
            href="https://deixaqueeufaco.notion.site/Como-podemos-ajudar-1105738216d84a37aa57233b1d495c8d"
            passHref
          >
            <a target="_blank">
              <S.MenuItem>FAQ</S.MenuItem>
            </a>
          </Link>
          <S.MenuItem>
            <Link href="/proposalstudentstep1" passHref>
              <ButtonKnewave size="sm" variant="PRIMARY">
                Publicar Trabalho
              </ButtonKnewave>
            </Link>
          </S.MenuItem>
          {getLoginOrLogout}

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
    </S.MainWrapper>
  );
}
