import { ButtonKnewave } from "../../components/ButtonKnewave";
import * as S from "./styles";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';

export default function signinstudentstep1() {
    return (
        <S.Wrapper>
            

            <S.ContainerButtons>
            
            <h1>Antes de criar sua conta</h1>
            <h2>Escolha qual será sua vocação na <span>Deixa Que Eu Faço</span></h2>
            
            </S.ContainerButtons>


            <S.ContainerChoose>
            <S.Containerstudent>
            <S.Image  src="/images/Estudante.png"/>
            <p>Se você precisa de ajuda acadêmica, crie sua conta como estudante!</p>
            <div>
            <ButtonKnewave   variant="PRIMARY" size="sm" >Vamos lá</ButtonKnewave>
            </div>
            </S.Containerstudent>
            
            <S.Containerstudent>
            <S.Image  src="/images/Redator.png"/>
            <p>Se você deseja realizar os trabalhos publicados e ganhar uma grana extra, crie sua conta de redator!</p>
            <div>
            <ButtonKnewave   variant="PRIMARY" size="sm" >Vamos lá</ButtonKnewave>
            </div>
            
            </S.Containerstudent>
            
            
    


            </S.ContainerChoose>
            <S.ContainerBang> <a href="#">Já tenho conta</a> </S.ContainerBang>

            



        </S.Wrapper>
    )
    }
