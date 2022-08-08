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

export const UPDATE_USER_PASSWORD = gql`
  mutation Mutation(
    $updateUsersPermissionsUserId: ID!
    $data: UsersPermissionsUserInput!
  ) {
    updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
      data {
        attributes {
          email
        }
      }
    }
  }
`;