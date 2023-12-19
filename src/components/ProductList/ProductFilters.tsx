import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { CheckboxList } from "../CheckBox/CheckboxList";
import { PriceMinMax } from "../PriceMinMax/PriceMinMax";
import { CustomAccordion } from "../CustomAccordion/CustomAccordion";

export const ProductFilters: React.FC = () => {
  const [priceRange, setPriceRange] = useState<number[]>([10, 100]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const handlePriceRangeChange = (newRange: number[]) => {
    setPriceRange(newRange);
  };

  const brands = ["Orange Electric"];

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        boxShadow: "rgba(3, 0, 71, 0.09) 0px 1px 3px",
        borderRadius: "8px",
        padding: "18px 19px",
      }}
    >
      <Box>
        <Typography variant="h4">Categories</Typography>
        <CustomAccordion title="Orange Electric (4)" content="Appliances (4)" />
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(243, 245, 249)",
          height: "1px",
          marginTop: "18px",
          marginBottom: "24px",
        }}
      ></Box>
      <Box mt={1}>
        <Typography variant="h4">Price Range</Typography>
        <PriceMinMax
          label="Price"
          value={priceRange}
          onChange={handlePriceRangeChange}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(243, 245, 249)",
          height: "1px",
          marginTop: "18px",
          marginBottom: "24px",
        }}
      ></Box>
      <Box mt={1}>
        <Typography variant="h4">Brands</Typography>
        <CheckboxList
          options={brands}
          checked={selectedBrands}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedBrands([...selectedBrands, e.target.name]);
            } else {
              setSelectedBrands(
                selectedBrands.filter((brand) => brand !== e.target.name)
              );
            }
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(243, 245, 249)",
          height: "1px",
          marginTop: "18px",
          marginBottom: "24px",
        }}
      ></Box>
      <Box>
        <Typography variant="h4">Clasification</Typography>
      </Box>
    </Box>
  );
};
