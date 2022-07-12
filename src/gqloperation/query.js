import { gql } from "@apollo/client";

export const USER_BY_EMAIL = gql`
query UsersPermissionsUsers($filters: UsersPermissionsUserFiltersInput) {
  usersPermissionsUsers(filters: $filters) {
    data {
      attributes {
        email
        isResetPassword
      }
    }
  }
}
`;
