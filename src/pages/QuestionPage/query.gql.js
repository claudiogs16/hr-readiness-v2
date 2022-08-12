import { gql } from "@apollo/client";

export const GET_DIMENSION = gql`
query Dimensions($filters: DimensionFiltersInput, $indicatorsFilters2: IndicatorFiltersInput) {
  dimensions(filters: $filters) {
    data {
      id
      attributes {
        dimension
        indicators(filters: $indicatorsFilters2) {
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

export const GET_QUESTION = gql`
query Questions($filters: QuestionFiltersInput) {
  questions(filters: $filters) {
    data {
      id
      attributes {
        question
      }
    }
  }
}
`;

export const GET_ANSWER = gql`
query Answers($filters: AnswerFiltersInput) {
  answers(filters: $filters) {
    data {
      id
      attributes {
        rate
        answer
        indicator {
          data {
            id
          }
        }
      }
    }
  }
}
`;