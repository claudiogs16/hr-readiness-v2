import { gql } from "@apollo/client";

export const GET_EMPLOYEER_BY_EMAIL = gql`
query UsersPermissionsUsers($filters: UsersPermissionsUserFiltersInput) {
    usersPermissionsUsers(filters: $filters) {
      data {
        id
        attributes {
          email
          isResetPassword
        }
      }
    }
  }
`;