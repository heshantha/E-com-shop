import React from 'react';
import { Button } from '@mui/material';


interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  fullWidth?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick, fullWidth = true }) => (
  <Button variant="contained" color="primary" onClick={onClick} fullWidth={fullWidth}>
    {children}
  </Button>
);
