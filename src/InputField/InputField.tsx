import React from "react";
import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  fullWidth = true,
}) => (
  <TextField
    label={label}
    type={type}
    value={value}
    onChange={onChange}
    fullWidth={fullWidth}
    variant="outlined"
  />
);
