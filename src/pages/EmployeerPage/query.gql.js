import { gql } from "@apollo/client";

export const GET_EMPLOYEERS = gql`
query UsersPermissionsUsers {
    usersPermissionsUsers {
      data {
        id
        attributes {
          name
          email
          contact
          start_date
          blocked
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
        }
      }
    }
  }
`;

export const GET_POST_ROLES = gql`
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

export const GET_USER_ROLES = gql`
query UserRoles {
  userRoles {
    data {
      id
      attributes {
        role
        description
      }
    }
  }
}
`;