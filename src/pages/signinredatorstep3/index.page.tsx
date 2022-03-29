import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Input } from "../../components/Input";


export default function signinredatorstep3() {
    return (
        <S.Wrapper>
            <S.ContainerImage>
            <S.Image src="/images/signinredator.png" />
            </S.ContainerImage>

            <S.ContainerInformation>
            <a href="#">Voltar</a>
            <h1>Confirme o seu e-mail</h1>
            <p>Vamos enviar um e-mail para você, para confirmar a sua identidade.</p>
            <Input label="E-mail" placeholder="Insira o seu e-mail" />
            
            <div>
            <ButtonKnewave   variant="PRIMARY" size="sm" >Enviar Código</ButtonKnewave>
            </div>
            </S.ContainerInformation>
            
            
            



        </S.Wrapper>
    )
    }
