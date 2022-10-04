import { gql } from "@apollo/client";

export type Job = {
  id: string;
  title: string;
  thema: string;
  value_pay: number;
  delivery: string;
  job_type: { id: string; name: string };
  higher_course: { id: string; name: string };
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
  maximum_plagiarism: number;
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
  thema: string;
  knowledge_id: number;
  user_id: number;
  pages: number;
  words: number;
  instructions: string;
  job_format_id: number;
  obs: string;
  maximum_plagiarism: string;
};

export type JobFormatProps = {
  id: number;
  name: string;
};

export type JobFormatsData = {
  job_formats: JobFormatProps[];
};

export const JOB_FRAGMENT = gql`
  fragment JobFragment on jobs {
    id
    date_limit
    job_media_types {
      id
      name
    }
    editor_id
    delivery
    thema
    title
    value_pay
    value
    pages
    words
    created_at
    instructions
    obs
    maximum_plagiarism
    user_id
    request_time
    job_format {
      id
      name
    }
    job_alterations {
      id
      obs
      job_alteration_has_medias {
        media {
          id
          link
          title
        }
      }
    }
    deliveries {
      obs
      delivery_has_medias {
        media {
          title
          link
        }
      }
    }
    proposals {
      id
      user_id
      user {
        avatar
        id
        name
      }
      proposal_status {
        id
        name
      }
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
    user_ratings {
      rating
      testimonial
    }
    notification_automations {
      notification_deadline {
        charge_day_1
        charge_day_2
        charge_day_3
      }
    }
  }
`;

export const GET_JOB = gql`
  query JobQuery($id: Int!) {
    jobs_by_pk(id: $id) {
      ...JobFragment
    }
  }
  ${JOB_FRAGMENT}
`;

export const GET_TOP_10_URGENT_JOBS = gql`
  query GetTopUrgentJobs($gte: date!, $lte: date!) {
    jobs(
      limit: 10
      where: {
        job_status: { id: { _eq: 1 } }
        date_limit: { _gte: $gte, _lte: $lte }
      },
      order_by: {created_at: desc},
    ) {
      ...JobFragment
    }
  }
  ${JOB_FRAGMENT}
`;

export const GET_TOP_10_JOBS = gql`
  query GetTopJobs($gte: date!) {
    jobs(
      limit: 10
      where: { job_status: { id: { _eq: 1 } }, date_limit: { _gte: $gte } }
    ) {
      ...JobFragment
    }
  }
  ${JOB_FRAGMENT}
`;

export const GET_URGENT_JOBS = gql`
  query GetUrgentJobs($gte: date!, $lte: date!) {
    jobs(
      where: {
        job_status: { id: { _eq: 1 } }
        date_limit: { _gte: $gte, _lte: $lte }
      },
      order_by: {created_at: desc},
    ) {
      ...JobFragment
    }
  }
  ${JOB_FRAGMENT}
`;

export const GET_JOBS = gql`
  query GetJobs($gte: date!) {
    jobs(
      where: { job_status: { id: { _eq: 1 } }, date_limit: { _gte: $gte } },
      order_by: {created_at: desc},
    ) {
      ...JobFragment
    }
  }
  ${JOB_FRAGMENT}
`;

