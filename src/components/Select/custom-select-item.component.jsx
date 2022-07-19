import { MenuItem } from "@mui/material";

const CustomSelectItem = ({items}) => {
    return (
        <MenuItem value={items.id}>{items.attributes.description}</MenuItem>
    );
}
 
export default CustomSelectItem;