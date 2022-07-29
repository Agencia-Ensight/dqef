import { JobCard } from "@/components";
import * as S from "./styles";

function JobsGoing() {
  return (
    <>
      <S.Title>Trabalhos em Andamento</S.Title>
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
          status="STUDENT-GET" //Status de quando o trabalho esta em andamento
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
          status="STUDENT-GET" //Status de quando o trabalho esta em andamento
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
          status="STUDENT-GET" //Status de quando o trabalho esta em andamento
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
          status="STUDENT-GET" //Status de quando o trabalho esta em andamento
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
          status="EMPLOYEE-SEND" //Status de quando o trabalho esta em andamento
        />
      </S.Wrapper>
    </>
  );
}

export { JobsGoing };
