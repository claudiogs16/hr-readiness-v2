import { gql } from "@apollo/client";

export const GET_EMPLOYEER_DATA = gql`
query UsersPermissionsUser($usersPermissionsUserId: ID) {
    usersPermissionsUser(id: $usersPermissionsUserId) {
      data {
        id
        attributes {
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
        }
      }
    }
  }
`;