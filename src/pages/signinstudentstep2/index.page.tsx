import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';

export default function signinstudentstep2() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/signinstudent.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            <a href="#">Voltar</a>
            <h1>Informações Extras</h1>
            <p>Insira alguns dados para completar o seu cadastro.</p>
            <div>
            <Checkbox defaultChecked>Aceitar Termos de Uso</Checkbox>
            </div>
            <Checkbox defaultChecked>Aceitar Políticas de Privacidade</Checkbox>
            <ButtonKnewave   variant="PRIMARY" size="sm" >Confirmar E-mail</ButtonKnewave>
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }