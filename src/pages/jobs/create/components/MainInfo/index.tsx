import { useRouter } from "next/router";

import { Input, ComboboxComp } from "@/components";

import * as S from "./styles";

const fruits = [
  { id: 1, name: "banana" },
  { id: 2, name: "maca" },
];

function MainInfo() {
  const router = useRouter();
  return (
    <>
      <S.BackButton onClick={() => router.back()}>Voltar</S.BackButton>
      <S.HeaderContainer>
        <S.Title>Preencha os Campos</S.Title>
        <S.Steps>1 de 3</S.Steps>
      </S.HeaderContainer>

      <p>Para publicar seu trabalho, insira as seguintes informações.</p>
      <S.DangerText>
        Atenção! É expressamente proibido o compartilhamento de informações
        pessoais entre os usuários. Tal prática está sujeita ao banimento
        imediato de ambos os usuários por tempo indeterminado da plataforma.
      </S.DangerText>
      <S.InputFields>
        <S.FirstInputContainer>
          <Input
            label="Título do trabalho"
            name="title"
            placeholder="Insira o título"
            mandatory={true}
            required
          />

          <ComboboxComp
            label="Tipo do Trabalho"
            onSelectedChange={() => {}}
            list={fruits}
          />
        </S.FirstInputContainer>
        <S.TextInputContainer>
          <ComboboxComp
            label="Curso do Trabalho"
            onSelectedChange={() => {}}
            list={fruits}
          />
          <ComboboxComp
            label="Disciplina do Trabalho"
            onSelectedChange={() => {}}
            list={fruits}
          />

          <Input
            className="type-of-work"
            placeholder="Tema do Trabalho"
            label="Tema do Trabalho"
            mandatory={true}
            required
            name="theme"
          />
        </S.TextInputContainer>
        <label>
          Instruções<span>*</span>
        </label>
        <textarea
          name="instructions"
          id="instructions"
          rows={5}
          placeholder="ex: Descrição do que deve ser feito no trabalho. Explique de forma objetiva e clara, tudo que o redator deverá realizar para você. Coloque as informações importantes para o melhor entendimento do trabalho."
        ></textarea>
        <S.LastInputs>
          <Input
            label="Número de páginas"
            placeholder="Quantidade"
            type="number"
            name="pages"
          />
          <Input
            label="Número de palavras"
            placeholder="Quantidade"
            name="words"
            type="number"
          />
        </S.LastInputs>
      </S.InputFields>
    </>
  );
}

export { MainInfo };
