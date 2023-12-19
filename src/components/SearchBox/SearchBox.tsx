import React, { useState, ChangeEvent } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const SearchContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "330px",
  border: "1px solid rgb(218, 225, 231)",
  "&:hover": {
    borderColor: theme.palette.primary.main,
  },
  "@media (min-width:1024px)": {
    width: "500px",
  },
  width: "100%",
}));

const SearchInput = styled(InputBase)({
  padding: "8px 12px",
  height: "40px",
  color: "rgb(174, 180, 190)",
  width: "90%",
  paddingLeft: "15px",
});
const CustomIconButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: "transparent",
  },
});
const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {};

  return (
    <SearchContainer variant="outlined">
      <CustomIconButton
        type="submit"
        aria-label="search"
        onClick={handleSearch}
      >
        <SearchIcon />
      </CustomIconButton>

      <SearchInput
        placeholder="Type and hit enter or select..."
        value={searchTerm}
        onChange={handleSearchChange}
        inputProps={{ "aria-label": "search google maps" }}
      />
    </SearchContainer>
  );
};

export default SearchBox;
