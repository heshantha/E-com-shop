import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { ProductFilters } from "./ProductFilters";
import { axiosInstanceProduct } from "../Api/AxiosInstance";
import Pagination from "../../Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import AddIcon from "@mui/icons-material/Add";

const productImage = "/images/laptop.jpeg";
const ProductListPage: React.FC = () => {
  const [productList, setProductList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async (page: number) => {
      try {
        const response = await axiosInstanceProduct.get(
          `https://8c155025-93d6-4ead-a36d-9afdf9c1f291.mock.pstmn.io/recommend/itemss?page=${page}`
        );
        if (response.data) {
          setProductList(response.data.data.products);
          setTotalPages(Math.ceil(response.data.data.total / itemsPerPage));
        } else {
          console.error("Expected an array but received:", response.data);
        }
      } catch (error) {
        console.error("Error in GET request:", error);
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                backgroundColor: "#fff",
                boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px",
                borderRadius: "8px",
                padding: "18px 19px",
                margin: "28px 0 55px 0",
              }}
            >
              <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
                Product Listing
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <ProductFilters />
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {productList.map((product) => (
                <Grid item xs={12} lg={3} md={6} key={product.code}>
                  <Card
                    style={{
                      marginBottom: "10px",
                      boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px",
                      borderRadius: "8px",
                    }}
                    onClick={() => navigate(`/product/${product.code}`)}
                  >
                    <CardContent>
                      <img
                        src={productImage}
                        alt="product"
                        style={{ width: "100%" }}
                      />
                      <Grid container>
                        <Grid item xs={12} md={8}>
                          <Typography
                            style={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                            {product.name}
                          </Typography>
                          <Typography style={{ color: "#7d879c" }} variant="h4">
                            <span>{product.price_currency}</span>&nbsp;
                            <del>{product.price}</del>
                          </Typography>
                          <Typography style={{ color: "#e4002b" }} variant="h4">
                            <span>{product.price_currency}</span>&nbsp;
                            {product.discount_price}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={4}
                          sx={{
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              right: "0",
                              bottom: "0",
                            }}
                          >
                            <IconButton
                              sx={{
                                background: "transparent",
                                color: "rgb(228, 0, 43)",
                                border: "2px solid rgb(228, 0, 43)",
                                padding: "3px",
                                borderRadius: "10px",
                                width: "30px",
                                height: "30px",
                                float: "right",
                                "&:hover": {
                                  backgroundColor: "rgb(228, 0, 43)",
                                  color: "#fff",
                                },
                              }}
                              IconComponent={AddIcon}
                            />
                          </div>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductListPage;
