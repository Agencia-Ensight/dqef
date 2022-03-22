import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';

export default function redatoreditprofile() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/editprofile.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            <a href="#">Voltar</a>
            <h1>Edite os campos necessários</h1>
            <p>Edite o os campos desejados e salve no final da página.</p>
            
            <ButtonKnewave   variant="PRIMARY" size="sm" >Salvar</ButtonKnewave>
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
