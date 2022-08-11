import { gql } from "@apollo/client";

export const GET_DIMENSIONS = gql`
query Dimensions {
    dimensions {
      data {
        id
        attributes {
          dimension
        }
      }
    }
  }
`;

export const GET_INDICATORS = gql`
query Indicators {
    indicators {
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