import { Select } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import pt from "date-fns/locale/pt";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineDownload } from "react-icons/ai";
import { useDropzone } from "react-dropzone";

import { ButtonKnewave, Input } from "@/components";
import * as S from "./styles";

function updateJob() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file, key) => (
    <li key={key}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/editpage.png" />
      </S.ContainerImage>

      <S.ContainerInformation>
        <a href="#">Voltar</a>
        <h1>Preencha os Campos</h1>
        <p>Edite o os campos desejados e salve no final da página</p>

        <S.ContainerInformationDosBang>
          <S.ContainerLine>
            <Input
              label="Título do Trabalho*"
              placeholder="Insira o nome"
              type="text"
              required
            />

            <S.ContainerMini>
              <h3>Tipo de trabalho*</h3>
              <Select placeholder="Selecione">
                <option value="option1">Cursando</option>
                <option value="option2">Graduado</option>
                <option value="option3">Pós-graduado</option>
                <option value="option3">Mestrado</option>
                <option value="option3">Doutorado</option>
              </Select>
            </S.ContainerMini>
          </S.ContainerLine>
        </S.ContainerInformationDosBang>
        <S.ContainerInformationDosBang>
          <S.ContainerLine>
            <S.ContainerMini>
              <h3>Curso*</h3>
              <Select placeholder="Selecione">
                <option value="option1">Cursando</option>
                <option value="option2">Graduado</option>
                <option value="option3">Pós-graduado</option>
                <option value="option3">Mestrado</option>
                <option value="option3">Doutorado</option>
              </Select>
            </S.ContainerMini>
            <S.ContainerMini>
              <h3>Disciplina*</h3>
              <Select placeholder="Selecione">
                <option value="option1">Cursando</option>
                <option value="option2">Graduado</option>
                <option value="option3">Pós-graduado</option>
                <option value="option3">Mestrado</option>
                <option value="option3">Doutorado</option>
              </Select>
            </S.ContainerMini>
            <S.ContainerMini>
              <Input
                label="Tema*"
                placeholder="Digite o Tema"
                type="text"
                required
              />
            </S.ContainerMini>
          </S.ContainerLine>
        </S.ContainerInformationDosBang>

        <S.ContainerLine></S.ContainerLine>
        <S.ContainerMini>
          <h3>Instruções*</h3>
          <textarea
            name=""
            id=""
            rows={5}
            placeholder="Ex: escreva sobre o trabalho"
          ></textarea>
        </S.ContainerMini>

        <S.ContainerLine>
          <Input
            label="Número de Páginas"
            placeholder="Quantidade"
            type="text"
            required
          />
          <Input
            label="Número de Palavras"
            placeholder="Quantidade"
            type="text"
            required
          />
        </S.ContainerLine>

        <h1>Informações de Entrega</h1>

        <S.InputsContainer>
          <div>
            <label>
              Data de entrega solicitada pelo professor<span>*</span>
            </label>
            <DatePicker
              name="date_limit"
              selected={new Date()}
              onChange={() => {}}
              locale={pt}
              placeholderText="Selecione a Data"
              minDate={new Date()}
              showTimeSelect
              // showTimeInput
              // timeFormat="90"
              // timeCaption="32"
              // showTimeSelectOnly
            />
          </div>
          <div>
            <label>Nossa previsão de entrega</label>
            <DatePicker
              selected={new Date()}
              onChange={() => {}}
              locale={pt}
              placeholderText="Selecione a Data"
              minDate={new Date()}
              disabled
            />
          </div>
        </S.InputsContainer>
        <p>
          Conforme previsão acima, a entrega do seu trabalho é efetuada com
          grande antecedência. Isso porque, o estudante tem direito de solicitar
          as alterações que desejar, após a entrega. A previsão é calculada com
          base no dia do pagamento do trabalho, logo após o interesse do
          redator, portanto, pode variar.
        </p>
        <h1>Informações Extras</h1>

        <S.InputsContainer>
          <div>
            <Input
              label="Máximo de Plágio Aceitável"
              placeholder="Insira o Valor"
              type="text"
              required
            />
          </div>
          <S.ContainerMini>
            <h3>Formato de Trabalho</h3>
            <Select placeholder="Selecione">
              <option value="option1">Cursando</option>
              <option value="option2">Graduado</option>
              <option value="option3">Pós-graduado</option>
              <option value="option3">Mestrado</option>
              <option value="option3">Doutorado</option>
            </Select>
          </S.ContainerMini>
          <div></div>
        </S.InputsContainer>
        <S.InputsContainer>
          <div>
            <Input
              label="Disposto a Pagar"
              placeholder="Insira o Valor"
              type="text"
              required
            />
          </div>
          <S.ContainerMini>
            <div>
              <Input
                label="Valor pago ao Redator"
                placeholder="R$"
                type="text"
                required
                disabled
              />
            </div>
          </S.ContainerMini>
          <div></div>
        </S.InputsContainer>

        <S.ContainerMini>
          <h3>Observações</h3>
          <textarea
            name=""
            id=""
            rows={5}
            placeholder="Ex: Espaço para adicionar algum comentário, dica ou pedido ao redator."
          ></textarea>
        </S.ContainerMini>
        <S.ContainerMini>
          <h3>Anexar Arquivos</h3>
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
          </section>
        </S.ContainerMini>

        <ButtonKnewave variant="PRIMARY" size="sm">
          Próximo
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

export default updateJob;
