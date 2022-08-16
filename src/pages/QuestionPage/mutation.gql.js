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


export const CREATE_ANSWER = gql`
mutation CreateAnswer($data: AnswerInput!) {
  createAnswer(data: $data) {
    data {
      id
      attributes {
        rate
        answer
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