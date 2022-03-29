import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, Select } from "@chakra-ui/react";
import { Input } from "../../components/Input";


export default function signinredatorstep2() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/signinredator.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            <a href="#">Voltar</a>
            <h1>Informações Extras</h1>
            <p>Insira alguns dados para completar o seu cadastro.</p>

            <S.InputContainer>
           <h3>Curso</h3> 
          <Select placeholder="Selecione da nossa lista">
            <option value="option1">Administração</option>
            <option value="option2">Agronegócio</option>
            <option value="option3">Agronomia</option>
            <option value="option4">Análise e Desenvolvimento de Sistemas</option>
            <option value="option5">Biomedicina</option>
            <option value="option6">Ciência da Computação</option>
            <option value="option7">Ciências Biológicas</option>
            <option value="option8">Ciências Contábeis</option>
            <option value="option9">Ciências Econômicas</option>
            <option value="option10">Design de Interiores</option>
            <option value="option11">Design do Produto</option>
            <option value="option12">Design Gráfico</option>
            <option value="option13">Direito</option>
            <option value="option14">Educação Física</option>
            <option value="option15">Enfermagem</option>
            <option value="option16">Engenharia Agronômica</option>
            <option value="option17">Engenharia Ambiental</option>
            <option value="option18">Engenharia Civil</option>
            <option value="option19">Engenharia de Alimentos</option>
            <option value="option20">Engenharia de Produção</option>
            <option value="option21">Engenharia de Software</option>
            <option value="option22">Engenharia de Telecomunicações</option>
            <option value="option23">Engenharia Elétrica</option>
            <option value="option24">Engenharia Mecânica</option>
            <option value="option25">Engenharia Química</option>
            <option value="option26">Farmácia</option>
            <option value="option27">Física</option>
            <option value="option28">Fisioterapia</option>
            <option value="option29">Fonoaudiologia</option>
            <option value="option30">História</option>
            <option value="option31">Jornalismo</option>
            <option value="option32">Letras</option>
            <option value="option33">Marketing</option>
            <option value="option34">Matemática</option>
            <option value="option35">Medicina</option>
            <option value="option36">Medicina Veterinária</option>
            <option value="option37">Nutrição</option>
            <option value="option38">Odontologia</option>
            <option value="option39">Pedagogia</option>
            <option value="option40">Psicologia</option>
            <option value="option41">Publicidade e Propaganda</option>
            <option value="option42">Química</option>
            <option value="option43">Recursos Humanos</option>
            <option value="option44">Relações Internacionais</option>
            <option value="option45">Serviço Social</option>
            <option value="option46">Sistemas de Informação</option>
            
          </Select>
          <h3>Áreas de conhecimento</h3> 
          <Select placeholder="Selecione da nossa lista">
            <option value="option1">Administração</option>
            <option value="option2">Agronegócio</option>
            <option value="option3">Agronomia</option>
           
          </Select>

          <h3>Formação</h3> 
          <Select placeholder="Selecione">
            <option value="option1">Cursando</option>
            <option value="option2">Graduado</option>
            <option value="option3">Pós-graduado</option>
            <option value="option3">Mestrado</option>
            <option value="option3">Doutorado</option>
          </Select>
          <Input label="CPF" placeholder="000.000.000-00" />
          <Input label="Forma de Pagamento" placeholder="Insira o seu Pix" />
        </S.InputContainer>
            <S.ContainerDoBang>
            <Checkbox defaultChecked>Aceitar Termos de Uso</Checkbox>
            </S.ContainerDoBang>
            <S.ContainerDoBang>
            <Checkbox defaultChecked>Aceitar Políticas de Privacidade</Checkbox>
            </S.ContainerDoBang>
            <ButtonKnewave variant="PRIMARY" size="sm" >Confirmar e-mail</ButtonKnewave>
            </S.ContainerInformation>
        
                        



        </S.Wrapper>
    )
    }
