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

export const CREATE_POST_ROLE = gql`
mutation CreatePostRole($data: PostRoleInput!) {
  createPostRole(data: $data) {
    data {
      id
      attributes {
        postRole
        description
      }
    }
  }
}
`;

export const UPDATE_SYSTEM_DATA = gql`
mutation UpdateSystem($data: SystemInput!) {
  updateSystem(data: $data) {
    data {
      id
      attributes {
        company
        email
      }
    }
  }
}
`;

export const UPDATE_USER_DATA = gql`
mutation UpdateUsersPermissionsUser($updateUsersPermissionsUserId: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
    data {
      id
      attributes {
        name
        start_date
        contact
        blocked
        email
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
        isResetPassword
      }
    }
  }
}
`;
