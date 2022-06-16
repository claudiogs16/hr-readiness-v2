import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import DesignCard from "../../components/DesignCard/DesignCard";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import Dashboard from "../../templates/Dashboard/Dashboard";
import MaterialTable from "material-table";
import { useState } from "react";

const RolePage = () => {
    const [tabledata, setTableData] = useState([
        {name: 'Claudio Gomes', email: 'claudiogs16@gmail.com', role: 'Super Admin'},
        {name: 'Carla Andrade', email: 'carla@gmail.com', role: 'Admin'},
        {name: 'Carla Andrade', email: 'carla@gmail.com', role: 'Guest'}
      ]);
    
      const columns = [
        { title: "Nome", field: "name" },
        { title: "Email", field: "email" },
        { title: "Permissão", field: "role" }
    ];
      return (
        <Dashboard>
          <Container maxWidth="md">
            <Grid container>
              <Grid item xs={12}>
                <DesignCard action={<ReturnButton url="/definition" />}>
                  <MaterialTable
                    title="Cargo"
                    columns={columns}
                    data={tabledata}
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                  />
                </DesignCard>
              </Grid>
            </Grid>
          </Container>
        </Dashboard>
      );
}
 
export default RolePage;