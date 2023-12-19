import React from "react";
import { Button } from "@mui/material";

const Pagination: React.FC<any> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <Button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>
      <span style={{ margin: "0 10px" }}>
        {currentPage} of {totalPages}
      </span>
      <Button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
