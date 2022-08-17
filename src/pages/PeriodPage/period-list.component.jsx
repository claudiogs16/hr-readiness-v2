import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, ListItemText, Tooltip } from "@mui/material";
import MainCard from "../../components/MainCard/main-card.component";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import PeriodForm from "./period-form.component";

const ActionForm = ({ setOpen }) => {
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <Tooltip title="Adicionar Novo" placement="right">
            <IconButton
                color="info"
                aria-label="Add"
                component="span"
                onClick={handleClickOpen}
            >
                <AddCircleIcon fontSize="medium" />
            </IconButton>
        </Tooltip>
    );
};


const PeriodList = () => {
    const [open, setOpen] = useState(false)

    const handleClose = () => {

        setOpen(false)
    }


    return (
        <MainCard title="Lista de Periodos" headerAction={<ActionForm setOpen={setOpen} />}>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>


                <ListItem

                    secondaryAction={
                        <IconButton aria-label="edit" >
                            <EditIcon />
                        </IconButton>
                    }
                >
                    <ListItemText primary="Projecto INPS" secondary="Data" />
                </ListItem>




            </List>

            <Dialog maxWidth='lg' fullScreen={false} open={open} onClose={handleClose}>
                <DialogTitle>Criar Periodo de Avaliacao</DialogTitle>
                <DialogContent>

                    <PeriodForm />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Fechar</Button>

                </DialogActions>
            </Dialog>

        </MainCard>
    );
}

export default PeriodList;