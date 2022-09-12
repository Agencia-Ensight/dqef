import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($id: Int!) {
    users_by_pk(id: $id) {
      id
      college_id
      formation_id
      higher_course_id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $userId: Int!
    $formationId: Int!
    $courseId: Int!
    $collegeId: Int!
    $knowledgeId: Int!
  ) {
    update_users_by_pk(
      pk_columns: { id: $userId }
      _set: {
        formation_id: $formationId
        higher_course_id: $courseId
        college_id: $collegeId
      }
    ) {
      id
    }

    update_user_knowledges(
      where: { user_id: { _eq: $userId } }
      _set: { knowledge_id: $knowledgeId }
    ) {
      returning {
        id
      }
    }
  }
`;
