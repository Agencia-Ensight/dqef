import { ButtonKnewave } from "../../../../components/ButtonKnewave";
import { ButtonAlert } from "./components/ButtonAlert";
import * as S from "./styles";

export function ModalDone() {
  return (
    <>
      <S.Description>
        Como está o andamento do trabalho? Selecione as opções abaixo! Lembrando
        que o prazo final para entrega é dia XX às xxhrs.
      </S.Description>
      <S.ButtonDiv>
        <ButtonAlert variant="SUCCESS">
          Tudo certo! Entregarei dentro do prazo!
        </ButtonAlert>
      </S.ButtonDiv>
      <S.ButtonDiv>
        <ButtonAlert variant="WARNING">
          Estou com dificuldade, preciso de mais tempo!
        </ButtonAlert>
      </S.ButtonDiv>
      <S.ButtonDiv>
        <ButtonAlert variant="ERROR">Não vou conseguir realizar!</ButtonAlert>
      </S.ButtonDiv>
      <S.ButtonDiv>
        <ButtonKnewave variant="PRIMARY" size="lg">
          Continuar
        </ButtonKnewave>
      </S.ButtonDiv>
    </>
  );
}
