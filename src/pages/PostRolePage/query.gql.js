import { gql } from "@apollo/client";

export const GET_POST_ROLE = gql`
query PostRoles {
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