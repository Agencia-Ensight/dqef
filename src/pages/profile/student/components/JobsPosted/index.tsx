import { JobCard } from "@/components";
import * as S from "./styles";

function JobsPosted() {
  return (
    <>
      <S.Title>Trabalhos Publicados</S.Title>
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
          status="published"
          state="editor-rate"
          type="student" //Status de quando o estudante cria um job
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
          status="published"
          state="editor-rate"
          type="student" //Status de quando o estudante cria um job
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
          status="published"
          state="editor-rate"
          type="student" //Status de quando o estudante cria um job
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
          status="published"
          state="editor-rate"
          type="student" //Status de quando o estudante cria um job
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
          status="published"
          state="editor-rate"
          type="student" //Status de quando o estudante cria um job
        />
      </S.Wrapper>
    </>
  );
}

export { JobsPosted };
