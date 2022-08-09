import { gql } from "@apollo/client";

export const GET_EMPLOYEER_DATA = gql`
query UsersPermissionsUser($usersPermissionsUserId: ID) {
    usersPermissionsUser(id: $usersPermissionsUserId) {
      data {
        id
        attributes {
          email
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