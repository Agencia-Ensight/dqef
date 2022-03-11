import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";

export default function signinstudentstep2() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/signinstudent.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            <a href="#">Voltar</a>
            <h1>Informações Extras</h1>
            <p>Insira alguns dados para completar o seu cadastro</p>
            <ButtonKnewave   variant="PRIMARY" size="sm" >Confirmar E-mail</ButtonKnewave>

            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
