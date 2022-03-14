import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";


export default function proposalstudentstep4() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/proposalstudent.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            
            <h1>Sucesso! O trabalho foi publicado</h1>
            <p>Em breve você receberá propostas dos redatores para realizá-lo</p>
            <S.Image src="/images/nerdzin.png"/>
            <p>Para acompanhar todo o processo é bem simples, basta entrar <br /> no seu <span>painel de controle!</span></p>
            <p>Lá você terá acesso às propostas dos redatores e também poderá <br /> acompanhar o andamento do seu trabalho.</p>

            <ButtonKnewave   variant="PRIMARY" size="sm" >Ir para Home</ButtonKnewave>
            
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
