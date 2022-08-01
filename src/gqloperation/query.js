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
        id
        attributes {
          username
          email
          contact
          name
          start_date
          blocked
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

export const GET_ALL_INDICATOR = gql`
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
              }
            }
          }
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

export const GET_ANSWER_BY_ID_AND_INDICATOR = gql`
  query Answers($filters: AnswerFiltersInput) {
    answers(filters: $filters) {
      data {
        id
        attributes {
          rate
          answer
        }
      }
    }
  }
`;

export const GET_ALL_USER_FILTERS = gql`
  query UsersPermissionsUsers($filters: UsersPermissionsUserFiltersInput) {
    usersPermissionsUsers(filters: $filters) {
      data {
        id
        attributes {
          email
          username
          contact
          name
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

export const GET_ALL_DIMENSIONS_FILTER = gql`
  query Dimensions($filters: DimensionFiltersInput) {
    dimensions(filters: $filters) {
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
          indicators {
            data {
              id
              attributes {
                indicator
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_QUESTION = gql`
  query Questions {
    questions {
      data {
        id
        attributes {
          question
          isActive
          indicator {
            data {
              id
              attributes {
                indicator
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_PERIOD = gql`
  query Periods {
    periods {
      data {
        id
        attributes {
          description
          period_date
          employeer {
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


export const GET_ME = gql`
query Me {
  me {
    email
    id
  }
}
`;

export const GET_POST_ROLEID_BY_EVALUATORS_ID = gql`
query Evaluators($filters: EvaluatorFiltersInput) {
  evaluators(filters: $filters) {
    data {
      id
      attributes {
        periods {
          data {
            id
            attributes {
              description
              employeer {
                data {
                  id
                  attributes {
                    name
                    postRole {
                      data {
                        id
                        attributes{
                          postRole
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const GET_ANSWSER_AND_QUESTION_BY_DIMENSION=gql`
query Dimensions($filters: DimensionFiltersInput, $indicatorsFilters2: IndicatorFiltersInput, $questionsFilters2: QuestionFiltersInput) {
  dimensions(filters: $filters) {
    data {
      id
      attributes {
        indicators(filters: $indicatorsFilters2) {
          data {
            id
            attributes {
              indicator
              questions(filters: $questionsFilters2) {
                data {
                  id
                  attributes {
                    question
                  }
                }
              }
              answers {
                data {
                  id
                  attributes {
                    rate
                    answer
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

