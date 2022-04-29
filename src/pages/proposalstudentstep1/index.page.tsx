import { ButtonKnewave } from "../../components/ButtonKnewave";
import { Input } from "../../components/Input";
import { Select } from "@chakra-ui/react";

import { useRouter } from "next/router";

import * as S from "./styles";

export default function proposalstudentstep1() {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/proposalstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a onClick={() => router.back()}>Voltar</a>
        <S.HeaderContainer>
          <h1>Preencha os Campos</h1>
          <S.Steps>1 de 3</S.Steps>
        </S.HeaderContainer>

        <p>Para publicar seu trabalho, insira as seguintes informações.</p>
        <S.InputFields>
          <S.FirstInputContainer>
            <Input
              label="Título do trabalho"
              placeholder="Insira o título"
              mandatory={true}
              required
            />
            <S.SelectContainer>
              <label>
                Tipo do Trabalho<span>*</span>
              </label>
              <Select className="padrao" placeholder="Tipo do Trabalho">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </S.SelectContainer>
          </S.FirstInputContainer>
          <S.TextInputContainer>
            <S.SelectContainer>
              <label>
                Curso do Trabalho<span>*</span>
              </label>
              <Select className="padrao" placeholder="Curso do Trabalho">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </S.SelectContainer>
            <S.SelectContainer>
              <label>
                Disciplina do Trabalho<span>*</span>
              </label>
              <Select className="padrao" placeholder="Disciplina do Trabalho">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </S.SelectContainer>
            <Input
              className="type-of-work"
              placeholder="Tipo do Trabalho"
              label="Tipo do Trabalho"
              mandatory={true}
              required
            />
          </S.TextInputContainer>
          <label>
            Instruções<span>*</span>
          </label>
          <textarea
            name=""
            id=""
            rows={5}
            placeholder="ex: Descrição do que deve ser feito no trabalho. Explique de forma objetiva e clara, tudo que o redator deverá realizar para você. Coloque as informações importantes para o melhor entendimento do trabalho.
"
          ></textarea>
          <S.LastInputs>
            <Input
              label="Número de páginas"
              placeholder="Quantidade"
              required
            />
            <Input
              label="Número de palavras"
              placeholder="Quantidade"
              required
            />
          </S.LastInputs>
        </S.InputFields>
        <ButtonKnewave variant="PRIMARY" size="sm">
          Próximo
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
