import { Button, Card, CardContent } from "@mui/material"

const MenuItem = props => {
    return(
        <Card elevation={0} style={{borderRadius: '15px', backgroundColor: '#fafafa'}}>
            <CardContent style={{textAlign: 'center'}}>
                {props.icon}
                <Button onClick={props.handleClickOpen} variant="text" size="small" fullWidth>{props.title}</Button>
            </CardContent>
        </Card>
    )
}

export default MenuItem;