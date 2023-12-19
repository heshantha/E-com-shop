import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { axiosInstanceProduct } from "../Api/AxiosInstance";

interface ProductDetails {
  name: any;
  discount_price: any;
  price_currency: any;
  price: any;
}
const productImage = "/images/laptop.jpeg";
const ProductDetailsPage: React.FC = () => {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(
    null
  );
  const { id } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axiosInstanceProduct.get(
          `https://8c155025-93d6-4ead-a36d-9afdf9c1f291.mock.pstmn.io/recommend/item/${id}`
        );
        setProductDetails(response.data.data.product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Card
            sx={{
              margin: "18px 19px",
            }}
          >
            <CardContent>
              {productDetails ? (
                <>
                  <Grid container>
                    <Grid item xs={12} md={5}>
                      <img
                        src={productImage}
                        alt="product"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h3">
                        {productDetails.name}
                      </Typography>
                      <Box display="flex" justifyContent="flex-start">
                        <Typography
                          style={{
                            fontSize: "18px",
                            color: "rgb(0, 0, 0",
                            fontWeight: "bold",
                            paddingRight: "5px",
                          }}
                        >
                          {productDetails.price_currency}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "18px",
                            color: "rgb(0, 0, 0",
                            fontWeight: "bold",
                            paddingRight: "15px",
                          }}
                        >
                          {productDetails.discount_price}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "14px",
                            color: "rgb(125, 135, 156",
                            fontWeight: "bold",
                            paddingRight: "5px",
                            paddingTop: "5px",
                          }}
                        >
                          {productDetails.price_currency}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: "14px",
                            color: "rgb(125, 135, 156",
                            fontWeight: "bold",
                            paddingRight: "5px",
                            paddingTop: "5px",
                          }}
                        >
                          {productDetails.price}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <Typography>Loading...</Typography>
              )}
            </CardContent>
          </Card>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailsPage;
