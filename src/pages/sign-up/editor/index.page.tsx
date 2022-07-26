import { Banner } from "./components/Banner";
import { Info } from "./components/Info";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { InsertCode } from "./components/InsertCode";
import { SuccessCreated } from "./components/SuccessCreated";

import * as S from "./styles";
import { EditorProvider, useEditor } from "./EditorContext";

function SignUpEditor() {
  const { step } = useEditor();

  return (
    <S.Wrapper>
      <Banner />
      <S.Container>
        {step === "info" && <Info />}
        {step === "aditional-info" && <AdditionalInfo />}
        {step === "code" && <InsertCode />}
        {step === "success" && <SuccessCreated />}
      </S.Container>
    </S.Wrapper>
  );
}

function SignUpEditorWrapper() {
  return (
    <EditorProvider>
      <SignUpEditor />
    </EditorProvider>
  );
}

export default SignUpEditorWrapper;
