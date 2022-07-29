import { ProfileCard } from "@/components";

import * as S from "./styles";

function EditorCard({ onChangeMenu }: any) {
  return (
    <S.ContainerProfileCard>
      <ProfileCard
        img="/images/redatorpicture.png"
        profileName="Murilo Ricioli"
        course="Medicina"
        variant="EMPLOYEE"
        onChangeMenu={onChangeMenu}
      />
    </S.ContainerProfileCard>
  );
}

export { EditorCard };
