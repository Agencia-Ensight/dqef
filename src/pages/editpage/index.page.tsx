import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';

export default function editpage() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/editpage.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            <a href="#">Voltar</a>
            <h1>Preencha os Campos</h1>
            <p>Edite o os campos desejados e salve no final da página</p>
            
            <ButtonKnewave   variant="PRIMARY" size="sm" >Próximo</ButtonKnewave>
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
