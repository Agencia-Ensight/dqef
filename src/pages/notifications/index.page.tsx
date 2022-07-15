import { ButtonKnewave } from "@/components";
import { NotificationCardMobile } from "./components/NotificationCardMobile";

import * as S from "./styles";

function Notifications() {
  return (
    <S.Wrapper>
      <div className="headerContainer">
        <S.ContainerInformation>
          <h1>Notificações</h1>
          <h2>Seu painel com todas as notificações.</h2>
        </S.ContainerInformation>
        <ButtonKnewave
          className="botaopadraosolido"
          size="sm"
          variant="PRIMARY"
        >
          Limpar
        </ButtonKnewave>
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
            <td>
              <ButtonKnewave
                className="botaopadraosolido"
                size="sm"
                variant="PRIMARY"
              >
                Ir até lá
              </ButtonKnewave>{" "}
            </td>
          </tr>

          <tr>
            <td>23/07/2022</td>
            <td>Francisco Chang</td>
            <td>Matheus publicou o trabalho e está esperando o seu review</td>
            <td>
              <ButtonKnewave
                className="botaopadraosolido"
                size="sm"
                variant="PRIMARY"
              >
                Ir até lá
              </ButtonKnewave>{" "}
            </td>
          </tr>
          <tr>
            <td>23/07/2022</td>
            <td>Francisco Chang</td>
            <td>Matheus publicou o trabalho e está esperando o seu review</td>
            <td>
              <ButtonKnewave
                className="botaopadraosolido"
                size="sm"
                variant="PRIMARY"
              >
                Ir até lá
              </ButtonKnewave>
            </td>
          </tr>
        </table>
        <S.NotificationsContainerMobile>
          <NotificationCardMobile
            date="27/02/2000"
            description="Matheus publicou o trabalho e está esperando o seu review"
            title="Publicou Trabalho"
          />
          <NotificationCardMobile
            date="27/02/2000"
            description="Matheus publicou o trabalho e está esperando o seu review"
            title="Publicou Trabalho"
          />
          <NotificationCardMobile
            date="27/02/2000"
            description="Matheus publicou o trabalho e está esperando o seu review"
            title="Publicou Trabalho"
          />
          <NotificationCardMobile
            date="27/02/2000"
            description="Matheus publicou o trabalho e está esperando o seu review"
            title="Publicou Trabalho"
          />
        </S.NotificationsContainerMobile>
      </S.ContainerImage>
    </S.Wrapper>
  );
}

export default Notifications;
