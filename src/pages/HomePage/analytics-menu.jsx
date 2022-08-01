import { Grid } from "@mui/material";
import CardMenu from "../../components/MainCard/card-menu.component";
import { gql } from "@apollo/client";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import { GET_ME } from "../../gqloperation/query";

import { useNavigate } from "react-router-dom";

const AnalyticsMenu = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [analyticsTotal, setAnalyticsTotal] = useState(0);
  const [analyticsPerfomed, setAnalyticsPerfomed] = useState(0);
  const [analyticsPending, setAnalyticsPending] = useState(0);
  const [loading, setLoading] = useState(true);
  const refAnalyticsTotal = useRef(0);
  const refAnalyticsPerfomed = useRef(0);
  const refAnalyticsPending = useRef(0);

  const [getAllEvaluators] = useLazyQuery(GET_ALL_EVALUATORS);
  const [getMe] = useLazyQuery(GET_ME);

  useEffect(() => {
    getMe({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then((d) => {
      getAllEvaluators({
        variables: {
          filters: {
            employeers: {
              id: {
                eq: d.data.me.id,
              },
            },
          },
        },
        context: {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        },
        fetchPolicy: "network-only",
      })
        .then((evaluators) => {
          setAnalyticsTotal(evaluators.data.evaluators.data.length);

          if (analyticsTotal !== 0) {
            evaluators.data.evaluators.data.map((evaluator) => {
              if (evaluator.attributes.ratings.data.length)
                setAnalyticsPerfomed(analyticsPerfomed + 1);
            });
          }
          setLoading(false);
        })
        .then((d) => {
          setAnalyticsPending(analyticsTotal - analyticsPerfomed);
        });
    });
  }, []);

  if (loading) return <></>;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <CardMenu
          btnName="Avaliações"
          count={analyticsTotal}
          bgcolor="#F9FAFE"
          url="evaluation/all/list"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardMenu
          btnName="Efectuado"
          count={analyticsPerfomed}
          bgcolor="#F9FAFE"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CardMenu
          btnName="Pendente"
          count={analyticsPending}
          bgcolor="#F9FAFE"
        />
      </Grid>
    </Grid>
  );
};

const GET_ALL_EVALUATORS = gql`
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
          ratings {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export default AnalyticsMenu;
