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
              render: (onComplete, prevRes) => (
                <MainInfo onComplete={onComplete} prevRes={prevRes} />
              ),
            },
            {
              label: "SelectDate",
              render: (onComplete, prevRes) => (
                <SelectDate onComplete={onComplete} prevRes={prevRes} />
              ),
            },
            {
              label: "AdditionalInfo",
              render: (onComplete, prevRes) => (
                <AdditionalInfo onComplete={onComplete} prevRes={prevRes} />
              ),
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
