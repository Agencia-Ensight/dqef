import { ButtonKnewave, Input, ComboboxComp } from "@/components";
import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

import * as S from "./styles";

const fruits = [
  { id: 1, name: "banana" },
  { id: 2, name: "maca" },
];

function AdditionalInfo() {
  return (
    <>
      <S.HeaderContainer>
        <S.Title>Últimos Ajustes</S.Title>
        <S.Steps>3 de 3</S.Steps>
      </S.HeaderContainer>
      <p>Insira os detalhes finais antes de publicar.</p>
      <S.InputFields>
        <S.FirstInputContainer>
          <Input
            label="Máximo de Plágio Aceitável"
            placeholder="Insira o Valor"
            mandatory={false}
            required
            type="number"
            name="maximum_plagiarism"
            id="maximum_plagiarism"
          />
          <ComboboxComp
            label="Formato do Trabalho"
            list={fruits}
            onSelectedChange={() => {}}
          />
        </S.FirstInputContainer>
        <S.FirstInputContainer>
          <Input
            placeholder="Disposto a Pagar"
            label="Disposto a Pagar"
            mandatory={true}
            required
            name="value"
            type="number"
          />
          <Input
            label="Valor Pago ao Redator"
            mandatory={false}
            disabled
            name="value_pay"
          />
        </S.FirstInputContainer>
        <S.FirstInputContainer>
          <Input label="Cupom de desconto" mandatory={false} disabled />
        </S.FirstInputContainer>
        <label>
          Observações<span>*</span>
        </label>
        <textarea
          name="obs"
          id="obs"
          rows={2}
          placeholder="ex: Espaço para adicionar algum comentário, dica ou pedido ao redator."
        ></textarea>
        {/* <label>Anexar arquivos</label>
        <section className="container">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} name="attachments" />
            <S.IconContainer>
              <AiOutlineDownload size={35} color="#000" />
            </S.IconContainer>
          </div>
          <aside>
            <ul>{files}</ul>
          </aside>
        </section> */}
      </S.InputFields>
      <ButtonKnewave variant="PRIMARY" type="submit" size="sm">
        Publicar
      </ButtonKnewave>
    </>
  );
}

export { AdditionalInfo };
