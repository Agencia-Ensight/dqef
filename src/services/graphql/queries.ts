import { gql } from "@apollo/client";
import { graphql } from "../api";

export type CourseProps = {
  id: number;
  name: string;
};

export type CollegeProps = {
  id: number;
  name: string;
};

export type FormationProps = {
  id: number;
  name: string;
};

export type KnowledgeProps = {
  id: number;
  name: string;
};

export type InfosProps = {
  knowledges: KnowledgeProps[];
  formations: FormationProps[];
  colleges: CollegeProps[];
  higher_courses: CourseProps[];
};

export const GET_FORMATS = gql`
  query MyQuery {
    job_formats {
      name
      id
    }
  }
`;

export const GET_COURSES = gql`
  query HigherCourses {
    higher_courses {
      id
      name
    }
  }
`;

export const GET_COLLEGES = gql`
  query Colleges {
    colleges {
      id
      name
      sigla
    }
  }
`;

export const GET_KNOWLEDGES = gql`
  query Knowledges {
    knowledges {
      id
      name
    }
  }
`;

export const GET_KNOWLEDGES_BY_COURSE_ID = gql`
  query MyQuery($higher_course_id: Int!) {
    knowledges(
      where: {
        higher_course_has_subjects: {
          higher_course_id: { _eq: $higher_course_id }
        }
      }
    ) {
      id
      name
    }
  }
`;

export const GET_FORMATIONS = gql`
  query Formations {
    formations {
      id
      name
    }
  }
`;

export const GET_MEDIA_TYPES = gql`
  query Media_Types {
    media_types {
      id
      name
    }
  }
`;

export const GET_INFOS = gql`
  query Infos {
    formations {
      id
      name
    }
    colleges {
      id
      name
      sigla
    }
    knowledges {
      id
      name
    }
    higher_courses {
      id
      name
    }
  }
`;

export async function getCourses(): Promise<CourseProps[]> {
  const { data } = await graphql.query({ query: GET_COURSES });
  return data.higher_courses;
}

export async function getColleges(): Promise<CollegeProps[]> {
  const { data } = await graphql.query({ query: GET_COLLEGES });
  return data.colleges;
}

export async function getFormations(): Promise<FormationProps[]> {
  const { data } = await graphql.query({ query: GET_FORMATIONS });
  return data.formations;
}

export async function getKnowledges(): Promise<KnowledgeProps[]> {
  const { data } = await graphql.query({ query: GET_KNOWLEDGES });
  return data.knowledges;
}

export async function getInfos(): Promise<InfosProps> {
  const { data } = await graphql.query({ query: GET_INFOS });
  return data;
}
