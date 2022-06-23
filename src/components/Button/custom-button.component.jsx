import { Button } from "@mui/material";

const CustomButton = props => {
    return (
        <Button size="large" variant="contained" fullWidth>{props.name}</Button>
    );
}
 
export default CustomButton;