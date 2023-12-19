import React from "react";
import { IconButton as MuiIconButton } from "@mui/material";
import { SxProps, Theme } from "@mui/system";

interface IconButtonProps {
  IconComponent: React.ElementType;
  sx?: SxProps<Theme>; 
}

const IconButton: React.FC<IconButtonProps> = ({ IconComponent, sx }) => {
  return (
    <MuiIconButton sx={sx}>
      <IconComponent />
    </MuiIconButton>
  );
};

export default IconButton;
