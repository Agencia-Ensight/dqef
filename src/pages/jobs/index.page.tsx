import { ChangeEvent, useState } from "react";
import Router from "next/router";
import { useQuery } from "@apollo/client";
import { BsSearch } from "react-icons/bs";

import { JobCard } from "@/components";
import { GET_JOBS, Job } from "@/services/graphql/jobs";
import * as S from "./styles";

function AllWorks() {
  const jobs = useQuery<{ jobs: Job[] }>(GET_JOBS);

  const [searchJobs, setSearchJobs] = useState("");

  function handleOnChangeSearchJobs(event: ChangeEvent<HTMLInputElement>) {
    setSearchJobs(event.target.value.toLocaleLowerCase());
  }

  const filteredData: Job[] | undefined = jobs.data?.jobs.filter(
    (filterJobs) => {
      if (searchJobs === "") {
        return filterJobs;
      } else {
        return filterJobs.higher_course.name.toLowerCase().includes(searchJobs);
      }
    }
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
            onChange={handleOnChangeSearchJobs}
          />
          <BsSearch size={20} color="#42A4EF" />
        </S.InputContainer>
      </S.HeaderContainer>
      <S.MainContainer>
        {filteredData?.map((job) => (
          <JobCard
            id={job.id}
            course={job.higher_course.name}
            date={job.delivery}
            discipline={job.job_has_knowledges
              .map(({ knowledge: { name: knowledge_name } }) => knowledge_name)
              .join(", ")}
            price={job.value_pay}
            theme={job.thema}
            title={job.title}
            typeOfWork={job.job_type.name}
            urgent={false}
            type="student"
          />
        ))}
      </S.MainContainer>
    </S.Wrapper>
  );
}

export default AllWorks;
