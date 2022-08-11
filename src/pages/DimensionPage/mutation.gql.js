import { gql } from "@apollo/client";

export const CREATE_DIMENSION = gql`
mutation Mutation($data: DimensionInput!) {
    createDimension(data: $data) {
      data {
        id
        attributes {
          dimension
          postRoles {
            data {
              id
              attributes {
                postRole
                description
              }
            }
          }
        }
      }
    }
  }
`;

export const UPDATE_DIMENSION = gql`
mutation Mutation($updateDimensionId: ID!, $data: DimensionInput!) {
    updateDimension(id: $updateDimensionId, data: $data) {
      data {
        id
        attributes {
          dimension
          postRoles {
            data {
              id
              attributes {
                postRole
                description
              }
            }
          }
        }
      }
    }
  }
`;