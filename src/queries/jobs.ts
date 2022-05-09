import { gql } from "@apollo/client";

export type Job = {
  id: string;
  date_limit: string
  higher_course: {
    id: number;
    name: string
  },
  job_status: {
    name: string
  },
  job_type: {
    id: number
    name: string
  },
  theme: string
  title: string
  value_pay: number
  value: number
  delivery: string,
  pages: number,
  words: number,
  plagiarism: number,
  instructions: string,
  job_format: {
    id: number
    name: string
  }
  job_has_knowledges: {
    knowledge: {
      id: number
      name: string
    }
  }[],
  job_has_medias: {
    media: {
      id: string
      link: string
      title: string
    }
  }[],
};
export type JobData = {
  jobs: Job[]
};

export const JOBS_FRAGMENT = gql`
  fragment JobFragment on jobs {
    id
    date_limit
    delivery
    theme
    title
    value_pay
    value
    pages
    words
    instructions
    job_format {
      id
      name
    }
    higher_course {
      id
      name
    }
    job_status {
      id
      name
    }
    job_type {
      id
      name
    }
    job_has_knowledges {
      knowledge {
        id
        name
      }
    }
    job_has_medias {
      media {
        id
        link
        title
      }
    }
  }
`;

export const JOBS_QUERY = gql`
  query JobsQuery {
    jobs {
      ...JobFragment
    }
  }
  ${JOBS_FRAGMENT}
`;

export type JobByPk = {
  jobs_by_pk: Job
};
export const JOB_QUERY = gql`
  query JobQuery($id: uuid!) {
    jobs_by_pk(id: $id) {
      ...JobFragment
    }
  }
  ${JOBS_FRAGMENT}
`;

export type JobType = {
  id: number;
  name: string;
}
export type JobTypesData = {
  'job_types': JobType[];
}

export const JOB_TYPES = gql`
  query JobTypes {
    job_types {
    id
    name
  }
}
`;

export type HigherCourse = {
  id: number;
  name: string;
}
export type HigherCoursesData = {
  'higher_courses': HigherCourse[];
}

export const HIGHER_COURSES = gql`
  query HigherCourses {
    higher_courses {
    id
    name
  }
}
`;

export type Knowledges = {
  id: number;
  name: string;
}
export type KnowledgesData = {
  'knowledges': Knowledges[];
}

export const KNOWLEDGES = gql`
  query Knowledges {
    knowledges {
    id
    name
  }
}
`;

export type JobFormat = {
  id: number;
  name: string;
}
export type JobFormatsData = {
  'job_formats': JobFormat[];
}

export const JOB_FORMATS = gql`
  query JobFormats {
    job_formats {
    id
    name
  }
}
`;

export const INSERT_JOB = gql`
  mutation InsertJob($higher_course_id: Int!, $job_status_id: Int!, $job_type_id: Int!, $title: String!, $value: Float!, $value_pay: Float!, $date_limit: date!, $delivery: date!, $theme: String!, $knowledge_id: Int!, $user_id: uuid!, $pages: Int!, $words: Int!, $instructions: String!, $job_format_id: Int!) {
  insert_jobs_one(object: {
    higher_course_id: $higher_course_id,
    job_type_id: $job_type_id,
    words: $words,
    pages: $pages,,
    user_id: $user_id,
    theme: $theme,
    title: $title,,
    job_has_knowledges: {
      data: {
        knowledge_id: $knowledge_id
      }
    },
    job_status_id: $job_status_id,
    job_format_id: $job_format_id,
    value: $value,
    value_pay: $value_pay,
    date_limit: $date_limit,
    delivery: $delivery,
    instructions: $instructions,
  }
  ) {
    id
  }
}
`;

export const UPDATE_JOB_BY_PK = gql`
  mutation UpdateJobByPk($id: uuid!, $object: jobs_set_input!, $knowledges: [job_has_knowledges_insert_input!]!) {
  update_jobs_by_pk(pk_columns: { id: $id }, _set: $object) {
    id
  }
  delete_job_has_knowledges(where: { job_id: { _eq: $id } }) {
      returning {
      id
    }
  }
  insert_job_has_knowledges(objects: $knowledges) {
    affected_rows
  }
}
`;