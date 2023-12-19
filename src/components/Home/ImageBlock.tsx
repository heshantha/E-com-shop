import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// TypeScript infers the type as string[]
const images = [
  "/images/image-three.jpeg",
  "/images/image-four.jpeg",
  "/images/image-five.jpeg",
];

const ImageBlock: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper elevation={3}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "auto" }}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageBlock;
