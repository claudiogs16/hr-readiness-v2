import { gql } from "@apollo/client";

export const CREATE_EMPLOYEER = gql`
mutation Mutation($data: UsersPermissionsUserInput!) {
    createUsersPermissionsUser(data: $data) {
      data {
        id
        attributes {
          email
          blocked
          contact
          start_date
          name
          postRole {
            data {
              id
              attributes {
                postRole
                description
              }
            }
          }
          userRole {
            data {
              id
              attributes {
                role
                description
              }
            }
          }
        }
      }
    }
  }
`;

export const UPDATE_EMPLOYEER = gql`
mutation UpdateUsersPermissionsUser($updateUsersPermissionsUserId: ID!, $data: UsersPermissionsUserInput!) {
    updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
      data {
        id
        attributes {
          email
          blocked
          contact
          start_date
          name
          postRole {
            data {
              id
              attributes {
                postRole
                description
              }
            }
          }
          userRole {
            data {
              id
              attributes {
                role
                description
              }
            }
          }
        }
      }
    }
  }
`;