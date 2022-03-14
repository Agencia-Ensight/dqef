import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";


export default function forgotpassword() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/forgotpassword.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            
            
            <a href="#"><span>Voltar</span></a>
            <h1>Insira o seu e-mail
              
            </h1>
            <p>Vamos enviar um e-mail para você, para confirmar a sua identidade.</p>  
            <div>
            
            
            </div>
            <div>
              
            </div>

            <ButtonKnewave   variant="PRIMARY" size="sm" >Alterar Senha</ButtonKnewave>
           
            
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
