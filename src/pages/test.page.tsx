import { JobCard } from "@/components";
import { useJob } from "@/hooks";

export default function Test() {
  const { data } = useJob("74");

  if (!data) return null;

  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <JobCard
        {...data}
        totalProposals={0}
        totalChanges={0}
        wasEvaluated={false}
        urgent={false}
        typeOfWork={data.typeOfWork.name}
        knowledges={data.knowledges.map((knowledge) => knowledge.name)}
        course={data.higherCourse.name}
        status={data.status}
        theme={data.theme}
        title={data.title}
        type="EDITOR"
        creatorId="1"
        deliveryAt={new Date()}
        price={1}
      />
    </div>
  );
}
