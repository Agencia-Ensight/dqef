import ReactDOM from "react-dom";

import { ModalProps } from "./typings";

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from "./styles";

function Modal({ children, close, show, title }: ModalProps) {
  const modal = (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>{title}</HeaderText>
            <CloseButton onClick={close}>X</CloseButton>
          </Header>
          <Content>{children}</Content>
        </StyledModal>
      </Wrapper>
    </>
  );

  return show ? ReactDOM.createPortal(modal, document.body) : null;
}

export { Modal };
