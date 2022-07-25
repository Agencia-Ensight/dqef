import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import { ButtonKnewave, Menu } from "@/components";
import { useUser } from "@/contexts";

function NavBar() {
  const { user, signOut } = useUser();

  const getLoginOrLogout = useMemo(() => {
    if (!user) {
      return (
        <Link href="/sign-in" passHref>
          <S.MenuItem>
            <S.ButtonLogin className="login-button">Entrar</S.ButtonLogin>
          </S.MenuItem>
        </Link>
      );
    }

    return (
      <S.MenuItem>
        <ButtonKnewave size="sm" variant="SECONDARY" onClick={signOut}>
          Sair
        </ButtonKnewave>
      </S.MenuItem>
    );
  }, [user]);

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
          <Link href="/jobs/urgents" passHref>
            <S.MenuItem>Urgentes</S.MenuItem>
          </Link>
          <Link href="/jobs">
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
            <Link href="/proposal" passHref>
              <ButtonKnewave size="sm" variant="PRIMARY">
                Publicar Trabalho
              </ButtonKnewave>
            </Link>
          </S.MenuItem>

          {getLoginOrLogout}

          <S.Line />
          <Link href="/config">
            <S.ImageDefault>
              <img
                height={25}
                width={25}
                src="/images/homeconfiguraciones.png"
                alt="my image"
              />
            </S.ImageDefault>
          </Link>
          <Link href="/notifications">
            <S.ImageDefault>
              <img
                height={25}
                width={25}
                src="/images/homebell.png"
                alt="my image"
              />
            </S.ImageDefault>
          </Link>

          <Link href="/profile">
            <S.ImageDefault>
              <img
                height={44}
                width={44}
                src="/images/imghomepadrao.png"
                alt="my image"
              />
            </S.ImageDefault>
          </Link>
        </S.Wrapper>
      </S.Container>
      <Menu />
    </S.MainWrapper>
  );
}

export { NavBar };
