import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

import { ButtonKnewave, JobCard, Loading } from "@/components";
import * as S from "./styles";
import { useJobs } from "@/hooks";

function Works() {
  const [searchJobs, setSearchJobs] = useState("");
  const jobs = useJobs();

  function handleOnChangeSearchJobs(event: ChangeEvent<HTMLInputElement>) {
    setSearchJobs(event.target.value.toLocaleLowerCase());
  }

  const filteredData = jobs.data?.filter((filterJobs) => {
    if (searchJobs === "") {
      return filterJobs;
    } else {
      return filterJobs.higherCourse.name.toLowerCase().includes(searchJobs);
    }
  });

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.InfoDiv>
          <S.SubTitle>PADRÃO</S.SubTitle>
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
        {jobs.isLoading && <Loading />}
        {jobs.error && <p>Não conseguimos carregar esse módulo</p>}
        {filteredData?.map((job) => (
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
      </S.MainContainer>
      <S.ButtonContainer>
        <Link href="/jobs" passHref>
          <ButtonKnewave size="lg" variant="PRIMARY">
            Ver Todos
          </ButtonKnewave>
        </Link>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export { Works };
