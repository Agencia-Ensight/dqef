import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import { Modal } from "../../../../components/Modal";
import { useModal } from "../../../../hooks/useModal";
import { ModalAlright } from "../ModalAlright";
import { ModalWontFinish } from "../ModalWontFinish";
import { ButtonAlert } from "./components/ButtonAlert";
import * as S from "./styles";

export function ModalDone() {
  const { isShown, toggle } = useModal();
  const { isShown:isShown2, toggle:toggle2 } = useModal();

  return (
    <>
      <S.Description>
        Como está o andamento do trabalho? Selecione as opções abaixo! Lembrando
        que o prazo final para entrega é dia XX às xxhrs.
      </S.Description>
      <S.ButtonDiv>
        <ButtonAlert  variant="SUCCESS">
          Tudo certo! Entregarei dentro do prazo!
        </ButtonAlert>
      </S.ButtonDiv>
      <S.ButtonDiv>
      
        <ButtonAlert onClick={toggle} variant="WARNING">
          Estou com dificuldade, preciso de mais tempo!
        </ButtonAlert>
        <Modal
          isShown={isShown}
          hide={toggle}
          headerText=""
          modalContent={<ModalAlright/>}
        />
    
      </S.ButtonDiv>
      <S.ButtonDiv>
        <ButtonAlert onClick={toggle2} variant="ERROR">Não vou conseguir realizar!</ButtonAlert>
        <Modal
          isShown={isShown2}
          hide={toggle2}
          headerText=""
          modalContent={<ModalWontFinish/>}
        />
      </S.ButtonDiv>
      
    </>
  );
}
