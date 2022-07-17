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

export const GET_ALL_USER_DATA_BY_ID = gql`
  query UsersPermissionsUsers($filters: UsersPermissionsUserFiltersInput) {
    usersPermissionsUsers(filters: $filters) {
      data {
        attributes {
          username
          email
          contact
          name
          start_date
          userRole {
            data {
              id
              attributes {
                role
                description
              }
            }
          }
          postRole{
            data{
              id
              attributes{
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
