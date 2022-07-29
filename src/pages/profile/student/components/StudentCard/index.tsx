import { ProfileCard } from "@/components";

import * as S from "./styles";

function StudentCard({ onChangeMenu }: any) {
  return (
    <S.ContainerProfileCard>
      <ProfileCard
        img="/images/redatorpicture.png"
        profileName="Murilo Ricioli"
        course="Medicina"
        variant="STUDENT"
        onChangeMenu={onChangeMenu}
      />
    </S.ContainerProfileCard>
  );
}

export { StudentCard };
