import { useState } from "react";

import { JobCard, ProfileCard } from "@/components";
import { useUser } from "@/contexts";
import { JobStatus, useJobsByUser } from "@/hooks";
import * as S from "./styles";
import { ensureAuth } from "@/hocs";

type IMenuOption = "proposals" | "jobsOnGoing" | "jobsDone";

type IMenu = {
  title: string;
  status: JobStatus[];
};

function Menu({ title, status }: IMenu) {
  const { user } = useUser();
  const jobs = useJobsByUser(user!.id, user!.type, status);

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Container>
        {jobs.isLoading && <p>Carregando...</p>}
        {!jobs.isLoading && !jobs.data?.length && <p>Nada encontrado!</p>}
        {jobs.data?.map((job) => (
          <JobCard
            {...job}
            totalProposals={job.proposals.length}
            totalChanges={0}
            wasEvaluated={!!job.rating}
            urgent={false}
            mediaType={job.mediaType.name}
            knowledges={job.knowledges.map((knowledge) => knowledge.name)}
            course={job.higherCourse.name}
          />
        ))}
      </S.Container>
    </>
  );
}

function Profile() {
  const [menu, setMenu] = useState<IMenuOption>("proposals");
  const { user } = useUser();

  return (
    <S.Wrapper>
      <S.ContainerProfileCard>
        <ProfileCard
          img={user?.avatar || "/images/Estudante.png"}
          profileName={user?.name || "..."}
          course="Medicina"
          variant="EMPLOYEE"
          onChangeMenu={(m) => setMenu(m)}
        />
      </S.ContainerProfileCard>
      {user && (
        <div>
          {menu === "proposals" && (
            <Menu
              title="Suas propostas"
              status={["waiting-proposals", "ready-to-start"]}
            />
          )}
          {menu === "jobsOnGoing" && (
            <Menu
              title="Trabalhos em andamento"
              status={["in-progress", "partial-delivery"]}
            />
          )}
          {menu === "jobsDone" && (
            <Menu title="Trabalhos feitos" status={["final-delivery"]} />
          )}
        </div>
      )}
    </S.Wrapper>
  );
}

export default ensureAuth(Profile);
