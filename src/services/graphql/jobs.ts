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
};

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
    jobs() {
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
    jobs() {
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
