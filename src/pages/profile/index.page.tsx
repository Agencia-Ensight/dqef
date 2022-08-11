import { useUser } from "@/contexts";
import { EditorProfile } from "./editor";
import { StudentProfile } from "./student";

import * as S from "./styles";

function Profile() {
  const { user } = useUser();
  return (
    <S.Wrapper>
      {user?.type === "EDITOR" && <EditorProfile />}
      {user?.type === "STUDENT" && <StudentProfile />}
    </S.Wrapper>
  );
}

export default Profile;
