import React from "react";
import { Banner } from "./components/Banner";
import { InsertCode } from "./components/InsertCode";
import { SuccessCreated } from "./components/SuccessCreated";

import * as S from "./styles";

function SignUpStudent() {
  return (
    <S.Wrapper>
      <Banner />
      <S.Container>
        {/* <Info /> */}
        {/* <AdditionalInfo /> */}
        {/* <InsertCode /> */}
        <SuccessCreated />
      </S.Container>
    </S.Wrapper>
  );
}

export default SignUpStudent;
