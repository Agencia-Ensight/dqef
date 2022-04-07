import { MdSegment, MdClose } from "react-icons/md";
import Image from "next/image";

import { useState } from "react";
import * as S from "./styles";
import { ButtonKnewave } from "../../../ButtonKnewave";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen((oldIsOpen) => !oldIsOpen);
  }

  return (
    <>
      <S.Wrapper visible={isOpen}>
        <Image
          src="/images/logo-mobile.png"
          alt="DQEF"
          width={60}
          height={60}
        />
        <a onClick={handleOpen}>
          {isOpen ? (
            <MdClose size={40} color="black" />
          ) : (
            <MdSegment size={40} color="#42A4EF" />
          )}
        </a>
      </S.Wrapper>
      <S.Container visible={isOpen}>
        <Image
          src="/images/logo-text.png"
          width={300}
          height={60}
          quality={100}
        />
        <S.Title>Conta</S.Title>
        <ButtonKnewave variant="PRIMARY" size="sm">
          Publicar Trabalho
        </ButtonKnewave>
        <ButtonKnewave variant="SECONDARY" size="sm">
          Entrar
        </ButtonKnewave>
        <S.Title>Menu</S.Title>
        <S.SubTitle>Urgentes</S.SubTitle>
        <S.SubTitle>Trabalhos</S.SubTitle>
        <S.SubTitle>Sobre Nós</S.SubTitle>
      </S.Container>
    </>
  );
}
