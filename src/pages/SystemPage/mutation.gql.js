import { gql } from "@apollo/client";

export const UPDATE_SYSTEM = gql`
mutation Mutation($data: SystemInput!) {
  updateSystem(data: $data) {
    data {
      attributes {
        company
        email
      }
    }
  }
}
`;