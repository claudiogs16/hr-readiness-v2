import { gql } from "@apollo/client";


export const DELETE_QUESTION = gql`
mutation Mutation($deleteQuestionId: ID!) {
    deleteQuestion(id: $deleteQuestionId) {
      data {
        id
        attributes {
          question
          indicator {
            data {
              id
              attributes {
                indicator
              }
            }
          }
        }
      }
    }
  }
`;

export const CREATE_QUESTION = gql`
mutation Mutation($data: QuestionInput!) {
    createQuestion(data: $data) {
      data {
        id
        attributes {
          question
        }
      }
    }
  }
`;