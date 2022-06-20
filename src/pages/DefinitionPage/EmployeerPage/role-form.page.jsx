import MaterialTable from "material-table";
import { useState } from "react";
import { Paper } from "@mui/material";

const RoleForm = () => {
  const [tabledata, setTableData] = useState([
    {
      name: "Claudio Gomes",
      email: "claudiogs16@gmail.com",
      role: "Super Admin",
    },
    { name: "Carla Andrade", email: "carla@gmail.com", role: "Admin" },
    { name: "Carla Andrade", email: "carla@gmail.com", role: "Guest" },
  ]);

  const columns = [
    { title: "Nome", field: "name" },
    { title: "Email", field: "email" },
    { title: "Permissão", field: "role" },
  ];
  return (
    <MaterialTable
      title="Permissão"
      columns={columns}
      data={tabledata}
      components={{
        Container: (props) => <Paper {...props} elevation={0} />,
      }}
    />
  );
};

export default RoleForm;
