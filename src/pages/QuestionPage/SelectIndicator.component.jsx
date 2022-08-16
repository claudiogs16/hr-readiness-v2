import { useLazyQuery } from "@apollo/client";
import { FormControl, Grid, InputLabel, Select } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import MainCard from "../../components/MainCard/main-card.component";
import { GET_DIMENSION } from "./query.gql";


const SelectIndicator = ({ dimensions, setDimensions, indicatorID, setIndicatorID }) => {
  const jwt = localStorage.getItem("jwtToken");

  const [getDimensions] = useLazyQuery(GET_DIMENSION)


  useEffect(() => {
    getDimensions({
      variables: {
        "filters": {
          "isActive": {
            "eq": true
          }
        },
        "indicatorsFilters2": {
          "isActive": {
            "eq": true
          }
        }
      },
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: 'network-only'
    }).then(data => {
      setDimensions(data.data.dimensions.data)
    })

  }, [])


  const handleChangeIndicator = e => {
    setIndicatorID(e.target.value)
  }



  return (
    <MainCard title="Selecionar Indicador">
      <FormControl sx={{ minWidth: '100%' }}>
        <InputLabel htmlFor="grouped-native-select">Indicador</InputLabel>
        <Select native id="grouped-native-select" label="Grouping" value={indicatorID} onChange={handleChangeIndicator}>
          <option aria-label="None" value="" />

          {
            dimensions && dimensions.map(dimension => (
              <optgroup key={dimension.id} label={dimension.attributes.dimension}>
                {
                  dimension.attributes.indicators && dimension.attributes.indicators.data.map(indicator => (
                    <option key={indicator.id} value={indicator.id}>{indicator.attributes.indicator}</option>
                  ))
                }

                {/* <option value={2}>Option 2</option> */}
              </optgroup>
            ))
          }


        </Select>
      </FormControl>
    </MainCard>
  );
}

export default SelectIndicator;