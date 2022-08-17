import { JobCard } from "@/components";
import { useUser } from "@/contexts";
import { useJob } from "@/hooks";

export default function Test() {
  const { user } = useUser();
  const { data } = useJob("74");

  if (!data || !user) return null;

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
        creatorId={user.id}
        deliveryAt={new Date()}
        price={1}
      />
    </div>
  );
}
