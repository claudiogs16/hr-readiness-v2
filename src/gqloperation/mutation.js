import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        email
      }
    }
  }
`;

export const UPDATE_PASSWORD_USER = gql`
  mutation Mutation(
    $updateUsersPermissionsUserId: ID!
    $data: UsersPermissionsUserInput!
  ) {
    updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
      data {
        attributes {
          email
        }
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUsersPermissionsUser($data: UsersPermissionsUserInput!) {
    createUsersPermissionsUser(data: $data) {
      data {
        id
      }
    }
  }
`;

export const CREATE_POST_ROLE = gql`
  mutation CreatePostRole($data: PostRoleInput!) {
    createPostRole(data: $data) {
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

export const UPDATE_SYSTEM_DATA = gql`
  mutation UpdateSystem($data: SystemInput!) {
    updateSystem(data: $data) {
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

export const UPDATE_USER_DATA = gql`
  mutation UpdateUsersPermissionsUser(
    $updateUsersPermissionsUserId: ID!
    $data: UsersPermissionsUserInput!
  ) {
    updateUsersPermissionsUser(id: $updateUsersPermissionsUserId, data: $data) {
      data {
        id
        attributes {
          name
          start_date
          contact
          blocked
          email
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
          isResetPassword
        }
      }
    }
  }
`;

export const CREATE_DIMENSION = gql`
  mutation CreateDimension($data: DimensionInput!) {
    createDimension(data: $data) {
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
          isActive
        }
      }
    }
  }
`;

export const CREATE_INDICATOR = gql`
mutation CreateIndicator($data: IndicatorInput!) {
  createIndicator(data: $data) {
    data {
      id
      attributes {
        indicator
      }
    }
  }
}
`;

export const CREATE_QUESTION = gql`
mutation CreateQuestion($data: QuestionInput!) {
  createQuestion(data: $data) {
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

export const UPDATE_DIMENSION = gql`
mutation UpdateDimension($updateDimensionId: ID!, $data: DimensionInput!) {
  updateDimension(id: $updateDimensionId, data: $data) {
    data {
      id
      attributes {
        dimension
        isActive
      }
    }
  }
}
`;

export const UPDATE_INDICATOR = gql`
mutation UpdateIndicator($updateIndicatorId: ID!, $data: IndicatorInput!) {
  updateIndicator(id: $updateIndicatorId, data: $data) {
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

export const UPDATE_QUESTION = gql`
mutation UpdateQuestion($updateQuestionId: ID!, $data: QuestionInput!) {
  updateQuestion(id: $updateQuestionId, data: $data) {
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

export const UPDATE_POST_ROLE = gql`
mutation Mutation($updatePostRoleId: ID!, $data: PostRoleInput!) {
  updatePostRole(id: $updatePostRoleId, data: $data) {
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


