import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
    return (
      <div>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <CircularProgress />
        </Box>
      </div>
    );
  };

  export default Loading;