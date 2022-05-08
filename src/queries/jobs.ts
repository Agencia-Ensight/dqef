import { gql } from "@apollo/client";

export type Job = {
  id: number;
  date_limit: string
  higher_course: {
    name: string
  },
  job_status: {
    name: string
  },
  job_type: {
    name: string
  },
  theme: string
  title: string
  value_pay: number
  value: number
  delivery: string,
  pages: number,
  plagiarism: number,
  instructions: string,
  job_format: {
    name: string
  }
  job_has_knowledges: {
    knowledge: {
      name: string
    }
  }[]
};
export type JobData = {
  jobs: Job[]
};
export const JOBS_QUERY = gql`
  query JobsQuery {
    jobs {
      id
      date_limit
      delivery
      theme
      title
      value_pay
      value
      pages
      instructions
      job_format {
        name
      }
      higher_course {
        name
      }
      job_status {
        name
      }
      job_type {
        name
      }
      job_has_knowledges {
        knowledge {
          name
        }
      }
    }
  }
`;

export type JobByPk = {
  jobs_by_pk: Job
};
export const JOB_QUERY = gql`
  query JobQuery($id: uuid!) {
    jobs_by_pk(id: $id) {
      date_limit
      delivery
      theme
      title
      value_pay
      value
      pages
      instructions
      job_format {
        name
      }
      higher_course {
        name
      }
      job_status {
        name
      }
      job_type {
        name
      }
      job_has_knowledges {
        knowledge {
          name
        }
      }
      id
    }
  }
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