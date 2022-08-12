import { useUser } from "@/contexts";
import { getInfos } from "@/services/graphql/queries";
import { Banner } from "./Banner";
import { EditorEditProfile } from "./Editor";
import { StudentEditProfile } from "./Student";

import * as S from "./styles";
import { ProfileProps } from "./typings";

function Profile(data: ProfileProps) {
  const { user } = useUser();

  return (
    <S.Wrapper>
      <Banner />
      <S.ContainerInformation>
        {user && user.type === "EDITOR" && <EditorEditProfile {...data} />}
        {user && user.type === "STUDENT" && <StudentEditProfile {...data} />}
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

export async function getServerSideProps() {
  const props = await getInfos();

  return {
    props,
  };
}

export default Profile;
