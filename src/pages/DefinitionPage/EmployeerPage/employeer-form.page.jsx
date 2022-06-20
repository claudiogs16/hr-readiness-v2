import MaterialTable from "material-table";
import { useState } from "react";
import { Container } from "@mui/material";
import { Paper } from '@material-ui/core';

const EmployeerForm = () => {
  const [tableData, setTableData] = useState([
    {
      name: "Claudio Gomes",
      email: "claudiogs16@gmail.com",
      contact: "9505710",
      post: "Programador",
      status: 1,
      date_start: "01/05/2022",
    },
    {
      name: "Manuel Jorge",
      email: "mjg171@gmail.com",
      contact: "9945687",
      post: "Designer",
      status: 0,
      date_start: "01/03/2022",
    },
  ]);
  const columns = [
    {
      title: "Nome Completo",
      field: "name",
      validate: (rowData) => {
        if (rowData.name === undefined || rowData.name === "") {
          return "Obrigatório";
        } else if (rowData.name.length < 3) {
          return "Nome deve conter pelo menos 3 caracteres";
        }

        return true;
      },
    },
    {
      title: "Email",
      field: "email",
      validate: (rowData) => {
        if (rowData.email === undefined || rowData.email === "") {
          return "Obrigatório";
        } else if (!rowData.email.includes("@" && ".")) {
          return "Entrar com um email válido";
        }

        return true;
      },
    },
    {
      title: "Contacto",
      field: "contact",
      validate: (rowData) => {
        if (rowData.contact === undefined || rowData.contact === "") {
          return "Obrigatório";
        } else if (rowData.contact.length < 7 || rowData.contact.length > 10) {
          return "Entrar com um contacto válido";
        }

        return true;
      },
    },
    { title: "Cargo", field: "post" },
    { title: "Data de Inicio", field: "date_start" },
    {
      title: "Estado",
      field: "status",
      lookup: { 0: "Inactivo", 1: "Activo" },
      validate: (rowData) => {
        if (rowData.status === undefined || rowData.status === "") {
          return "Obrigatório";
        }

        return true;
      },
    },
  ];

  return (
    
      <MaterialTable
        editable={{
          onRowAdd: (newRow) =>
            Promise((resolve, reject) => {
              console.log("Add");
            }),
          onRowUpdate: (selectedRow) => new Promise((resolve, reject) => {}),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {}),
        }}
        columns={columns}
        data={tableData}
        title="Dados de Funcionários"
        options={{
          searchAutoFocus: true,
          addRowPosition: "first",
          actionsColumnIndex: -1,
        }}
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
        }}
      />
    
  );
};

export default EmployeerForm;