export const GET_JOB_FORMATS = gql`
  query JobFormats {
    job_formats {
      id
      name
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation UpdateJobByPk(
    $id: Int!
    $object: jobs_set_input!
    $knowledges: [job_has_knowledges_insert_input!]!
    $deleteMedias: [Int!]
    $addMedias: [job_has_medias_insert_input!]!
  ) {
    update_jobs_by_pk(pk_columns: { id: $id }, _set: $object) {
      id
    }
    delete_job_has_knowledges(where: { job_id: { _eq: $id } }) {
      returning {
        id
      }
    }

    delete_medias(where: { id: { _in: $deleteMedias } }) {
      returning {
        id
      }
    }

    insert_job_has_medias(objects: $addMedias) {
      returning {
        id
      }
    }

    insert_job_has_knowledges(objects: $knowledges) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const UPDATE_JOB_STATUS = gql`
  mutation UpdateJobStatus($jobId: Int!, $statusId: Int!) {
    update_jobs(
      where: { id: { _eq: $jobId } }
      _set: { job_status_id: $statusId }
    ) {
      returning {
        id
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
    $thema: String!
    $knowledge_id: Int!
    $user_id: Int!
    $pages: Int!
    $words: Int!
    $instructions: String!
    $job_format_id: Int!
    $obs: String!
    $maximum_plagiarism: String!
    $job_media_type_id: Int!
    $job_medias: [job_has_medias_insert_input!]!
  ) {
    insert_jobs_one(
      object: {
        higher_course_id: $higher_course_id
        job_type_id: $job_type_id
        words: $words
        pages: $pages
        user_id: $user_id
        thema: $thema
        title: $title
        obs: $obs
        maximum_plagiarism: $maximum_plagiarism
        job_has_knowledges: { data: { knowledge_id: $knowledge_id } }
        job_has_medias: { data: $job_medias }
        job_status_id: $job_status_id
        job_format_id: $job_format_id
        value: $value
        value_pay: $value_pay
        date_limit: $date_limit
        delivery: $delivery
        instructions: $instructions
        job_media_type_id: $job_media_type_id
      }
    ) {
      id
    }
  }
`;

export const INSERT_DELIVERY = gql`
  mutation InsertPartialDelivery(
    $jobId: Int!
    $obs: String!
    $medias: [delivery_has_medias_insert_input!]!
  ) {
    insert_deliveries_one(
      object: {
        job_id: $jobId
        obs: $obs
        delivery_has_medias: { data: $medias }
      }
    ) {
      id
    }

    update_jobs(where: { id: { _eq: $jobId } }, _set: { job_status_id: 4 }) {
      returning {
        id
      }
    }
  }
`;

export const SEND_PROPOSAL = gql`
  mutation SendProposal(
    $jobId: Int!
    $userId: Int!
    $price: float8!
    $statusId: Int!
  ) {
    insert_proposals_one(
      object: {
        job_id: $jobId
        price: $price
        user_id: $userId
        proposal_status_id: $statusId
      }
    ) {
      id
    }
  }
`;

export const INSERT_JOB_REVIEW = gql`
  mutation InsertJobReview(
    $jobId: Int!
    $userId: Int!
    $reviwerId: Int!
    $review: Float!
    $testimonial: String
  ) {
    insert_user_ratings_one(
      object: {
        job_id: $jobId
        rating: $review
        testimonial: $testimonial
        user_id: $userId
        evaluator_user_id: $reviwerId
      }
    ) {
      id
    }
  }
`;

export const GET_JOBS_BY_USER = gql`
  query GetJobsByUser($userId: Int!, $statusesId: [Int!]) {
    jobs(
      where: { user_id: { _eq: $userId }, job_status_id: { _in: $statusesId } }
    ) {
      ...JobFragment
    }
  }
  ${JOB_FRAGMENT}
`;

export const UPDATE_PROPOSAL = gql`
  mutation UpdateProposal($proposalId: Int!, $statusId: Int!, $editorId: uuid) {
    update_proposals_by_pk(
      pk_columns: { id: $proposalId }
      _set: { proposal_status_id: $statusId }
    ) {
      id
    }
  }
`;

export const ACCEPT_PROPOSAL = gql`
  mutation AcceptProposal($proposalId: Int!, $jobId: Int!, $editorId: Int!) {
    update_proposals_by_pk(
      pk_columns: { id: $proposalId }
      _set: { proposal_status_id: 2 }
    ) {
      id
    }

    update_jobs_by_pk(
      pk_columns: { id: $jobId }
      _set: { editor_id: $editorId }
    ) {
      id
    }
  }
`;

export const GET_JOBS_BY_EDITOR = gql`
  query GetJobsByEditor($editorId: Int!, $statusesId: [Int!]) {
    jobs(
      where: {
        proposals: { user_id: { _eq: $editorId } }
        job_status_id: { _in: $statusesId }
      }
    ) {
      ...JobFragment
    }
  }
  ${JOB_FRAGMENT}
`;

export const GET_PROPOSALS_BY_JOB = gql`
  query GetProposalsByJob($jobId: Int!) {
    proposals(where: { job_id: { _eq: $jobId } }) {
      id
      job {
        id
      }
      proposal_status {
        id
        name
      }
      price
      user {
        avatar
        id
        name
        higher_course {
          name
        }
        formation {
          name
        }
        userRatingsByUserId_aggregate {
          aggregate {
            avg {
              rating
            }
          }
        }
      }
    }
  }
`;

export const ADD_JOB_PAYMENT = gql`
  mutation AddPayment(
    $jobId: Int!
    $paymentMethodId: Int!
    $userId: Int!
    $mediaId: Int!
  ) {
    insert_user_payments_one(
      object: {
        job_id: $jobId
        payment_method_id: $paymentMethodId
        user_id: $userId
        media_id: $mediaId
      }
    ) {
      id
    }
  }
`;

export const INSERT_JOB_CHANGE = gql`
  mutation InsertJobChange(
    $jobId: Int!
    $obs: String!
    $medias: [job_alteration_has_medias_insert_input]!
    $jobStatus: Int!
  ) {
    insert_job_alterations_one(
      object: {
        job_id: $jobId
        obs: $obs
        job_alteration_has_medias: { data: $medias }
      }
    ) {
      id
    }

    update_jobs_by_pk(
      pk_columns: { id: $jobId }
      _set: { job_status_id: $jobStatus }
    ) {
      id
    }
  }
`;

export const INSERT_JOB_REQUEST_TIME = gql`
  mutation InsertJobRequestTime($jobId: Int!) {
    update_jobs_by_pk(
      pk_columns: { id: $jobId }
      _set: { request_time: true }
    ) {
      id
    }
  }
`;
