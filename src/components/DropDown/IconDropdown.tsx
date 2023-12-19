import React, { useState, ReactNode } from "react";
import { Menu, IconButton } from "@mui/material";

type IconDropdownProps = {
  icon: ReactNode; // Custom icon passed as a prop
  children: ReactNode; // Children (menu items) passed from the parent
};

const IconDropdown: React.FC<IconDropdownProps> = ({ icon, children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ backgroundColor: "#F3F5F9" }}
      >
        {icon}
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </div>
  );
};

export default IconDropdown;
