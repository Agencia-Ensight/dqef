import { gql } from "@apollo/client";

export type Job = {
  id: string;
  title: string;
  theme: string;
  value_pay: number;
  delivery: string;
  job_type: { name: string };
  higher_course: { name: string };
  job_has_knowledges: { knowledge: { name: string } }[];
  job_format: {
    name: string;
  };
  date_limit: string;

  job_status: {
    name: string;
  };
  value: number;
  pages: number;
  words: number;
  obs: string;
  maximum_plagiarism: string;
  instructions: string;
  job_has_medias: {
    media: {
      id: string;
      link: string;
      title: string;
    };
  }[];
};

export type CreateJobProps = {
  higher_course_id: number;
  job_status_id: number;
  job_type_id: number;
  title: string;
  value: number;
  value_pay: number;
  date_limit: Date;
  delivery: Date;
  theme: string;
  knowledge_id: number;
  user_id: string;
  pages: number;
  words: number;
  instructions: string;
  job_format_id: number;
  obs: string;
  maximum_plagiarism: string;
};

export const JOB_FRAGMENT = gql`
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
    obs
    maximum_plagiarism
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

export const GET_JOB = gql`
  query JobQuery($id: uuid!) {
    jobs_by_pk(id: $id) {
      ...JobFragment
    }
  }
  ${JOB_FRAGMENT}
`;

export const GET_TOP_10_URGENT_JOBS = gql`
  query {
    jobs(limit: 10) {
      id
      title
      theme
      value_pay
      delivery
      job_has_knowledges {
        knowledge {
          name
        }
      }
      job_format {
        name
      }
    }
  }
`;

export const GET_TOP_10_JOBS = gql`
  query {
    jobs(limit: 10) {
      id
      title
      theme
      value_pay
      delivery
      job_type {
        name
      }
      higher_course {
        name
      }
      job_has_knowledges {
        knowledge {
          name
        }
      }
      job_format {
        name
      }
    }
  }
`;

export const GET_URGENT_JOBS = gql`
  query {
    jobs {
      id
      title
      theme
      value_pay
      delivery
      job_has_knowledges {
        knowledge {
          name
        }
      }
      job_format {
        name
      }
    }
  }
`;

export const GET_JOBS = gql`
  query {
    jobs {
      id
      title
      theme
      value_pay
      delivery
      job_type {
        name
      }
      higher_course {
        name
      }
      job_has_knowledges {
        knowledge {
          name
        }
      }
      job_format {
        name
      }
    }
  }
`;

export const INSERT_JOB = gql`
  mutation InsertJob(
    $higher_course_id: Int!
    $job_status_id: Int!
    $job_type_id: Int!
    $title: String!
    $value: Float!
    $value_pay: Float!
    $date_limit: date!
    $delivery: date!
    $theme: String!
    $knowledge_id: Int!
    $user_id: uuid!
    $pages: Int!
    $words: Int!
    $instructions: String!
    $job_format_id: Int!
    $obs: String!
    $maximum_plagiarism: String!
  ) {
    insert_jobs_one(
      object: {
        higher_course_id: $higher_course_id
        job_type_id: $job_type_id
        words: $words
        pages: $pages
        user_id: $user_id
        theme: $theme
        title: $title
        obs: $obs
        maximum_plagiarism: $maximum_plagiarism
        job_has_knowledges: { data: { knowledge_id: $knowledge_id } }
        job_status_id: $job_status_id
        job_format_id: $job_format_id
        value: $value
        value_pay: $value_pay
        date_limit: $date_limit
        delivery: $delivery
        instructions: $instructions
      }
    ) {
      id
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation UpdateJobByPk(
    $id: uuid!
    $object: jobs_set_input!
    $knowledges: [job_has_knowledges_insert_input!]!
  ) {
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
