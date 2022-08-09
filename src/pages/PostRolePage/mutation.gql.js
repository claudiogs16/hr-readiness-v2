import { gql } from "@apollo/client";

export const CREATE_POST_ROLE = gql`
mutation Mutation($data: PostRoleInput!) {
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

export const UPDATE_POST_ROLE = gql`
mutation UpdatePostRole($updatePostRoleId: ID!, $data: PostRoleInput!) {
  updatePostRole(id: $updatePostRoleId, data: $data) {
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