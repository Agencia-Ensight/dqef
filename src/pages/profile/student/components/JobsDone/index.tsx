import { JobCard } from "@/components";
import * as S from "./styles";

function JobsDone() {
  return (
    <>
      <S.Title>Trabalhos Finalizados</S.Title>
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
          status="finished"
          state="start-job"
          type="editor" //Status de quando o trabalho esta finalizado
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
          status="finished"
          state="start-job"
          type="editor" //Status de quando o trabalho esta finalizado
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
          status="finished"
          state="start-job"
          type="editor" //Status de quando o trabalho esta finalizado
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
          status="finished"
          state="start-job"
          type="editor" //Status de quando o trabalho esta finalizado
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
          status="finished"
          state="start-job"
          type="editor" //Status de quando o trabalho esta finalizado
        />
      </S.Wrapper>
    </>
  );
}

export { JobsDone };
