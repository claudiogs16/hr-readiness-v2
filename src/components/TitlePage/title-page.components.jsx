import { Typography } from "@mui/material";

const TitlePage = (props) => {
  return (
    <Typography
      sx={{
        marginTop: "20px",
        marginBottom: '20px',
        textAlign: { xs: "center", md: "left" },
        opacity: 0.6,
      }}
    >
      {props.title}
    </Typography>
  );
};

export default TitlePage;
