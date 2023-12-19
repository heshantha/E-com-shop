import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CheckboxListProps {
  options: string[];
  checked: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxList: React.FC<CheckboxListProps> = ({
  options,
  checked,
  onChange,
}) => (
  <div>
    {options.map((option) => (
      <FormControlLabel
        key={option}
        control={
          <Checkbox
            checked={checked.includes(option)}
            onChange={onChange}
            name={option}
          />
        }
        label={option}
      />
    ))}
  </div>
);
