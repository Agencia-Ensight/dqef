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
