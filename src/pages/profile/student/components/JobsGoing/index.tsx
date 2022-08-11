import { JobCard } from "@/components";
import * as S from "./styles";

function JobsGoing() {
  return (
    <>
      <S.Title>Trabalhos em Andamento</S.Title>
      <S.Wrapper>
        <JobCard
          id="dsadsa"
          course="ECONOMIA"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="on-going"
          state="show-proposals"
          type="student" //Status de quando o trabalho esta em andamento
        />
        <JobCard
          id="dsadsa"
          course="ECONOMIA"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="on-going"
          state="show-proposals"
          type="student" //Status de quando o trabalho esta em andamento
        />
        <JobCard
          id="dsadsa"
          course="ECONOMIA"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          status="on-going"
          state="show-proposals"
          type="student" //Status de quando o trabalho esta em andamento
        />
      </S.Wrapper>
    </>
  );
}

export { JobsGoing };
