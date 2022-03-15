import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";


export default function successchangepassword() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/forgotpassword.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            
            <S.Image src="/images/nerdzin.png"/>
            <a href="#"><span>Voltar</span></a>
            <h1>Sucesso :)
              
            </h1>
            <p>Sua nova senha está configurada e já entramos na plataforma com o e-mail e nova senha solicitadas</p>  
            <div>
            
            
            </div>
            <div>
              
            </div>

            <ButtonKnewave   variant="PRIMARY" size="sm" >Explorar</ButtonKnewave>
           
            
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
