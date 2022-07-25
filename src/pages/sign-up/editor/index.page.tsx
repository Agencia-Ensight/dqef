import { Banner } from "./components/Banner";
import { Info } from "./components/Info";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { InsertCode } from "./components/InsertCode";
import { SuccessCreated } from "./components/SuccessCreated";

import * as S from "./styles";

function SignUpEditor() {
  return (
    <S.Wrapper>
      <Banner />
      <S.Container>
        <Info />
        {/* <AdditionalInfo /> */}
        {/* <InsertCode /> */}
        {/* <SuccessCreated /> */}
      </S.Container>
    </S.Wrapper>
  );
}

export default SignUpEditor;
