import { gql } from "@apollo/client";


export const GET_POST_ROLES = gql`
query Query {
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
`;

export const GET_DIMENSIONS = gql`
query Query {
  dimensions {
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

export const GET_POST_ROLE_ID_BY_POST_ROLE_NAME = gql`
query PostRoles($filters: PostRoleFiltersInput) {
  postRoles(filters: $filters) {
    data {
      id
    }
  }
}
`;