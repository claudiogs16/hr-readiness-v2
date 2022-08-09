import { gql } from "@apollo/client";

export const GET_SYSTEM_DATA = gql`
query System {
  system {
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