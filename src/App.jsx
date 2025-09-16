// import Navbar from "./components/Navbar";
// import { useState, useEffect } from "react";
// import MainWeather from "./components/MainWeather";

// import Navbar from "./components/Navbar";

// export default function App() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [city, setCity] = useState("Tirupati");
//   const [error, setError] = useState(null); // 🆕 error state

//   const fetchWeatherData = (city) => {
//     const API_KEY = "56cee14a3bc7ca9fe6291a6160f31f63";
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);

//         if (data.cod !== 200) {
//           // 🆕 if API sends error (e.g., 404 city not found)
//           setError(data.message);
//           setWeatherData(null);
//         } else {
//           setWeatherData(data);
//           setError(null);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching weather:", error);
//         setError("Something went wrong! Please try again.");
//         setWeatherData(null);
//       });
//   };

//   useEffect(() => {
//     fetchWeatherData(city);
//   }, [city]);

//   const handleSearch = (searchCity) => {
//     setCity(searchCity);
//   };

//   const getWearSuggestion = (temp, description) => {
//     if (description.includes("rain")) {
//       return "☔ Carry an umbrella!";
//     } else if (temp > 30) {
//       return "👕 Wear light clothes & stay hydrated!";
//     } else if (temp < 15) {
//       return "🧥 Wear a warm jacket!";
//     } else {
//       return "😎 Perfect weather, enjoy your day!";
//     }
//   };

//   return (
//     <>
//       <Navbar onSearch={handleSearch} />

//       {/* 🆕 Error message */}
//      {error && (
//   <div
//     style={{
//       backgroundColor: "#2b2b2b",
//       color: "red",
//       padding: "20px",
//       margin: "15px 0",
//       borderRadius: "12px",
//       boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
//       fontFamily: "monospace",
//       textAlign: "center",
//       fontSize: "18px",
//       lineHeight: "1.5",
//     }}
//   >
//     <h3 style={{ marginBottom: "10px", fontSize: "22px" }}>🚨 ERROR 🚨</h3>
//     <p>
//       City peru tappu kottav ra, <strong>ERRIPOOKA</strong> 🤦‍♂️
//     </p>
//     <p>
//       Google lo choosi type chey ra <strong>PICCHI POOKA</strong> 🔍
//     </p>
//     <p>
//       Get lost, <strong>USELESS PIECE OF SH*T</strong> 😡
//     </p>
//   </div>
// )}

//       {weatherData && !error && (
//         <div>
//           <h2>{weatherData.name}</h2>

//           <MainWeather weatherData={weatherData} />
//           <p>Temperature: {weatherData.main.temp} °C</p>
//           <p>Weather: {weatherData.weather[0].description}</p>
//           <p>
//             SunRise:{" "}
//             {new Date(1000 * weatherData.sys.sunrise).toLocaleTimeString(
//               "en-US"
//             )}
//           </p>
//           <p>
//             SunSet:{" "}
//             {new Date(1000 * weatherData.sys.sunset).toLocaleTimeString(
//               "en-US"
//             )}
//           </p>

//           <div
//             style={{
//               marginTop: "15px",
//               padding: "10px",
//               border: "1px solid gray",
//               borderRadius: "8px",
//               backgroundColor: "#f3f3f3",
//             }}
//           >
//             <h3>What to Wear Today?</h3>
//             <p>
//               {getWearSuggestion(
//                 weatherData.main.temp,
//                 weatherData.weather[0].description
//               )}
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import MainWeather from "./components/MainWeather";
import TodayHighlights from "./components/todayhighlights";


export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Tirupati");
  const [error, setError] = useState(null);

const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchWeatherData = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          setError(data.message);
          setWeatherData(null);
        } else {
          setWeatherData(data);
          setError(null);
        }
      })
      .catch(() => {
        setError("Something went wrong! Please try again.");
        setWeatherData(null);
      });
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  const getWearSuggestion = (temp, description) => {
    if (description.includes("rain")) {
      return "☔ Carry an umbrella!";
    } else if (temp > 30) {
      return "👕 Wear light clothes & stay hydrated!";
    } else if (temp < 15) {
      return "🧥 Wear a warm jacket!";
    } else {
      return "😎 Perfect weather, enjoy your day!";
    }
  };

  // ✅ Move this OUTSIDE return
  const getCityBackground = (city) => {
    return `https://source.unsplash.com/1600x900/?${city}`;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${getCityBackground(city)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
      }}
    >
      <Navbar onSearch={handleSearch} />

      {error && (
        <div
          style={{
            backgroundColor: "#2b2b2b",
            color: "red",
            padding: "15px",
            margin: "15px 0",
            borderRadius: "12px",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          ❌ {error.toUpperCase()} – check the city name, buddy!
        </div>
      )}

      {weatherData && !error && (
        <div>
          <MainWeather weatherData={weatherData} />
          <TodayHighlights weatherData={weatherData} />

          <div
            style={{
              marginTop: "20px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>👔 What to Wear Today?</h3>
            <p>
              {getWearSuggestion(
                weatherData.main.temp,
                weatherData.weather[0].description
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
