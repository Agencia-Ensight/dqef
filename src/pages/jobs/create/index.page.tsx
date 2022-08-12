import * as S from "./styles";
import { Stepper } from "@/components";
import {
  Banner,
  MainInfo,
  SelectDate,
  AdditionalInfo,
  Success,
} from "./components";

function CreateJob() {
  return (
    <S.Wrapper>
      <Banner />
      <S.ContainerInformation>
        <Stepper
          onComplete={() => {}}
          steps={[
            {
              label: "MainInfo",
              render: (data) => <MainInfo {...data} />,
            },
            {
              label: "SelectDate",
              render: (data) => <SelectDate {...data} />,
            },
            {
              label: "AdditionalInfo",
              render: (data) => <AdditionalInfo {...data} />,
            },
            {
              label: "Success",
              render: () => <Success />,
            },
          ]}
        />
      </S.ContainerInformation>
    </S.Wrapper>
  );
}

export default CreateJob;
