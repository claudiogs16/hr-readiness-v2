import { useLazyQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import EmployeerForm from "./employeer-form.component";
import EmployeerList from "./employeer-list.component";
import { GET_EMPLOYEERS } from "./query.gql";

const EmployeerPage = () => {
  const jwt = localStorage.getItem("jwtToken");
  const [employeers, setEmployeers] = useState([])



  const [getEmployeers] = useLazyQuery(GET_EMPLOYEERS)

  useEffect(()=>{
    setEmployeers([]);
    getEmployeers({
      context: {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      },
      fetchPolicy: "network-only",
    }).then(data => {
      
      let employeersData = data.data.usersPermissionsUsers.data;
      setEmployeers(employeersData)
      
    })
  },[])


  return (
    <Grid container maxWidth="sm" style={{ margin: "0 auto" }}>
      <Grid item xs={12} >
        <EmployeerList setEmployeers={setEmployeers} employeers={employeers} />
      </Grid>
      {/* <Grid item xs={12} md={5}>
        <EmployeerForm />
      </Grid> */}
    </Grid>
  );
};

export default EmployeerPage;
