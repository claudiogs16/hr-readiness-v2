import { Card, CardContent, Typography } from "@mui/material";

const ContentCard = props => {
    return (
        <Card elevation={0} style={{backgroundColor: '#fafafa', borderRadius: '10px'}} >
            <CardContent>
                <Typography fontWeight='bold' textAlign='center'>{props.value}</Typography>
                <Typography textAlign='center' variant="body2">{props.content}</Typography>
            </CardContent>
        </Card>
    );
}
 
export default ContentCard;