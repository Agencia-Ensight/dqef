import { useRouter } from "next/router";

import { ButtonKnewave, Input, ComboboxComp } from "@/components";

import * as S from "./styles";

const fruits = [
  { id: 1, name: "banana" },
  { id: 2, name: "maca" },
];

function EditorEditProfile() {
  const router = useRouter();
  return (
    <form>
      <a onClick={() => router.back()}>Voltar</a>
      <h1>Preencha os Campos</h1>
      <p>Edite o os campos desejados e salve no final da página</p>

      <S.ContainerInformationDosBang>
        <S.ContainerLine>
          <S.ContainerMini>
            <Input
              label="Nome Completo"
              placeholder="Bruno Vencato"
              name="name"
              type="text"
              required
            />
          </S.ContainerMini>
          <S.ContainerMini>
            <Input
              label="E-mail"
              placeholder="teste@gmail.com"
              name="email"
              type="text"
              required
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
              required
            />
          </S.ContainerMini>
          <S.ContainerMini>
            <ComboboxComp
              items={fruits}
              label="Curso"
              onSelectedChange={() => {}}
            />
          </S.ContainerMini>
          <S.ContainerMini>
            <ComboboxComp
              items={fruits}
              label="Formação"
              onSelectedChange={() => {}}
            />
          </S.ContainerMini>
        </S.ContainerLine>
      </S.ContainerInformationDosBang>

      <S.ContainerLine>
        <S.SpecialOne>
          <Input
            label="Áreas de Conhecimento"
            placeholder="Tags aqui"
            type="text"
            required
          />
        </S.SpecialOne>
      </S.ContainerLine>
      <S.ContainerLine>
        <S.SpecialOne>
          <Input
            label="Dados bancários para Pagamento"
            placeholder="Pix"
            type="text"
            required
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
              required
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
