import { JobCard } from "@/components";
import * as S from "./styles";

function Proposals() {
  return (
    <>
      <S.Title>Propostas Enviadas</S.Title>
      <S.Wrapper>
        <JobCard
          id="dsadsa"
          course="ECONOMIA"
          type="editor"
          date="23/08"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="want-to-do"
          state="start-job"
          //Status de quando a prosposta esta enviada
        />
        <JobCard
          id="dsadsa"
          course="ECONOMIA"
          date="23/08"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="want-to-do"
          state="start-job"
          type="editor" //Status de quando a prosposta esta enviada
        />
        <JobCard
          id="dsadsa"
          course="ECONOMIA"
          date="23/08"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="want-to-do"
          state="start-job"
          type="editor" //Status de quando a prosposta esta enviada
        />
        <JobCard
          id="dsadsa"
          course="ECONOMIA"
          date="23/08"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="want-to-do"
          state="start-job"
          type="editor" //Status de quando a prosposta esta enviada
        />
        <JobCard
          id="dsadsa"
          course="ECONOMIA"
          date="23/08"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="want-to-do"
          state="start-job"
          type="editor" //Status de quando a prosposta esta enviada
        />
      </S.Wrapper>
    </>
  );
}

export { Proposals };
