import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, Select } from "@chakra-ui/react";
import { Input } from "../../components/Input";
import Router from "next/router";
import { MultiStepForm } from "../../components/MultiStepForm";

export default function signinredatorstep2() {
  return (
    <S.Wrapper>
      <S.ContainerImage>
        <S.Image src="/images/signinredator.png" />
      </S.ContainerImage>
      <MultiStepForm
        stateName="signupData"
        onSubmit={(_) => {
          Router.push("/signinredatorstep3");
        }}
        onFail={() => {
          Router.push("/signinredatorstep1");
        }}
      >
        <S.ContainerInformation>
          <a href="#">Voltar</a>
          <h1>Informações Extras</h1>
          <p>Insira alguns dados para completar o seu cadastro.</p>

          <S.InputContainer>
            <h3>Curso</h3>
            <Select name="course" placeholder="Selecione da nossa lista">
              <option value={1}>Administração</option>
              <option value={2}>Agronegócio</option>
              <option value={3}>Agronomia</option>
              <option value={4}>
                Análise e Desenvolvimento de Sistemas
              </option>
              <option value={5}>Biomedicina</option>
              <option value={6}>Ciência da Computação</option>
              <option value={7}>Ciências Biológicas</option>
              <option value={8}>Ciências Contábeis</option>
              <option value={9}>Ciências Econômicas</option>
              <option value={10}>Design de Interiores</option>
              <option value={11}>Design do Produto</option>
              <option value={12}>Design Gráfico</option>
              <option value={13}>Direito</option>
              <option value={14}>Educação Física</option>
              <option value={15}>Enfermagem</option>
              <option value={16}>Engenharia Agronômica</option>
              <option value={17}>Engenharia Ambiental</option>
              <option value={18}>Engenharia Civil</option>
              <option value={19}>Engenharia de Alimentos</option>
              <option value={20}>Engenharia de Produção</option>
              <option value={21}>Engenharia de Software</option>
              <option value={22}>Engenharia de Telecomunicações</option>
              <option value={23}>Engenharia Elétrica</option>
              <option value={24}>Engenharia Mecânica</option>
              <option value={25}>Engenharia Química</option>
              <option value={26}>Farmácia</option>
              <option value={27}>Física</option>
              <option value={28}>Fisioterapia</option>
              <option value={29}>Fonoaudiologia</option>
              <option value={30}>História</option>
              <option value={31}>Jornalismo</option>
              <option value={32}>Letras</option>
              <option value={33}>Marketing</option>
              <option value={34}>Matemática</option>
              <option value={35}>Medicina</option>
              <option value={36}>Medicina Veterinária</option>
              <option value={37}>Nutrição</option>
              <option value={38}>Odontologia</option>
              <option value={39}>Pedagogia</option>
              <option value={40}>Psicologia</option>
              <option value={41}>Publicidade e Propaganda</option>
              <option value={42}>Química</option>
              <option value={43}>Recursos Humanos</option>
              <option value={44}>Relações Internacionais</option>
              <option value={45}>Serviço Social</option>
              <option value={46}>Sistemas de Informação</option>
            </Select>
            <h3>Áreas de conhecimento</h3>
            <Select name="college" placeholder="Selecione da nossa lista">
              <option value={1}>Administração</option>
              <option value={2}>Agronegócio</option>
              <option value={3}>Agronomia</option>
            </Select>

            <h3>Formação</h3>
            <Select name="formation" placeholder="Selecione">
              <option value={1}>Cursando</option>
              <option value={2}>Graduado</option>
              <option value={3}>Pós-graduado</option>
              <option value={4}>Mestrado</option>
              <option value={5}>Doutorado</option>
            </Select>
            <Input name="cpf" label="CPF" placeholder="000.000.000-00" />
            <Input
              label="Forma de Pagamento"
              placeholder="Insira o seu pix ou dados de pagamento"
            />
          </S.InputContainer>
          <S.ContainerDoBang>
            <Checkbox defaultChecked>Aceitar Termos de Uso</Checkbox>
          </S.ContainerDoBang>
          <S.ContainerDoBang>
            <Checkbox defaultChecked>Aceitar Políticas de Privacidade</Checkbox>
          </S.ContainerDoBang>
          <ButtonKnewave variant="PRIMARY" size="sm" type="submit">
            Confirmar e-mail
          </ButtonKnewave>
        </S.ContainerInformation>
      </MultiStepForm>
    </S.Wrapper>
  );
}
