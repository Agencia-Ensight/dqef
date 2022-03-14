import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineReload } from "react-icons/ai";


export default function forgotpassword() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/forgotpassword.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            
            
            <a href="#"><span>Voltar</span></a>
            <h1>Insira o código
              
            </h1>
            <p>Vamos enviar um e-mail para você, para confirmar a sua identidade.</p>  
            <div>
            <div>
            <AiOutlineReload color="var(--blue)"/>
            <h2>Enviar Código Novamente</h2>
            </div>
            
            
            </div>
            <div>
              
            </div>

            <ButtonKnewave   variant="PRIMARY" size="sm" >Enviar Código</ButtonKnewave>
           
            
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
