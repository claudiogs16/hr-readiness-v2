import { Card } from "@material-ui/core";
import { CardActions } from "@mui/material";

const MenuCard = props => {
    return (
        <Card elevation={0}>
            <CardActions>
                {props.children}
            </CardActions>
        </Card>
    );
}
 
export default MenuCard;