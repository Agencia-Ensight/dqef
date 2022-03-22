import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";


export default function proposalstudentstep3() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/proposalstudent.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            <h3>Voltar</h3>
            <h1>Selecione uma data</h1>
            <p>Para publicar o seu trabalho insira essas informações.</p>
           
            <ButtonKnewave   variant="PRIMARY" size="sm" >Próximo</ButtonKnewave>
            
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
