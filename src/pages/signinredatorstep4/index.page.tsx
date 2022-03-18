import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { AiOutlineReload } from "react-icons/ai";

export default function signinredatorstep4() {
    return (
        <S.Wrapper>
        <S.ContainerImage>
        <S.Image src="/images/signinredator.png" />
        </S.ContainerImage>

        <S.ContainerInformation>
        <a href="#">Voltar</a>
        <h1>Inserir Código</h1>
        <p>Insira o código que você recebeu no e-mail.</p>
        
        <div>
        <AiOutlineReload color="var(--blue)"/>
        <h2>Enviar Código Novamente</h2>
        </div>
        <ButtonKnewave   variant="PRIMARY" size="sm" >Criar Conta</ButtonKnewave>
        </S.ContainerInformation>



    </S.Wrapper>
    )
    }