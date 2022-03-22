import { ButtonKnewave } from "../../components/ButtonKnewave";

import * as S from "./styles";

import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineReload } from "react-icons/ai";


export default function forgotpassword() {
    return (

        
<S.Wrapper>
<div className="headerContainer" >
<S.ContainerInformation>      
<h1>Notificações</h1>
<h2>Seu painel com todas as notificações.</h2>
</S.ContainerInformation> 
<ButtonKnewave size="sm" variant="PRIMARY"  >Limpar</ButtonKnewave> 
</div>
<S.ContainerImage>
<table>
  <tr>
    <th>Data</th>
    <th>Nome</th>
    <th>Sobre</th>
    <th>Ação</th>
  </tr>

  
  
  <tr>
    <td>23/07/2022</td>
    <td>Maria Anders</td>
    <td>Matheus publicou o trabalho e está esperando o seu review</td>
    <td><ButtonKnewave size="sm" variant="PRIMARY">Ir até lá</ButtonKnewave>  </td>
  </tr>
  
  <tr>
    <td>23/07/2022</td>
    <td>Francisco Chang</td>
    <td>Matheus publicou o trabalho e está esperando o seu review</td>
    <td><ButtonKnewave size="sm" variant="PRIMARY">Ir até lá</ButtonKnewave>  </td>
  </tr>
  <tr>
    <td>23/07/2022</td>
    <td>Francisco Chang</td>
    <td>Matheus publicou o trabalho e está esperando o seu review</td>
    <td>  <ButtonKnewave size="sm" variant="PRIMARY">Ir até lá</ButtonKnewave>   </td>
  </tr>
</table>
</S.ContainerImage>


</S.Wrapper>
    )
    }
