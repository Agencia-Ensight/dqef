import { JobCard } from "@/components";
import * as S from "./styles";

function Proposals() {
  return (
    <>
      <S.Title>Propostas Enviadas</S.Title>
      <S.Wrapper>
        <JobCard
          jobId="dsadsa"
          course="ECONOMIA"
          date="23/08"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="EMPLOYEE-SEND" //Status de quando a prosposta esta enviada
        />
        <JobCard
          jobId="dsadsa"
          course="ECONOMIA"
          date="23/08"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="EMPLOYEE-SEND" //Status de quando a prosposta esta enviada
        />
        <JobCard
          jobId="dsadsa"
          course="ECONOMIA"
          date="23/08"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="EMPLOYEE-SEND" //Status de quando a prosposta esta enviada
        />
        <JobCard
          jobId="dsadsa"
          course="ECONOMIA"
          date="23/08"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="EMPLOYEE-SEND" //Status de quando a prosposta esta enviada
        />
        <JobCard
          jobId="dsadsa"
          course="ECONOMIA"
          date="23/08"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="EMPLOYEE-SEND" //Status de quando a prosposta esta enviada
        />
      </S.Wrapper>
    </>
  );
}

export { Proposals };
