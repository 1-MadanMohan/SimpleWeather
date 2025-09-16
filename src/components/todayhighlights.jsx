import React from "react";
import WaterDropIcon from "@mui/icons-material/WaterDrop"; // Humidity
import ThunderstormIcon from "@mui/icons-material/Thunderstorm"; // Precipitation
import AirIcon from "@mui/icons-material/Air"; // Wind
import CompressIcon from "@mui/icons-material/Compress"; // Pressure

const TodayHighlights = ({ weatherData }) => {
  if (!weatherData) return null;

  const humidity = weatherData.main?.humidity || "N/A";
  const pressure = weatherData.main?.pressure || "N/A";
  const windSpeed = weatherData.wind?.speed || "N/A";
  const precipitation = weatherData.rain?.["1h"] || 0; // mm in last 1 hour

  const highlightCardStyle = {
    backgroundColor: "#374151",
    color: "white",
    borderRadius: "0.75rem",
    padding: "20px",
    flex: "1 1 200px",
    minWidth: "180px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    marginBottom: "10px",
  };

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {/* Humidity */}
      <div style={highlightCardStyle}>
        <WaterDropIcon style={{ ...iconStyle, color: "#3B82F6" }} />
        <h3>Humidity</h3>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{humidity}%</p>
      </div>

      {/* Precipitation */}
      <div style={highlightCardStyle}>
        <ThunderstormIcon style={{ ...iconStyle, color: "#FACC15" }} />
        <h3>Precipitation</h3>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {precipitation} mm
        </p>
      </div>

      {/* Wind Speed */}
      <div style={highlightCardStyle}>
        <AirIcon style={{ ...iconStyle, color: "#22D3EE" }} />
        <h3>Wind Speed</h3>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{windSpeed} m/s</p>
      </div>

      {/* Pressure */}
      <div style={highlightCardStyle}>
        <CompressIcon style={{ ...iconStyle, color: "#F87171" }} />
        <h3>Pressure</h3>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{pressure} hPa</p>
      </div>
    </div>
  );
};

export default TodayHighlights;
