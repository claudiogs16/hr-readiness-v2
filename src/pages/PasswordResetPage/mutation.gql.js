import { gql } from "@apollo/client";


export const RESET_PASSWORD = gql`
mutation UpdateUsersPermissionsUser(
    $data: UsersPermissionsUserInput!
    $updateUsersPermissionsUserId: ID!
  ) {
    updateUsersPermissionsUser(data: $data, id: $updateUsersPermissionsUserId) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;