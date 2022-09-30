import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { MdSegment, MdClose } from "react-icons/md";

import { ButtonKnewave } from "@/components";
import { useUser, useModal } from "@/contexts";
import { ModalHoldOn } from "../ModalHoldOn";
import {useRouter} from "next/router"

import * as S from "./styles";

function Menu() {
  const { user, signOut } = useUser();
  const { open } = useModal();

  const [isOpen, setIsOpen] = useState(false);

  function handlePublishJob() {
    open("Calma lá!", { content: () => <ModalHoldOn /> });
    setIsOpen((oldIsOpen) => !oldIsOpen);
  }

  const getLoginOrLogout = useMemo(() => {
    if (!user) {
      return (
        <Link href="/sign-in" passHref>
          <ButtonKnewave variant="SECONDARY" size="sm" onClick={handleOpen}>
            Entrar
          </ButtonKnewave>
        </Link>
      );
    }

    return;
  }, [user]);

  function handleOpen() {
    setIsOpen((oldIsOpen) => !oldIsOpen);
  }

  const router = useRouter()

  useEffect(() => {
    setIsOpen(false)
  }, [router.asPath])

  return (
    <>
      <S.Wrapper visible={isOpen}>
        <Link href="/" passHref>
          <Image
            src="/images/logo-mobile.png"
            alt="DQEF"
            width={60}
            height={60}
          />
        </Link>

        <a onClick={handleOpen}>
          {isOpen ? (
            <MdClose size={40} color="black" />
          ) : (
            <MdSegment size={40} color="#42A4EF" />
          )}
        </a>
      </S.Wrapper>
      <S.Container visible={isOpen}>
        <Link href="/" passHref>
          <Image
            src="/images/logo-text.png"
            width={300}
            height={60}
            quality={100}
          />
        </Link>
        <S.Title>Conta</S.Title>
        {user && (
          <>
            <Link href="/profile" passHref>
              <S.ProfileContainer>
                <img src="/images/imghomepadrao.png" />
                <h2>{user.name}</h2>
              </S.ProfileContainer>
            </Link>

          </>
        )}
        {user && user.type == "STUDENT" && (
          <Link href="/jobs/create" passHref>
            <ButtonKnewave size="sm" variant="PRIMARY">
              Publicar Trabalho
            </ButtonKnewave>
          </Link>
        )}

        {!user && (
          <ButtonKnewave size="sm" variant="PRIMARY" onClick={handlePublishJob}>
            Publicar Trabalho
          </ButtonKnewave>
        )}

        {getLoginOrLogout}

        <S.Title>Menu</S.Title>
        <Link href="/jobs/urgents" passHref>
          <S.SubTitle onClick={handleOpen}>Urgentes</S.SubTitle>
        </Link>
        <Link href="/jobs" passHref>
          <S.SubTitle onClick={handleOpen}>Trabalhos</S.SubTitle>
        </Link>
        <Link href="/#about" passHref>
          <S.SubTitle onClick={handleOpen}>Sobre Nós</S.SubTitle>
        </Link>
        <Link href="#" passHref>
          <S.SubTitle onClick={handleOpen}>TCC</S.SubTitle>
        </Link>

        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleOpen}
          href="https://deixaqueeufaco.notion.site/Como-podemos-ajudar-1105738216d84a37aa57233b1d495c8d"
        >
          <S.SubTitle>FAQ</S.SubTitle>
        </a>

        {user && (
          <S.ExtraInfoContainer>
             <Link href="/notifications" passHref>
              <img
                height={25}
                width={25}
                src="/images/homebell.png"
                alt="my image"
              />
            </Link>
            
             <Link href="/config" passHref>
             <img
              height={25}
              width={25}
              src="/images/homeconfiguraciones.png"
              alt="my image"
            />
            </Link>
            
          </S.ExtraInfoContainer>
        )}

        {user && (
          <div>
            <ButtonKnewave variant="SECONDARY" size="sm" onClick={signOut}>
              Sair
            </ButtonKnewave>
          </div>

        )}
      </S.Container>
    </>
  );
}

export { Menu };
