import { gql } from "@apollo/client";

export type Question = {
  id: number;
  question: string;
  user: {
    avatar: string;
    name: string;
  };
  user_job_question_replies: {
    question: string;
  }[];
};

export const INSERT_QUESTION = gql`
  mutation InsertQuestion($job_id: uuid!, $question: String!, $user_id: uuid!) {
    insert_user_job_questions_one(
      object: { job_id: $job_id, question: $question, user_id: $user_id }
    ) {
      id
    }
  }
`;

export const INSERT_ANSWER = gql`
  mutation InsertAnswer($answer: String!, $user_job_question_id: Int!) {
    insert_user_job_question_replies_one(
      object: { question: $answer, user_job_question_id: $user_job_question_id }
    ) {
      id
    }
  }
`;

export const QUESTIONS_BY_JOB = gql`
  query QuestionsByJob($job: uuid!) {
    user_job_questions(
      where: { job_id: { _eq: $job } }
      order_by: { created_at: desc }
    ) {
      id
      question
      user {
        avatar
        name
      }
      user_job_question_replies {
        question
      }
    }
  }
`;
