import { Button } from "../../../../components/Button";
import * as S from "./styles";
import { INotificationCard } from "./typings";

export function NotificationCardMobile({
  date,
  description,
  title,
}: INotificationCard) {
  return (
    <S.Wrapper>
      <S.Date>{date}</S.Date>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <Button variant="primary">Ir até lá</Button>
    </S.Wrapper>
  );
}
