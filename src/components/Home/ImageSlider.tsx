import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paper } from "@mui/material";

declare module "react-slick";

const images: string[] = ["/images/image-one.jpeg", "/images/image-two.jpeg"];

const settings: any = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const ImageSlider: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "610px" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ height: "100%" }}>
            <Paper style={{ textAlign: "center", height: "100%" }}>
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Paper>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
