import { Button, Card, CardContent, Typography } from "@mui/material";

const ItemCard = props => {
    return (
        <Card elevation={0} style={{background: '#fafafa',  borderRadius: '15px', textAlign: 'center'}}>
            <CardContent>
                <Typography variant="h6" style={{fontWeight: 'bold', opacity: 0.6}}>{props.value}</Typography>
                <Button variant="text" size="small">{props.title}</Button>
            </CardContent>
        </Card>
    );
}
 
export default ItemCard;