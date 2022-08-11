import { Grid } from '@mui/material';
import IndicatorList from './indicator-list.component';
import IndicatorForm from './indicator-form.component'
import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_INDICATORS } from './query.gql';

const IndicatorPage = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [indicators, setIndicators] = useState([]);

  const [getIndicators] = useLazyQuery(GET_INDICATORS)

  useEffect(()=>{
    getIndicators({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: 'network-only' 
    }).then(data => {
      
      setIndicators(data.data.indicators.data)
    }).catch(error => {
      console.log(error)
    })
  },[])

    return (
        <Grid container  maxWidth="sm" style={{ margin: "0 auto" }}>
      <Grid item xs={12} >
        <IndicatorList indicators={indicators} setIndicators={setIndicators} />
      </Grid>
      
    </Grid>
    );
}
 
export default IndicatorPage;