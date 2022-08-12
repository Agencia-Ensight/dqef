import { ChangeEvent, useCallback, useMemo, useState } from "react";
import Router from "next/router";
import { BsSearch } from "react-icons/bs";

import { JobCard } from "@/components";
import * as S from "./styles";
import { useJobs } from "@/hooks";

function AllJobs() {
  const [searchJobs, setSearchJobs] = useState("");
  const jobs = useJobs();

  const handleSearchJobs = useCallback((value: string) => {
    setSearchJobs(value.toLowerCase());
  }, []);

  const filteredData = useMemo(
    () =>
      jobs.data?.filter((filterJobs) => {
        if (searchJobs === "") {
          return filterJobs;
        } else {
          return filterJobs.higherCourse.name
            .toLowerCase()
            .includes(searchJobs);
        }
      }),
    [jobs.data]
  );

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.InfoDiv>
          <S.SubTitle onClick={() => Router.back()}>Voltar</S.SubTitle>
          <S.Title>Lista de Trabalhos</S.Title>
          <S.Description>
            Se liga nas ofertas incríveis que estão disponíveis para você
            realizar e tirar uma grana extra!
          </S.Description>
        </S.InfoDiv>
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
        {filteredData?.map((job) => (
          <JobCard
            key={job.id}
            {...job}
            type="student" // TODO: check how to do this
            status="finished" // TODO: check how to do this
            discipline={job.discipline.name}
            typeOfWork={job.typeOfWork.name}
          />
        ))}
      </S.MainContainer>
    </S.Wrapper>
  );
}

export default AllJobs;
