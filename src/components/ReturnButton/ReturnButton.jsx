import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";


const ReturnButton = props => {
    return (
        <Link to={props.url} style={{textDecoration: 'none'}}>
            <Button size="small" color="primary" variant="text">
                <KeyboardReturnIcon />
            </Button>
        </Link>
    );
}
 
export default ReturnButton;