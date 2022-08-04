import { gql, useLazyQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import {
  Radar,
  RadarChart,
  Legend,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Administração",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "R.H",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "T.I",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Tec.Sistemas",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Informação",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Outros",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];
const DripChart = ({ periodID }) => {
  const jwt = localStorage.getItem("jwtToken");
  const refPeriodData = useRef([]);
  const colorCode = ["#87CEEB", "#008B8B", "#D2691E", "#DC143C"];

  const [getPostRoles] = useLazyQuery(GET_POST_ROLES_BY_PERIODS);
  const [getDimensions] = useLazyQuery(GET_DIMENSION_BY_POSTROLE_AND_EVALUATOR);

  useEffect(() => {
    getPostRoles({
      variables: {
        filters: {
          id: {
            eq: periodID,
          },
        },
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then((d) => {
      console.log(
        d.data.periods.data[0].attributes.evaluators.data[0].attributes
          .employeers.data.attributes.postRole.data.id
      );

      let dimensionName = "";
      let sum = 0;
      let totalRate = 0;

      //Capturar postRole e evaluator
      for (
        let index = 0;
        index < d.data.periods.data[0].attributes.evaluators.data.length;
        index++
      ) {
        const evaluators =
          d.data.periods.data[0].attributes.evaluators.data[index];

        refPeriodData.current.push({
          evaluatorID: evaluators.id,
          postRoleID:
            evaluators.attributes.employeers.data.attributes.postRole.data.id,
          postRole:
            evaluators.attributes.employeers.data.attributes.postRole.data
              .attributes.postRole,
        });
      }

      console.log(refPeriodData.current);
      console.log("Evaluator and PostRole Read");

      //Capturar Dimensão

      for (let index = 0; index < refPeriodData.current.length; index++) {
        console.log(refPeriodData.current[index]);

        getDimensions({
          variables:{
            "filters": {
              "postRoles": {
                "id": {
                  "eq": refPeriodData.current[index].postRoleID
                }
              },
              "indicators": {
                "questions": {
                  "ratings": {
                    "evaluator": {
                      "id": {
                        "eq": refPeriodData.current[index].evaluatorID
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
        }).then(d=>{
          console.log(d)
        });
      }
    });
  }, []);

  console.log(periodID);

  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          key={1}
          name="CEO"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Radar
          key={2}
          name="R.H"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          key={2}
          name="Teste"
          dataKey="C"
          stroke="#8784d8"
          fill="#8784d8"
          fillOpacity={0.6}
        />
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
                          attributes {
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

const GET_DIMENSION_BY_POSTROLE_AND_EVALUATOR = gql`
  query Dimensions($filters: DimensionFiltersInput) {
    dimensions(filters: $filters) {
      data {
        id
        attributes {
          dimension
          indicators {
            data {
              id
              attributes {
                answers {
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
`;

export default DripChart;
