import { GetServerSidePropsContext } from "next";

import {
  Banner,
  Info,
  AdditionalInfo,
  InsertCode,
  SuccessCreated,
} from "../components";
import * as S from "./styles";
import { Stepper } from "@/components";
import { ICompleteSignUp } from "./typings";

function CompleteSignUp({ type }: ICompleteSignUp) {
  return (
    <S.Wrapper>
      <Banner />
      <S.Container>
        <Stepper
          onComplete={() => {}}
          steps={[
            {
              label: "info",
              render: (data) => <Info {...data} type={type} />,
            },
            {
              label: "aditional-info",
              render: (data) => <AdditionalInfo {...data} type={type} />,
            },
            {
              label: "code",
              render: (data) => <InsertCode {...data} />,
            },
            {
              label: "success",
              render: () => <SuccessCreated type={type} />,
            },
          ]}
        />
      </S.Container>
    </S.Wrapper>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { type = "STUDENT" } = context.query;

  return {
    props: {
      type: (type as string).toUpperCase(),
    },
  };
}

export default CompleteSignUp;
