import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup, Select } from "@chakra-ui/react";
import { Input } from "../../components/Input";

import DatePicker from "react-datepicker";
import pt from "date-fns/locale/pt";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Job } from "../../queries/jobs";

export default function editpage({ job }: { job?: Job }) {
  const [startDate, setStartDate] = useState(
    job?.date_limit ? new Date(job.date_limit) : new Date()
  );

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
              placeholder="Trabalho 1"
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
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
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
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              locale={pt}
              placeholderText="Selecione a Data"
              minDate={new Date()}
              disabled
            />
          </div>
        </S.InputsContainer>
        <p>Conforme previsão acima, a entrega do seu trabalho é efetuada com grande antecedência. Isso porque, o estudante tem direito de solicitar as alterações que desejar, após a entrega. A previsão é calculada com base no dia do pagamento do trabalho, logo após o interesse do redator, portanto, pode variar.</p>
        <h1>Informações Extras</h1>

        <S.ContainerInformationDosBang>
          <S.ContainerLine>
            <Input
              label="Máximo de plágio aceitável*"
              placeholder="Insira o valor"
              type="text"
              required
            />

            <S.ContainerMini>
              <h3>Formato do trabalho*</h3>
              <Select placeholder="Selecione">
                <option value="option1">Análise</option>
                <option value="option2">Apresentação</option>
                <option value="option3">Artigo Acadêmico</option>
                <option value="option4">Canvas</option>
                <option value="option5">Contrato</option>
                <option value="option6">Crítica</option>
                <option value="option7">Desenho Técnico</option>
                <option value="option8">Dissertação</option>
                <option value="option9">Ensaio</option>
                <option value="option10">Ensaio Acadêmico</option>
                <option value="option11">Estudo de Caso</option>
                <option value="option12">Fichamento</option>
                <option value="option13">Formatação</option>
                <option value="option14">Formulário</option>
                <option value="option15">Lista de Exercícios</option>
                <option value="option16">Mapa Mental</option>
                <option value="option17">Monografia</option>
                <option value="option18">Paper</option>
                <option value="option19">Parecer</option>
                <option value="option20">Peça Processual</option>
                <option value="option21">Pesquisa</option>
                <option value="option22">Planilha</option>
                <option value="option23">Plano de Negócio</option>
                <option value="option24">Planta Estrutural</option>
                <option value="option25">Programação</option>
                <option value="option26">Projeto de Pesquisa</option>
                <option value="option27">Projeto Integrador</option>
                <option value="option28">Quadro Comparativo</option>
                <option value="option29">Redação</option>
                <option value="option30">Relatório</option>
                <option value="option31">Resenha</option>
                <option value="option32">Resenha Crítica</option>
                <option value="option33">Resumo</option>
                <option value="option34">Revisão</option>
                <option value="option35">Revisão Bibliográfica</option>
                <option value="option36">Revisão de Artigo</option>
                <option value="option37">Seminário</option>
                <option value="option38">Vídeo</option>
                
              </Select>
            </S.ContainerMini>
          </S.ContainerLine>
        </S.ContainerInformationDosBang>
        <S.ContainerInformationDosBang>
          <S.ContainerLine>
            <S.ContainerMini>
            <Input
                label="Disposto a Pagar"
                placeholder="Insira o valor"
                type="text"
                required
              />
            </S.ContainerMini>
            <S.ContainerMini>
            <Input
                label="Valor Pago ao Redator"
                placeholder="R$"
                type="text"
                required
                disabled
              />
            </S.ContainerMini>
            <S.ContainerMiniPadrao>
          <h3>Observações*</h3>
          <textarea
            name=""
            id=""
            rows={5}
            placeholder="Ex: Espaço para adicionar algum comentário, dica ou pedido ao redator."
          ></textarea>
        </S.ContainerMiniPadrao>
            
          


          </S.ContainerLine>
        </S.ContainerInformationDosBang>
        
        
        <ButtonKnewave variant="PRIMARY" size="sm">
          Próximo
        </ButtonKnewave>
      </S.ContainerInformation>
    </S.Wrapper>
  );
}
