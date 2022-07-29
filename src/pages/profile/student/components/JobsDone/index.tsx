import { JobCard } from "@/components";
import * as S from "./styles";

function JobsDone() {
  return (
    <>
      <S.Title>Trabalhos Finalizados</S.Title>
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
          status="STUDENT-DONE" //Status de quando o trabalho esta finalizado
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
          status="STUDENT-DONE" //Status de quando o trabalho esta finalizado
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
          status="STUDENT-DONE" //Status de quando o trabalho esta finalizado
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
          status="STUDENT-DONE" //Status de quando o trabalho esta finalizado
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
          status="EMPLOYEE-SEND" //Status de quando o trabalho esta finalizado
        />
      </S.Wrapper>
    </>
  );
}

export { JobsDone };
