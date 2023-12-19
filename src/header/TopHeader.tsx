import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";

function TopHeader() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      style={{ background: "rgb(228, 0, 43)", color: "white", height: "40px" }}
    >
      <Container>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h5">Welcome to OrelBy</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5" mr={2}>
              Track My orders
            </Typography>
            <Typography variant="h5" mr={2}>
              Log in
            </Typography>

            <Typography variant="h5">Sign up</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TopHeader;
