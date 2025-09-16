// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Hot weather icon
// import AcUnitIcon from '@mui/icons-material/AcUnit'; // Cold weather icon
// import CloudIcon from '@mui/icons-material/Cloud'; // Moderate weather icon

// const MainWeather = ({ weatherData }) => {

//   const temperatureCelsius = weatherData?.main?.temp || "N/A";
//   const weatherDescription = weatherData?.weather?.[0]?.description || "N/A";
//   const cityName = weatherData?.name || "City not available";
//   const countryName = weatherData?.sys?.country || "Country not available";
//   const timestamp = weatherData?.dt || null;

//   const currentDate = timestamp
//     ? new Date(timestamp * 1000).toLocaleDateString('en-US', {
//         weekday: 'long',
//         day: 'numeric',
//         month: 'short',
//       })
//     : "Date not available";

//     const renderTemperatureIcon = () => {
//       if (temperatureCelsius > 23) {
//         return <WbSunnyIcon style={{ marginLeft: '10px', fontSize: '3rem', color: 'orange' }} />;
//       } else if (temperatureCelsius < 10) {
//         return <AcUnitIcon style={{ marginLeft: '10px', fontSize: '3rem', color: 'blue' }} />;
//       } else {
//         return <CloudIcon style={{ marginLeft: '10px', fontSize: '3rem', color: 'gray' }} />;
//       }
//     };

//     return (
//       <div style={{ backgroundColor: '#4B5563', color: 'white', borderRadius: '0.5rem',width:'160px',padding:'30px' }}>
//         <div style={{fontSize:'20px'}}>Now</div>
//       <div style={{display: 'flex', alignItems: 'center', fontSize: '35px', fontWeight: 'bold'  }}>
//         {temperatureCelsius}°c
//         {renderTemperatureIcon()}
        
//         </div>
//       <div style={{ fontSize: '15px', marginTop: '8px',fontWeight:'50' }}>  {weatherDescription}</div>
//       <div style={{ marginTop: '1rem' }}>
//       <div style={{display:'flex',alignItems:'center'}}>
//        <CalendarMonthIcon/> 
//         {currentDate}</div>
//       <div style={{marginTop:'4px',display:'flex',alignItems:'center'}}>
//       <LocationOnIcon/>
//         {cityName}, {countryName}</div>
//       </div>
//       </div>
//     );
//   };
  
//   export default MainWeather;
  import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Hot
import AcUnitIcon from "@mui/icons-material/AcUnit";   // Cold
import CloudIcon from "@mui/icons-material/Cloud";     // Moderate
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat"; // Feels like
import AirIcon from "@mui/icons-material/Air"; // Wind
import WaterDropIcon from "@mui/icons-material/WaterDrop"; // Humidity
import CompressIcon from "@mui/icons-material/Compress"; // Pressure

const MainWeather = ({ weatherData }) => {
  const temperatureCelsius = weatherData?.main?.temp || "N/A";
  const feelsLike = weatherData?.main?.feels_like || "N/A";
  const humidity = weatherData?.main?.humidity || "N/A";
  const pressure = weatherData?.main?.pressure || "N/A";
  const windSpeed = weatherData?.wind?.speed || "N/A";
  const weatherDescription =
    weatherData?.weather?.[0]?.description || "N/A";
  const cityName = weatherData?.name || "City not available";
  const countryName = weatherData?.sys?.country || "Country not available";
  const timestamp = weatherData?.dt || null;

  const currentDate = timestamp
    ? new Date(timestamp * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      })
    : "Date not available";

  const renderTemperatureIcon = () => {
    if (temperatureCelsius > 23) {
      return (
        <WbSunnyIcon
          style={{ marginLeft: "10px", fontSize: "3rem", color: "orange" }}
        />
      );
    } else if (temperatureCelsius < 10) {
      return (
        <AcUnitIcon
          style={{ marginLeft: "10px", fontSize: "3rem", color: "blue" }}
        />
      );
    } else {
      return (
        <CloudIcon
          style={{ marginLeft: "10px", fontSize: "3rem", color: "gray" }}
        />
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#4B5563",
        color: "white",
        borderRadius: "12px",
        padding: "30px",
        maxWidth: "400px",
        margin: "0 auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }}
    >
      {/* Temperature */}
      <div style={{ fontSize: "20px", marginBottom: "10px" }}>Now</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "45px",
          fontWeight: "bold",
        }}
      >
        {Math.round(temperatureCelsius)}°C {renderTemperatureIcon()}
      </div>
      <div style={{ fontSize: "16px", marginTop: "8px" }}>
        {weatherDescription}
      </div>

      {/* Date & Location */}
      <div style={{ marginTop: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CalendarMonthIcon /> {currentDate}
        </div>
        <div
          style={{
            marginTop: "6px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <LocationOnIcon />
          {cityName}, {countryName}
        </div>
      </div>

      {/* Extra indicators */}
      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <DeviceThermostatIcon /> Feels like: {Math.round(feelsLike)}°C
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <WaterDropIcon /> Humidity: {humidity}%
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <CompressIcon /> Pressure: {pressure} hPa
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <AirIcon /> Wind: {windSpeed} m/s
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
