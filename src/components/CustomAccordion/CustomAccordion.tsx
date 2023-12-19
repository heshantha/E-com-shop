// CustomAccordion.tsx
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CustomAccordionProps {
  title: string;
  content: string;
  disabled?: boolean;
}

export const CustomAccordion: React.FC<CustomAccordionProps> = ({
  title,
  content,
  disabled = false,
}) => {
  return (
    <Accordion
      disabled={disabled}
      sx={{
        background: "transparent",
        boxShadow: "none",

        "&:before": {
          display: "none",
        },
        "& .MuiAccordionSummary-root": {
          borderBottom: "none",
          minHeight: "30px !important",
          padding: "0px",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
        sx={{
          margin: "5px 0 0 0",
        }}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          padding: "0px 16px 0px 16px",
        }}
      >
        <Typography>{content}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
