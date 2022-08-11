import { gql } from "@apollo/client";

export const CREATE_INDICATOR = gql`
mutation Mutation($data: IndicatorInput!) {
    createIndicator(data: $data) {
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

export const UPDATE_INDICATOR = gql`
mutation Mutation($updateIndicatorId: ID!, $data: IndicatorInput!) {
    updateIndicator(id: $updateIndicatorId, data: $data) {
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