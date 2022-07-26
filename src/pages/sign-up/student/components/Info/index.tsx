import Router from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { ButtonKnewave, Input } from "@/components";
import { useStudent } from "../../StudentContext";
import { CreateUserStudentProps } from "../../typings";
import { schema } from "./schema";
import * as S from "./styles";

function Info() {
  const { data, updateData, updateStep } = useStudent();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserStudentProps>({
    defaultValues: data,
    resolver: yupResolver(schema),
  });

  function onSubmit(values: CreateUserStudentProps) {
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
          placeholder="Insira o seu nome"
          error={errors.name?.message}
          name="name"
          register={register}
        />
        <Input
          label="E-mail"
          placeholder="teste@gmail.com"
          error={errors.email?.message}
          name="email"
          register={register}
        />
        <Input
          label="CPF"
          placeholder="Aqui vai o seu CPF"
          error={errors.cpf?.message}
          name="cpf"
          register={register}
        />
        <Input
          label="Crie sua senha"
          placeholder="Insira sua senha"
          type="password"
          name="password"
          error={errors.password?.message}
          register={register}
        />
        <Input
          label="Confirme sua senha"
          placeholder="Repita ela"
          type="password"
          name="confirmPassword"
          error={errors.confirmPassword?.message}
          register={register}
        />

        <Input
          label="Telefone para contato"
          placeholder="99 99999-9999"
          error={errors.phone?.message}
          name="phone"
          register={register}
        />
      </S.InputContainer>
      <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
        Próximo
      </ButtonKnewave>
    </form>
  );
}

export { Info };
