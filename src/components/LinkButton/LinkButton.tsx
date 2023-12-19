import React from "react";
import { Link } from "@mui/material";

interface LinkButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  sx?: object;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  onClick,
  sx,
}) => (
  <Link
    href="#"
    onClick={(event) => {
      event.preventDefault();
      if (onClick) {
        onClick();
      }
    }}
    sx={{
      cursor: "pointer",
      textDecoration: "underline",
      color: "secondary.main",
      "&:hover": {
        textDecoration: "underline",
        color: "secondary.main",
      },
      ...sx,
    }}
  >
    {children}
  </Link>
);
