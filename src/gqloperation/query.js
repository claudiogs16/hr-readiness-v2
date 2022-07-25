import { gql } from "@apollo/client";

export const USER_BY_EMAIL = gql`
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

export const GET_ALL_USERS = gql`
  query Query {
    usersPermissionsUsers {
      data {
        id
        attributes {
          name
          email
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
          postRole {
            data {
              id
              attributes {
                postRole
                description
              }
            }
          }
          contact
          blocked
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
          postRole {
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

export const GET_ALL_POST_ROLE = gql`
  query PostRoles {
    postRoles {
      data {
        id
        attributes {
          postRole
          description
          users {
            data {
              attributes {
                name
              }
              id
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_USER_ROLE = gql`
  query Query {
    userRoles {
      data {
        id
        attributes {
          role
          description
          users {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_SYSTEM_DATA = gql`
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

export const GET_GET_POST_ROLES_FILTERS = gql`
query PostRoles($filters: PostRoleFiltersInput) {
  postRoles(filters: $filters) {
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


export const GET_ALL_DIMENSIOS = gql`
query Dimensions {
  dimensions {
    data {
      id
      attributes {
        dimension
        isActive
        indicators {
          data {
            id
            attributes {
              indicator
              isActive
            }
          }
        }
        postRoles{
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

export const GET_ALL_INDICATOR = gql`
query Indicators($filters: IndicatorFiltersInput) {
  indicators(filters: $filters) {
    data {
      id
      attributes {
        indicator
        isActive
      }
    }
  }
}
`;

export const GET_DIMENSION_BY_ID = gql`
query Data($filters: DimensionFiltersInput) {
  dimensions(filters: $filters) {
    data {
      id
      attributes {
        dimension
        isActive
        indicators {
          data {
            id
            attributes {
              indicator
              isActive
            }
          }
        }
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

export const GET_INDICATOR_BY_ID = gql`
query Indicators($filters: IndicatorFiltersInput) {
  indicators(filters: $filters) {
    data {
      id
      attributes {
        indicator
        isActive
        dimension {
          data {
            id
            attributes {
              dimension
              isActive
            }
          }
        }
      }
    }
  }
}
`;

export const GET_QUESTION_BY_ID = gql`
query Questions($filters: QuestionFiltersInput) {
  questions(filters: $filters) {
    data {
      id
      attributes {
        question
        isActive
      }
    }
  }
}
`;