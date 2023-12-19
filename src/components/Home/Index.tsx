import { Box } from "@mui/material";
import ImageSlider from "./ImageSlider";
import ImageBlock from "./ImageBlock";
import Container from "@mui/material/Container";

function HomePage() {
  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "#ffffff",
        }}
      >
        <Container>
          <ImageSlider />
        </Container>
      </Container>
      <Container>
        <ImageBlock />
      </Container>
    </Box>
  );
}

export default HomePage;
