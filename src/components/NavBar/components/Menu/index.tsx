import { useState } from "react";
import { MdSegment, MdClose } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import { ButtonKnewave } from "@/components/ButtonKnewave";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

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
        <Link href="/proposalstudentstep1" passHref>
          <ButtonKnewave variant="PRIMARY" size="sm" onClick={handleOpen}>
            Publicar Trabalho
          </ButtonKnewave>
        </Link>
        <Link href="/login" passHref>
          <ButtonKnewave variant="SECONDARY" size="sm" onClick={handleOpen}>
            Entrar
          </ButtonKnewave>
        </Link>

        <S.Title>Menu</S.Title>
        <Link href="/urgent-works" passHref>
          <S.SubTitle onClick={handleOpen}>Urgentes</S.SubTitle>
        </Link>
        <Link href="/all-works" passHref>
          <S.SubTitle onClick={handleOpen}>Trabalhos</S.SubTitle>
        </Link>
        <Link href="/#about" passHref>
          <S.SubTitle onClick={handleOpen}>Sobre Nós</S.SubTitle>
        </Link>
        <Link
          href="https://deixaqueeufaco.notion.site/Como-podemos-ajudar-1105738216d84a37aa57233b1d495c8d"
          passHref
        >
          <a target="_blank" onClick={handleOpen}>
            <S.SubTitle>FAQ</S.SubTitle>
          </a>
        </Link>
      </S.Container>
    </>
  );
}

export { Menu };
