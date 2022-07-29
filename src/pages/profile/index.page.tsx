import { EditorProfile } from "./editor";
import { StudentProfile } from "./student";

import * as S from "./styles";

function Profile() {
  return (
    <S.Wrapper>
      <EditorProfile />
      {/* <StudentProfile /> */}
    </S.Wrapper>
  );
}

export default Profile;
