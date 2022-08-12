import { useState } from "react";
import { useQuery } from "@apollo/client";

import { JobCard, ProfileCard } from "@/components";
import { useUser } from "@/contexts";
import { GET_JOBS_BY_USER, Job } from "@/services/graphql/jobs";
import * as S from "./styles";

type IMenuOption = "proposals" | "jobsOnGoing" | "jobsDone";

type IMenu = {
  title: string;
};

function Menu({ title }: IMenu) {
  const { user } = useUser();
  const jobs = useQuery<{ jobs: Job[] }>(GET_JOBS_BY_USER, {
    variables: { userId: user!.id },
  });

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Container>
        {jobs.loading && <p>Carregando...</p>}
        {!jobs.loading && !jobs.data?.jobs.length && <p>Nada encontrado!</p>}
        {jobs.data?.jobs.map((job) => (
          <JobCard
            key={job.id}
            type={user!.type.toLocaleLowerCase() as any}
            state="start-job"
            status="published"
            id={job.id}
            course={job.higher_course.name}
            date={new Date(job.delivery)}
            discipline={job.job_has_knowledges[0]?.knowledge.name}
            price={job.value_pay}
            theme={job.thema}
            title={job.title}
            typeOfWork={job.job_format.name}
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
          {menu === "proposals" && <Menu title="Suas propostas" />}
          {menu === "jobsOnGoing" && <Menu title="Trabalhos em andamento" />}
          {menu === "jobsDone" && <Menu title="Trabalhos feitos" />}
        </div>
      )}
    </S.Wrapper>
  );
}

export default Profile;
