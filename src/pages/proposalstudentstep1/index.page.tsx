import { ButtonKnewave } from "../../components/ButtonKnewave";
import { Input } from "../../components/Input";
import { Select } from "@chakra-ui/react";

import * as S from "./styles";

export default function proposalstudentstep1() {
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/proposalstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <h3>Voltar</h3>
        <h1>Preencha os Campos</h1>
        <p>Para publicar seu trabalho, insira as seguintes informações.</p>
        <S.InputFields>
          <S.FirstInputContainer>
            <Input
              label="Título do trabalho"
              placeholder="Insira o título"
              required
            />
            <div>
              <label>Título do trabalho</label>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
          </S.FirstInputContainer>
          <S.SecondInputContainer>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Input
              label="Tema do trabalho"
              placeholder="Digite o Tema"
              required
            />
          </S.SecondInputContainer>
          <S.SecondInputContainer></S.SecondInputContainer>
        </S.InputFields>
        <ButtonKnewave variant="PRIMARY" size="sm">
          Próximo
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
