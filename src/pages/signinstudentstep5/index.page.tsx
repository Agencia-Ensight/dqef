import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { AiOutlineReload } from "react-icons/ai";

export default function signinstudentstep5() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/signinstudent.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            <S.Image src="/images/nerdzin.png" />
            <h1>Sucesso :)</h1>
            <p>Bem-vindo, agora navegue na plataforma <br /> e publique seus trabalhos.</p>
            
            <div>
            <ButtonKnewave   margin-left= "25px" variant="SECONDARY" size="sm" >Explorar</ButtonKnewave>
            <ButtonKnewave   variant="PRIMARY" size="sm" >Publicar Trabalho</ButtonKnewave>
            </div>
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
