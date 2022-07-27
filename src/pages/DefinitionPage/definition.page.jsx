import { Grid } from "@mui/material";
import CardMenu from "../../components/MainCard/card-menu.component";
import MainCard from "../../components/MainCard/main-card.component";
import MainContainer from "../../components/MainContainer/main-container.component";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PushPinIcon from '@mui/icons-material/PushPin';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupIcon from "@mui/icons-material/Group";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ConstructionIcon from "@mui/icons-material/Construction";
import PasswordIcon from "@mui/icons-material/Password";
import GroupWorkIcon from "@mui/icons-material/GroupWork";

const DefinitionPage = () => {
  return (
    <MainContainer title="Definições" maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <MainCard title="Avaliação">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <CardMenu
                  bgcolor="#FAE8E8"
                  btnName="Avaliações"
                  icon={<StarHalfIcon fontSize="large" />}
                  url="/definition/rating"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}></Grid>
              <Grid item xs={12} sm={6} md={4}></Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardMenu
                  bgcolor="#EDF4E9"
                  btnName="Dimensões"
                  icon={<AccountTreeIcon fontSize="large" />}
                  url="/definition/dimension"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardMenu
                  bgcolor="#EDF4E9"
                  btnName="Indicadores"
                  icon={<PushPinIcon fontSize="large" />}
                  url="/definition/indicator"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardMenu
                  bgcolor="#EDF4E9"
                  btnName="Questões"
                  icon={<QuestionAnswerIcon fontSize="large" />}
                  url="/definition/question"
                />
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <MainCard title="Sistema">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <CardMenu
                  bgcolor="#F0FBFE"
                  btnName="Funcionários"
                  icon={<GroupIcon fontSize="large" />}
                  url="/definition/employeer"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardMenu
                  bgcolor="#F0FBFE"
                  btnName="Cargos"
                  icon={<GroupWorkIcon fontSize="large" />}
                  url="/definition/post-role"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardMenu
                  bgcolor="#F0FBFE"
                  btnName="Permissão"
                  icon={<VisibilityIcon fontSize="large" />}
                  url="/definition/role"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardMenu
                  bgcolor="#F0FBFE"
                  btnName="Sistema"
                  icon={<ConstructionIcon fontSize="large" />}
                  url="/definition/system"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardMenu
                  bgcolor="#F0FBFE"
                  btnName="Repor Senhas"
                  icon={<PasswordIcon fontSize="large" />}
                  url='/definition/password-reset'
                />
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default DefinitionPage;
