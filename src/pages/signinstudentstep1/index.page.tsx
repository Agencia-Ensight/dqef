import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';

export default function signinstudentstep1() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/signinstudent.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            <a href="#">Voltar</a>
            <h1>Preencha os Campos</h1>
            <p>Vamos enviar um e-mail para você, para confirmar a sua identidade.</p>
            
            <ButtonKnewave   variant="PRIMARY" size="sm" >Próximo</ButtonKnewave>
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
