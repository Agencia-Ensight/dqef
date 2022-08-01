import { useRouter } from "next/router";

import { Input, ComboboxComp, ButtonKnewave } from "@/components";

import * as S from "./styles";
import { useCreateJob } from "../../CreateJobContext";
import { useForm } from "react-hook-form";
import { CreateJobProps } from "../../typings";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

const fruits = [
  { id: 1, name: "banana" },
  { id: 2, name: "maca" },
];

function MainInfo() {
  const router = useRouter();
  const { data, updateData, updateStep } = useCreateJob();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateJobProps>({
    defaultValues: data,
    resolver: yupResolver(schema),
  });

  function onSubmit(values: CreateJobProps) {
    updateData(values);
    updateStep("select-date");
  }

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
      <S.InputFields onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}>
        <S.FirstInputContainer>
          <Input
            label="Título do trabalho"
            name="title"
            error={errors.title?.message}
            placeholder="Insira o título"
            mandatory={true}
            register={register}
          />

          <ComboboxComp
            label="Tipo do Trabalho"
            onSelectedChange={() => {}}
            items={fruits}
          />
        </S.FirstInputContainer>
        <S.TextInputContainer>
          <ComboboxComp
            label="Curso do Trabalho"
            onSelectedChange={() => {}}
            items={fruits}
          />
          <ComboboxComp
            label="Disciplina do Trabalho"
            onSelectedChange={() => {}}
            items={fruits}
          />

          <Input
            className="type-of-work"
            placeholder="Tema do Trabalho"
            error={errors.theme?.message}
            label="Tema do Trabalho"
            mandatory={true}
            name="theme"
            register={register}
          />
        </S.TextInputContainer>
        <label>
          Instruções<span>*</span>
        </label>
        <textarea
          id="instructions"
          rows={5}
          placeholder="ex: Descrição do que deve ser feito no trabalho. Explique de forma objetiva e clara, tudo que o redator deverá realizar para você. Coloque as informações importantes para o melhor entendimento do trabalho."
          {...register("instructions")}
        ></textarea>
        <S.LastInputs>
          <Input
            label="Número de páginas"
            placeholder="Quantidade"
            error={errors.pages?.message}
            type="number"
            name="pages"
            register={register}
          />
          <Input
            label="Número de palavras"
            placeholder="Quantidade"
            error={errors.words?.message}
            name="words"
            type="number"
            register={register}
          />
        </S.LastInputs>
        <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
          Próximo
        </ButtonKnewave>
      </S.InputFields>
    </>
  );
}

export { MainInfo };
