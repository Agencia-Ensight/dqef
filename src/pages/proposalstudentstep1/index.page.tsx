import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";


export default function proposalstudentstep1() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/proposalstudent.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            <h3>Voltar</h3>
            <h1>Preencha os Campos</h1>
            <p>Para publicar seu trabalho, insira as seguintes informações.</p>
           
            <ButtonKnewave   variant="PRIMARY" size="sm" >Próximo</ButtonKnewave>
            
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
