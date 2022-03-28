import { ButtonKnewave } from "../../components/ButtonKnewave";
import { Input } from "../../components/Input";
import * as S from "./styles";

export default function signinstudentstep3() {
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a href="#">Voltar</a>
        <h1>Confirme o seu e-mail</h1>
        <p>
          Vamos enviar um e-mail para você, para confirmar a sua identidade.
        </p>
        <S.InputContainer>
          <Input placeholder="Insira seu email" />
        </S.InputContainer>
        <ButtonKnewave variant="PRIMARY" size="sm">
          Enviar Código
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
