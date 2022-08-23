import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { MdSegment, MdClose } from "react-icons/md";

import { ButtonKnewave } from "@/components";
import { useUser, useModal } from "@/contexts";
import { ModalHoldOn } from "../ModalHoldOn";

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
            <Link href="/jobs/create" passHref>
              <ButtonKnewave variant="PRIMARY" size="sm" onClick={handleOpen}>
                Publicar Trabalho
              </ButtonKnewave>
            </Link>
            <Link href="/profile" passHref>
              <S.SubTitle onClick={handleOpen}>Meu Perfil</S.SubTitle>
            </Link>
            <Link href="/notifications" passHref>
              <S.SubTitle onClick={handleOpen}>Notificações</S.SubTitle>
            </Link>
            <Link href="/config" passHref>
              <S.SubTitle onClick={handleOpen}>Editar Perfil</S.SubTitle>
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
          <ButtonKnewave variant="SECONDARY" size="sm" onClick={signOut}>
            Sair
          </ButtonKnewave>
        )}
      </S.Container>
    </>
  );
}

export { Menu };
