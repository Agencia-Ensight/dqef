import Router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ButtonKnewave, Input, IRenderProps } from "@/components";
import { CreateUserEditorProps } from "../../[type]/typings";
import { schema } from "./schema";
import * as S from "./styles";

type IInfo = {
  type: "STUDENT" | "EDITOR";
} & IRenderProps;

function Info({ onComplete, type }: IInfo) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserEditorProps>({
    defaultValues: { cpf: undefined },
    resolver: yupResolver(schema),
  });

  function onSubmit(values: CreateUserEditorProps) {
    onComplete(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, (err) => console.log(err))}>
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
        {type === "EDITOR" && (
          <Input
            label="CPF"
            name="cpf"
            placeholder="teste@gmail.com"
            register={register}
            error={errors.cpf?.message}
          />
        )}
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
