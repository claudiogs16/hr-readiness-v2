import { Grid, Paper } from "@mui/material";
import { Container } from "@mui/system";
import DesignCard from "../../components/DesignCard/DesignCard";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import Dashboard from "../../templates/Dashboard/Dashboard";
import MaterialTable from "material-table";
import { useState } from "react";

const PostPage = () => {
  const [tabledata, setTableData] = useState([
    { cod: 'RH', post: "Recursos Humanos" },
    { cod: 'Dev', post: "Programador" },
    { cod: 'CEO', post: "Chefe Executivo" },
  ]);

  const columns = [{ title: "Sigla", field: "cod" },{ title: "Cargo", field: "post" }];
  return (
    <Dashboard>
      <Container maxWidth="sm">
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
};

export default PostPage;
