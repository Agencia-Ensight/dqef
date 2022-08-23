import { useCallback, useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";

import { JobCard } from "@/components";
import { useUrgentJobs } from "@/hooks";

import * as S from "./styles";

function UrgentWorks() {
  const [searchJobs, setSearchJobs] = useState("");
  const urgentJobs = useUrgentJobs();

  const handleSearchJobs = useCallback((value: string) => {
    setSearchJobs(value.toLowerCase());
  }, []);

  const filteredData = useMemo(
    () =>
      urgentJobs.data?.filter((filterJobs) => {
        if (searchJobs === "") {
          return filterJobs;
        } else {
          return filterJobs.higherCourse.name
            .toLowerCase()
            .includes(searchJobs);
        }
      }),
    [urgentJobs.data]
  );

  return (
    <S.Wrapper>
      <S.SubTitle>IMPORTANTE</S.SubTitle>
      <S.HeaderContainer>
        <div>
          <S.Title>Trabalhos Urgentes</S.Title>
          <S.Description>
            Atividades com menos de 48h para a entrega final. Somente redatores
            premium possuem permissão para realizar.
          </S.Description>
        </div>
        <S.InputContainer>
          <S.SearchInput
            placeholder="Pesquisar"
            value={searchJobs}
            onChange={(e) => handleSearchJobs(e.target.value)}
          />
          <BsSearch size={20} color="#42A4EF" />
        </S.InputContainer>
      </S.HeaderContainer>
      <S.MainContainer>
        {urgentJobs.data?.map((job) => (
          <JobCard
            {...job}
            totalProposals={job.proposals.length}
            totalChanges={0}
            wasEvaluated={!!job.rating}
            urgent
            typeOfWork={job.typeOfWork.name}
            knowledges={job.knowledges.map((knowledge) => knowledge.name)}
            course={job.higherCourse.name}
          />
        ))}
      </S.MainContainer>
    </S.Wrapper>
  );
}

export default UrgentWorks;
