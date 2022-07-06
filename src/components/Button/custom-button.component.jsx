import { Button } from "@mui/material";

const CustomButton = ({onClick, name, type}) => {
    return (
        <Button onClick={onClick} size="large" type={type} variant="contained" fullWidth>{name}</Button>
    );
}
 
export default CustomButton;