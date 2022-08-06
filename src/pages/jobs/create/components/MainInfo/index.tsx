import { useRouter } from "next/router";

import { Input, ComboboxComp, ButtonKnewave } from "@/components";

import * as S from "./styles";
import { useCreateJob } from "../../CreateJobContext";
import { useForm } from "react-hook-form";
import { CreateJobProps } from "../../typings";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { FormEvent, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_COURSES,
  GET_FORMATS,
  GET_KNOWLEDGES,
  GET_KNOWLEDGES_BY_COURSE_ID,
} from "@/services/queries";

const fruits = [
  { id: 1, name: "banana" },
  { id: 2, name: "maca" },
];

function MainInfo() {
  const router = useRouter();
  const { data, updateData, updateStep } = useCreateJob();
  const [higher_course_id, setHigher_course_id] = useState(1);
  const courses = useQuery<{ higher_courses: any }>(GET_COURSES);
  const knowledges = useQuery<{ knowledges: any }>(
    GET_KNOWLEDGES_BY_COURSE_ID,
    {
      variables: {
        higher_course_id,
      },
    }
  );
  const formats = useQuery<{ job_formats: any }>(GET_FORMATS);

  const [title, setTitle] = useState("");
  const [pages, setPages] = useState(0);
  const [words, setWords] = useState(0);
  const [job_type_id, setJob_type_id] = useState(1);
  const [theme, setTheme] = useState("");
  const [instructions, setInstructions] = useState("");

  const [knowledge_id, setKnowledge_id] = useState(1);

  console.log(knowledges.data?.knowledges);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    updateData({
      title,
      pages,
      words,
      job_type_id,
      theme,
      instructions,
      higher_course_id,
      knowledge_id,
    });
    updateStep("select-date");
  }

  console.log(higher_course_id);
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
      <S.InputFields onSubmit={onSubmit}>
        <S.FirstInputContainer>
          <Input
            label="Título do trabalho"
            name="title"
            placeholder="Insira o título"
            mandatory={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <ComboboxComp
            label="Tipo do Trabalho"
            items={formats.data?.job_formats || []}
            onSelectedChange={(fruit) => setJob_type_id(fruit.id)}
          />
        </S.FirstInputContainer>
        <S.TextInputContainer>
          <ComboboxComp
            label="Curso do Trabalho"
            items={courses.data?.higher_courses || []}
            onSelectedChange={(item) => {
              setHigher_course_id(item.id);
            }}
          />

          <ComboboxComp
            label="Disciplina do Trabalho"
            items={knowledges.data?.knowledges || []}
            onSelectedChange={(item) => setKnowledge_id(item.id)}
          />

          <Input
            className="type-of-work"
            placeholder="Tema do Trabalho"
            label="Tema do Trabalho"
            mandatory={true}
            name="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            required
          />
        </S.TextInputContainer>
        <label>
          Instruções<span>*</span>
        </label>
        <textarea
          id="instructions"
          rows={5}
          value={instructions}
          required
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="ex: Descrição do que deve ser feito no trabalho. Explique de forma objetiva e clara, tudo que o redator deverá realizar para você. Coloque as informações importantes para o melhor entendimento do trabalho."
        ></textarea>
        <S.LastInputs>
          <Input
            label="Número de páginas"
            placeholder="Quantidade"
            type="number"
            name="pages"
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            required
          />
          <Input
            label="Número de palavras"
            placeholder="Quantidade"
            name="words"
            type="number"
            value={words}
            onChange={(e) => setWords(Number(e.target.value))}
            required
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
