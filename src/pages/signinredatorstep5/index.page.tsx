import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { AiOutlineReload } from "react-icons/ai";

export default function signinredatorstep5() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/signinredator.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            <S.Image src="/images/nerdzin.png" />
            <h1>Sucesso :)</h1>
            <p>É oficial, você é um redator da Deixa Que Eu Faço! <br /> Agora você já pode realizar trabalhos e ganhar uma
grana!</p>
            
            <div>
                <a href="/">
            <ButtonKnewave   margin-left= "25px" variant="PRIMARY" size="sm" >Explorar</ButtonKnewave>
                </a>
            </div>
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }