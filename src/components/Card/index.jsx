import { Card, Paper } from "@material-ui/core";
import { CardContent, Container, Typography } from "@mui/material";

const MainCard = (props) => {
  return (
    <Container style={{marginBottom: '30px'}}>
      <Card elevation={2} style={{borderRadius: '10px'}}>
        <Paper>
          <CardContent variant="body2">
            <Typography variant="h5">{props.title}</Typography>
            <Typography variant="h5" fontSize='12px' marginBottom='20px'>{props.subtitle}</Typography>
            {props.children}
          </CardContent>
        </Paper>
      </Card>
    </Container>
  );
};

export default MainCard;
