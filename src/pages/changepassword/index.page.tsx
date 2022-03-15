import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";


export default function changepassword() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/forgotpassword.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            
            
            <a href="#"><span>Voltar</span></a>
            <h1>Alterar Senha.
              
            </h1>
            <p>Insira a nova senha</p>  
            <div>
            
            
            </div>
            <div>
              
            </div>

            <ButtonKnewave   variant="PRIMARY" size="sm" >Confirmar</ButtonKnewave>
           
            
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
