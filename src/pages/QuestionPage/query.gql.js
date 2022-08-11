import { gql } from "@apollo/client";

export const GET_INDICATOR = gql`
query Query($filters: IndicatorFiltersInput) {
    indicators(filters: $filters) {
      data {
        id
        attributes {
          indicator
          dimension {
            data {
              id
              attributes {
                dimension
              }
            }
          }
        }
      }
    }
  }
`;