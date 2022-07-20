import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
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

export const UPDATE_PASSWORD_USER = gql`
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

export const CREATE_USER = gql`
  mutation CreateUsersPermissionsUser($data: UsersPermissionsUserInput!) {
    createUsersPermissionsUser(data: $data) {
      data {
        id
      }
    }
  }
`;
