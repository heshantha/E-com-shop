import React from "react";
import { Box, Typography, Container, Grid, useTheme } from "@mui/material";
import { LinkButton } from "../components/LinkButton/LinkButton";
import SearchBox from "../components/SearchBox/SearchBox";
import IconDropdown from "../components/DropDown/IconDropdown";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
const imageUrl = "/images/orelbuy-logo.png";
const powerdbyUrl = "/images/poweredby-orel-img.jpeg";

function MenuHeader() {
  const theme = useTheme();
  const navigate = useNavigate();
  const styles = {
    linkButtonContainer: {
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        paddingBottom: "20px",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      [theme.breakpoints.up("md")]: {
        justifyContent: "flex-start",
      },
      display: "flex",
      width: "100%",
    },
    searchBoxContainer: {
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        marginBottom: "10px",
      },
      [theme.breakpoints.up("md")]: {
        justifyContent: "flex-center",
      },
      display: "flex",
      width: "100%",
    },
    iconDropdownContainer: {
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        marginBottom: "10px",
      },
      [theme.breakpoints.up("md")]: {
        justifyContent: "flex-end",
      },
      display: "flex",
      width: "100%",
    },
    powerdbyContainer: {
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
        paddingBottom: "20px",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      },
      [theme.breakpoints.up("md")]: {
        justifyContent: "flex-end",
      },
      display: "flex",
      width: "100%",
    },
  };
  return (
    <>
      <Box style={{ backgroundColor: "#ffffff", height: "100%" }} pt={3}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Box sx={styles.linkButtonContainer}>
                <LinkButton sx={{ textDecoration: "none" }}>
                  <img
                    src={imageUrl}
                    alt="Logo"
                    style={{ width: "160px", height: "40px" }}
                  />
                </LinkButton>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={styles.searchBoxContainer}>
                <SearchBox />
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box sx={styles.iconDropdownContainer}>
                <Box mr={2}>
                  <IconDropdown icon={<PersonIcon />}>
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                    <MenuItem>Option 3</MenuItem>
                  </IconDropdown>
                </Box>
                <Box>
                  <IconDropdown icon={<ShoppingBagIcon />}>
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                    <MenuItem>Option 3</MenuItem>
                  </IconDropdown>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container pt={3}>
            <Grid item xs={12} md={3}></Grid>
            <Grid item xs={12} md={6}>
              <Box sx={styles.linkButtonContainer}>
                <LinkButton   onClick={() => navigate(`/products/`)}
                  sx={{
                    textDecoration: "none",
                    paddingRight: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Typography variant="h4">Products</Typography>
                </LinkButton>
                <LinkButton
                  sx={{
                    textDecoration: "none",
                    paddingRight: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Typography variant="h4">Flash Deals</Typography>
                </LinkButton>
                <LinkButton
                  sx={{
                    textDecoration: "none",
                    paddingRight: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Typography variant="h4">Special Offers</Typography>
                </LinkButton>
                <LinkButton
                  sx={{
                    textDecoration: "none",
                    paddingRight: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Typography variant="h4">Merchants</Typography>
                </LinkButton>
                <LinkButton
                  sx={{
                    textDecoration: "none",
                    paddingRight: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <Typography variant="h4">Sell On OREL Buy</Typography>
                </LinkButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={styles.powerdbyContainer}>
                <Typography
                  variant="h4"
                  style={{ paddingRight: "15px", paddingTop: "15px" }}
                >
                  Powered By
                </Typography>
                <img
                  src={powerdbyUrl}
                  alt="Powered By"
                  style={{ width: "134px", height: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default MenuHeader;
