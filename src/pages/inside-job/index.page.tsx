import { UrgentWorkCard } from "../../components/UrgentWorkCard";
import { FileCard } from "./components/FileCard";
import { InfoCard } from "./components/InfoCard";
import * as S from "./styles";

import ScrollContainer from "react-indiana-drag-scroll";

function insideJob() {
  return (
    <S.Wrapper>
      <UrgentWorkCard
        course="MEDICINA"
        date="23/08"
        discipline="Direito Penal"
        price={65}
        theme="Teoria do Crime"
        title="Faz Meu Trabalho"
        typeOfWork="Banana"
        urgent={false}
        status="STUDENT-EDIT"
      />
      <S.Container>
        <InfoCard
          title="Exercícios sobre Teoria do Crime"
          pages={26}
          plagiarism={25}
          format="Word"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quam, quo culpa officia commodi, placeat eos voluptatem itaque fugit iste illo blanditiis numquam aperiam illum at sequi, cum distinctio odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quam, quo culpa officia commodi, placeat eos voluptatem itaque fugit iste illo blanditiis numquam aperiam illum at sequi, cum distinctio odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quam, quo culpa officia commodi, placeat eos voluptatem itaque fugit iste illo blanditiis numquam aperiam illum at sequi, cum distinctio odio!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quam, quo culpa officia commodi, placeat eos voluptatem itaque fugit iste illo blanditiis numquam aperiam illum at sequi, cum distinctio odio!"
          observations="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quam, quo culpa officia commodi, placeat eos voluptatem itaque fugit iste illo blanditiis numquam aperiam illum at sequi, cum distinctio odio!"
        />
        <ScrollContainer
          horizontal={true}
          hideScrollbars={true}
          className="files-container"
        >
          <FileCard title="Arquivo" />
          <FileCard title="Arquivo" />
          <FileCard title="Arquivo" />
          <FileCard title="Arquivo" />
          <FileCard title="Arquivo" />
          <FileCard title="Arquivo" />
          <FileCard title="Arquivo" />
          <FileCard title="Arquivo" />
        </ScrollContainer>
      </S.Container>
    </S.Wrapper>
  );
}

export default insideJob;
