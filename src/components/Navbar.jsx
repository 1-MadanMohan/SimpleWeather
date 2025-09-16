import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FilterDramaTwoToneIcon from '@mui/icons-material/FilterDramaTwoTone';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const Navbar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleSearchClick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
    }
  };

  return (<nav
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    padding: "10px 20px",
  }}
>
  {/* Logo */}
  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
    <FilterDramaTwoToneIcon fontSize="large" />
    <p style={{ fontWeight: "bold", fontSize: "20px", margin: 0 }}>Weather</p>
  </div>

  {/* Search Bar */}
  <div
    style={{
      display: "flex",
      flex: 1,
      minWidth: "200px",
      gap: "8px",
      alignItems: "center",
    }}
  >
    <TextField
      variant="outlined"
      placeholder="Search City"
      size="small"
      value={searchCity}
      onChange={(e) => setSearchCity(e.target.value)}
      style={{ flex: 1, borderRadius: "2rem", backgroundColor: "white" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
    <Button
      variant="contained"
      onClick={handleSearchClick}
      style={{ borderRadius: "6px", backgroundColor: "#4B5550" }}
    >
      Search
    </Button>
  </div>

  {/* Current Location */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "4px",
      fontSize: "14px",
      fontWeight: "700",
      color: "white",
      backgroundColor: "#4B5550",
      padding: "6px 10px",
      borderRadius: "6px",
    }}
  >
    <GpsFixedIcon fontSize="small" /> Current Location
  </div>
</nav>

  );
};

export default Navbar;