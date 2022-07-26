import Router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonKnewave, Input } from "@/components";
import { CreateUserEditorProps } from "../../typings";
import { schema } from "./schema";
import { useEditor } from "../../EditorContext";
import * as S from "./styles";

function Info() {
  const { data, updateData, updateStep } = useEditor();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserEditorProps>({
    defaultValues: data,
    resolver: yupResolver(schema),
  });

  function onSubmit(values: CreateUserEditorProps) {
    updateData(values);
    updateStep("aditional-info");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <a onClick={Router.back}>Voltar</a>
      <h1>Preencha os Campos</h1>
      <p>Vamos enviar um e-mail para você, para confirmar a sua identidade.</p>
      <S.InputContainer>
        <Input
          label="Nome completo"
          name="name"
          placeholder="Insira o seu nome"
          type="text"
          register={register}
          error={errors.name?.message}
        />
        <Input
          label="Email"
          name="email"
          placeholder="teste@gmail.com"
          register={register}
          error={errors.email?.message}
        />
        <Input
          label="CPF"
          name="cpf"
          placeholder="teste@gmail.com"
          register={register}
          error={errors.cpf?.message}
        />
        <Input
          label="Crie sua senha"
          name="password"
          placeholder="Insira sua senha"
          type="password"
          register={register}
          error={errors.password?.message}
        />
        <Input
          label="Confirme sua senha"
          name="confirmPassword"
          placeholder="Repita ela"
          type="password"
          register={register}
          error={errors.confirmPassword?.message}
        />
        <Input
          label="Telefone para contato"
          name="phone"
          placeholder="99 99999-9999"
          register={register}
          error={errors.phone?.message}
        />
      </S.InputContainer>
      <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
        Próximo
      </ButtonKnewave>
    </form>
  );
}

export { Info };
