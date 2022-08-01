import { gql, useLazyQuery } from "@apollo/client";
import { Grid, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import CustomList from "../../components/List/custom-list.component";
import { GET_ME } from "../../gqloperation/query";
import EditIcon from "@mui/icons-material/Edit";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

const AnalyticsHistory = () => {
  const jwt = localStorage.getItem("jwtToken");
  const refPeriodsArray = useRef([]);
  const [loading, setLoading] = useState(true);

  const [getMe] = useLazyQuery(GET_ME);
  const [getPeriodFilter] = useLazyQuery(GET_PERIOD_FILTER_BY_EMPLOYEER_ID);

  useEffect(() => {
    getMe({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then((d) => {
      getPeriodFilter({
        variables: {
          filters: {
            employeer: {
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
      }).then((d) => {
        // console.log(d);
        for (let index = 0; index < d.data.periods.data.length; index++) {
          let period = d.data.periods.data[index];
          // console.log(period)
          for (
            let index = 0;
            index < period.attributes.evaluators.data.length;
            index++
          ) {
            const evaluator = period.attributes.evaluators.data[index];
            if (evaluator.attributes.ratings.data.length > 0) {
              refPeriodsArray.current.push(period);
              break;
            }
          }
        }

        console.log(refPeriodsArray.current);
        setLoading(false);
      });
    });

    console.log("teste");
  }, []);

  if (loading) return <></>;
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {refPeriodsArray.current &&
            refPeriodsArray.current.map((period) => (
              <ListItem
                key={period.id}
                secondaryAction={
                  <IconButton aria-label="edit" onClick={() => {}}>
                    <LeaderboardIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={period.attributes.description}
                  secondary={period.attributes.period_date}
                />
              </ListItem>
            ))}
        </List>
      </Grid>
    </Grid>
  );
};

const GET_PERIOD_FILTER_BY_EMPLOYEER_ID = gql`
  query Periods($filters: PeriodFiltersInput) {
    periods(filters: $filters) {
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
          evaluators {
            data {
              id
              attributes {
                ratings {
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
`;

export default AnalyticsHistory;
