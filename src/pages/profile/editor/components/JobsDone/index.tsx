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
          date="23/08"
          discipline="123"
          price={500}
          theme="Banana"
          title="Banana"
          typeOfWork="123"
          urgent={false}
          type="editor" //Status de quando o trabalho esta finalizado
          state="start-job"
          status="published"
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
          type="editor" //Status de quando o trabalho esta finalizado
          state="start-job"
          status="published"
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
          type="editor" //Status de quando o trabalho esta finalizado
          state="start-job"
          status="published"
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
          type="editor" //Status de quando o trabalho esta finalizado
          state="start-job"
          status="published"
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
          type="editor"
          //Status de quando o trabalho esta finalizado
          state="start-job"
          status="published"
        />
      </S.Wrapper>
    </>
  );
}

export { JobsDone };
