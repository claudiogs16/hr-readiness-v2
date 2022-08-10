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