import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // or any other icon you prefer

interface PriceMinMaxProps {
  label: string;
  value: number[];
  onChange: (newValue: number[]) => void;
}

export const PriceMinMax: React.FC<PriceMinMaxProps> = ({
  label,
  value,
  onChange,
}) => {
  const [minValue, setMinValue] = useState<string>(value[0].toString());
  const [maxValue, setMaxValue] = useState<string>(value[1].toString());

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinValue(event.target.value);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxValue(event.target.value);
  };

  const handleSubmit = () => {
    onChange([parseFloat(minValue), parseFloat(maxValue)]);
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <TextField
          label="Min"
          type="number"
          value={minValue}
          onChange={handleMinChange}
          margin="normal"
          variant="outlined"
        />
        <Typography mr={1} ml={1}>
          -
        </Typography>
        <TextField
          label="Max"
          type="number"
          value={maxValue}
          onChange={handleMaxChange}
          margin="normal"
          variant="outlined"
        />
        <IconButton
          sx={{
            background: "rgb(218, 225, 231)",
            color: "rgb(125, 135, 156)",
            marginLeft: "10px",
            marginTop: "10px",
            "&:hover": {
              backgroundColor: "rgb(228, 0, 43)",
              color: "rgb(228, 0, 43",
            },
          }}
          onClick={handleSubmit}
          color="primary"
          aria-label="submit"
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </>
  );
};
