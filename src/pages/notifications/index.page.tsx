import Router from "next/router";

import { ButtonKnewave, Loading } from "@/components";
import { useUser } from "@/contexts";
import { ensureAuth } from "@/hocs";
import { useUserNotifications } from "@/hooks/useUserNotifications";
import { NotificationCardMobile } from "./components/NotificationCardMobile";

import * as S from "./styles";

function Notifications() {
  const { user } = useUser();
  const notifications = useUserNotifications(user!.id);

  return (
    <S.Wrapper>
      <div className="headerContainer">
        <S.ContainerInformation>
          <h1>Notificações</h1>
          <h2>Seu painel com todas as notificações.</h2>
        </S.ContainerInformation>
        {/* <ButtonKnewave
          className="botaopadraosolido"
          size="sm"
          variant="PRIMARY"
        >
          Limpar
        </ButtonKnewave> */}
      </div>
      <S.ContainerImage>
        {notifications.isLoading && <Loading />}

        <table>
          <tr>
            <th>Data</th>
            <th>Título</th>
            <th>Sobre</th>
            <th>Ação</th>
          </tr>

          {!notifications.isLoading && notifications.data?.length === 0 && (
            <tr>
              <td colSpan={4}>Ainda não possuí notificações</td>
            </tr>
          )}

          {notifications.data?.map((notification) => (
            <tr>
              <td>{notification.deliveryAt}</td>
              <td>{notification.message.title}</td>
              <td>{notification.message.description}</td>
              <td>
                <ButtonKnewave
                  className="botaopadraosolido"
                  size="sm"
                  variant="PRIMARY"
                  onClick={() => Router.push(`/jobs/${notification.jobId}`)}
                >
                  Ver trabalho
                </ButtonKnewave>{" "}
              </td>
            </tr>
          ))}
        </table>
        <S.NotificationsContainerMobile>
          {!notifications.isLoading && notifications.data?.length === 0 && (
            <span>Ainda não possuí notificações</span>
          )}
          {notifications.data?.map((notification) => (
            <NotificationCardMobile
              key={notification.id}
              date={notification.deliveryAt}
              description={notification.message.description}
              title={notification.message.title}
            />
          ))}
        </S.NotificationsContainerMobile>
      </S.ContainerImage>
    </S.Wrapper>
  );
}

export default ensureAuth(Notifications);
