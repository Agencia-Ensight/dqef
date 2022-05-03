import { ButtonKnewave } from "../../components/ButtonKnewave";
import { useRouter } from "next/router";

import { Input } from "../../components/Input";
import { Select } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

import * as S from "./styles";

export default function proposalstudentstep3() {
  const router = useRouter();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file, key) => (
    <li key={key}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/proposalstudent.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a onClick={() => router.back()}>Voltar</a>
        <S.HeaderContainer>
          <h1>Últimos Ajustes</h1>
          <S.Steps>3 de 3</S.Steps>
        </S.HeaderContainer>
        <p>Insira os detalhes finais antes de publicar.</p>
        <S.InputFields>
          <S.FirstInputContainer>
            <Input
              label="Máximo de Plágio Aceitável"
              placeholder="Insira o Valor"
              mandatory={true}
              required
              type="number"
            />
            <S.SelectContainer>
              <label>
                Formato do Trabalho<span>*</span>
              </label>
              <Select className="padrao" placeholder="Selecione o Formato">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </S.SelectContainer>
          </S.FirstInputContainer>
          <S.FirstInputContainer>
            <Input
              placeholder="Disposto a Pagar"
              label="Disposto a Pagar"
              mandatory={true}
              required
            />
            <Input
              placeholder="R$"
              label="Valor Pago ao Redator"
              mandatory={false}
              disabled
            />
          </S.FirstInputContainer>
          <S.FirstInputContainer>
            <Input label="Cupom de desconto" mandatory={false} disabled />
          </S.FirstInputContainer>
          <label>
            Observações<span>*</span>
          </label>
          <textarea
            name=""
            id=""
            rows={2}
            placeholder="ex: Espaço para adicionar algum comentário, dica ou pedido ao redator."
          ></textarea>

          <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        </S.InputFields>
        <ButtonKnewave variant="PRIMARY" size="sm">
          Publicar
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
