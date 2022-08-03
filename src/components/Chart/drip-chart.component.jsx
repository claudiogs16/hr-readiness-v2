import { gql, useLazyQuery } from '@apollo/client';
import { useEffect, useRef, useState } from 'react';
import { Radar, RadarChart, Legend, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const data = [
  {
    subject: 'Administração',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'R.H',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'T.I',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Tec.Sistemas',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Informação',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Outros',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];
const DripChart = ({periodID}) => {
  const jwt = localStorage.getItem("jwtToken");
  const refPeriodData = useRef([])


const [getPostRoles] = useLazyQuery(GET_POST_ROLES_BY_PERIODS);
const [getDimension] = useLazyQuery(GET_DIMENSIONS_BY_EVALUATOR);

useEffect(()=>{

  getPostRoles({
    variables: {
      "filters": {
        "id": {
          "eq": periodID
        }
      }
    },
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
    fetchPolicy: "network-only",
  }).then(d=>{
    console.log(d.data.periods.data[0].attributes.evaluators.data[0].attributes.employeers.data.attributes.postRole.data.id)

    for (let index = 0; index < d.data.periods.data[0].attributes.evaluators.data.length; index++) {
      const evaluators = d.data.periods.data[0].attributes.evaluators.data[index];

      refPeriodData.current.push({evaluatorID: evaluators.id, postRoleID: evaluators.attributes.employeers.data.attributes.postRole.data.id})
      
    }

    console.log(refPeriodData.current)
    console.log("Evaluator and PostRole Read")

    getDimension({
      variables: {
        
          "filters": {
            "postRoles": {
              "id": {
                "eq": refPeriodData.current.postRoleID
              },
              "dimension": {
                "indicators": {
                  "questions": {
                    "ratings": {
                      "evaluator": {
                        "id": {
                          "eq": refPeriodData.current.evaluatorID
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    })
    
  })

},[])


console.log(periodID)

  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar key={1} name="CEO" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Radar key={2} name="R.H" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const GET_POST_ROLES_BY_PERIODS = gql`
query Periods($filters: PeriodFiltersInput) {
  periods(filters: $filters) {
    data {
      attributes {
        evaluators {
          data {
            id
            attributes {
              employeers {
                data {
                  attributes {
                    name
                    postRole {
                      data {
                        id
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

const GET_DIMENSIONS_BY_EVALUATOR = gql`
query Data($filters: DimensionFiltersInput) {
  dimensions(filters: $filters) {
    data {
      id
      attributes {
        indicators {
          data {
            id
            attributes {
              questions {
                data {
                  id
                  attributes {
                    ratings {
                      data {
                        id
                        attributes {
                          answer {
                            data {
                              id
                              attributes {
                                rate
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
        postRoles {
          data {
            id
            attributes {
              postRole
            }
          }
        }
      }
    }
  }
}
`;

export default DripChart;
