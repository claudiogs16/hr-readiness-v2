import { Button } from "@mui/material";

const CustomButton = ({onClick, name}) => {
    return (
        <Button onClick={onClick} size="large" variant="contained" fullWidth>{name}</Button>
    );
}
 
export default CustomButton;