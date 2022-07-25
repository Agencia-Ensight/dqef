import {
  SuccessCreated,
  AdditionalInfo,
  Banner,
  Info,
  InsertCode,
} from "./components";
import * as S from "./styles";
import { StudentProvider, useStudent } from "./StudentContext";

function SignUpStudent() {
  const { step } = useStudent();

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

function ContextWrapper() {
  return (
    <StudentProvider>
      <SignUpStudent />
    </StudentProvider>
  );
}

export default ContextWrapper;
