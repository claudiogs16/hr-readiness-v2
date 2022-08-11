import { useLazyQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import DimensionForm from "./dimension-form";
import DimensionList from "./dimension-list";
import { GET_DIMENSIONS } from "./query.gql";

const DimensionPage = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [dimensions, setDimensions] = useState([])

  const [getDimensions] = useLazyQuery(GET_DIMENSIONS)

  useEffect(()=>{
    getDimensions({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then(data => {
      // console.log(data.data.dimensions.data)
      setDimensions(data.data.dimensions.data)
      // console.log(dimensions)
    })
  },[])

    return (
        <Grid container  maxWidth="sm" style={{ margin: "0 auto" }}>
      <Grid item xs={12} >
        <DimensionList dimensions={dimensions} setDimensions={setDimensions} />
      </Grid>
      
    </Grid>
    );
}
 
export default DimensionPage;