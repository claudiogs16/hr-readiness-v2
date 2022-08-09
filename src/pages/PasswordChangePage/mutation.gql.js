import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        email
      }
    }
  }
`;

export const UPDATE_PASSWORD = gql`
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
