import Router from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { ButtonKnewave, Input, ComboboxComp, MultiSelect } from "@/components";

import { schema } from "./schema";
import * as S from "./styles";
import { useToast, useUser } from "@/contexts";
import { ProfileProps } from "../typings";
import { CreateUserEditorProps } from "@/pages/sign-up/editor/typings";

function EditorEditProfile({
  higher_courses,
  formations,
  knowledges,
}: ProfileProps) {
  const { updateUser, user } = useUser();
  const { addToast } = useToast();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Partial<CreateUserEditorProps>>({
    resolver: yupResolver(schema),
    defaultValues: user,
  });

  async function onSubmit(data: Partial<CreateUserEditorProps>) {
    try {
      await updateUser({
        type: "EDITOR",
        ...data,
      });
      addToast({ type: "success", msg: "Perfil atualizado com sucesso" });
    } catch (err) {
      addToast({
        type: "error",
        msg: "Erro ao atualizar perfil, tente novamente mais tarde",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <a onClick={Router.back}>Voltar</a>
      <h1>Preencha os Campos</h1>
      <p>Edite o os campos desejados e salve no final da página</p>

      <S.ContainerInformationDosBang>
        <S.ContainerLine>
          <S.ContainerMini>
            <Input
              label="Nome Completo"
              placeholder="Seu nome..."
              name="name"
              type="text"
              error={errors.name?.message}
              register={register}
            />
          </S.ContainerMini>
          <S.ContainerMini>
            <Input
              label="E-mail"
              placeholder="teste@gmail.com"
              name="email"
              type="text"
              error={errors.email?.message}
              register={register}
            />
          </S.ContainerMini>
        </S.ContainerLine>
      </S.ContainerInformationDosBang>
      <S.ContainerInformationDosBang>
        <S.ContainerLine>
          <S.ContainerMini>
            <Input
              label="CPF"
              placeholder="129.189.287-98"
              name="cpf"
              type="text"
              error={errors.cpf?.message}
              register={register}
            />
          </S.ContainerMini>
          <S.ContainerMini>
            <ComboboxComp
              items={higher_courses}
              label="Curso"
              onSelectedChange={() => {}}
            />
          </S.ContainerMini>
          <S.ContainerMini>
            <ComboboxComp
              items={formations}
              label="Formação"
              onSelectedChange={() => {}}
            />
          </S.ContainerMini>
        </S.ContainerLine>
      </S.ContainerInformationDosBang>

      <S.ContainerLine>
        <S.SpecialOne>
          <h3>Áreas de conhecimento</h3>
          <MultiSelect
            options={knowledges.map((knowledge) => ({
              ...knowledge,
              label: knowledge.name,
            }))}
            id="knowledges"
            name="knowledges"
            onChange={() => {}}
          />
        </S.SpecialOne>
      </S.ContainerLine>
      <S.ContainerLine>
        <S.SpecialOne>
          <Input
            label="Dados bancários para Pagamento"
            placeholder="Pix"
            type="text"
            register={register}
          />
        </S.SpecialOne>
      </S.ContainerLine>

      <S.ContainerInformationDosBang>
        <S.ContainerLine>
          <S.ContainerMini>
            <Input
              label="Telefone"
              name="phone"
              placeholder="+55 41 995556667"
              type="text"
              error={errors.phone?.message}
              register={register}
            />
          </S.ContainerMini>
        </S.ContainerLine>
      </S.ContainerInformationDosBang>

      <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
        Salvar
      </ButtonKnewave>
    </form>
  );
}

export { EditorEditProfile };
