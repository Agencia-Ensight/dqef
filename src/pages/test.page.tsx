import { JobCard } from "@/components";

function Test() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <JobCard
        date="2022-03-20"
        discipline="História"
        price={20}
        type="student"
        status="finished"
        state="editor-rate"
        theme="História"
        title="História"
        typeOfWork="Trabalho de Conclusão de Curso"
        urgent={false}
        course="ADM"
      />
    </div>
  );
}

export default Test;
