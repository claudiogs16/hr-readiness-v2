import { styled } from "@mui/material";
import {Link} from 'react-router-dom'

const CustomLink = styled(Link)(()=>({
textDecoration: 'none',
color: 'black'
}))

export default CustomLink;