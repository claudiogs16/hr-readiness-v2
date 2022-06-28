import { Typography } from "@mui/material";

const TitlePage = ({ title }) => {
  return (
    <Typography
      sx={{
        marginTop: "20px",
        marginBottom: "20px",
        textAlign: { xs: "center", md: "left" },
        opacity: 0.6,
      }}
    >
      {title}
    </Typography>
  );
};

export default TitlePage;
