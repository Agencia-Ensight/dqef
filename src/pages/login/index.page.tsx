import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";


export default function login() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/login.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            
            
            <p> <span> Fazer Login</span></p>
            <h1>Bem-vindo de Volta</h1>
            <div>
            <RiLockPasswordFill size={20} color="var(--blue)" />
            <a href="#">Esqueci minha <span>senha</span></a>
            </div>
            <div>
              
            </div>

            <ButtonKnewave   variant="PRIMARY" size="sm" >Entrar</ButtonKnewave>
            <hr />
            <h2>Não tenho Conta,<a href="#"><span>criar a conta</span></a></h2>
            
            </S.ContainerInformation>



        </S.Wrapper>
    )
    }
