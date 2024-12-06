import { useState, useEffect } from "react";

const ProvaApi = () => {
  const [apiCall, setApiCall] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=b4ca4daa573ac5284d06732627e596c4"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })

      .then((weatherData) => {
        console.log(weatherData);
        setApiCall(weatherData);
      })

      .catch((err) => {
        console.log("Errore", err);
      });
  }, []);

  return (
    <div>
      <p>{apiCall.name}</p>
      <p>{apiCall.weather[0].description}</p>
      <p>{apiCall.wind.speed}</p>
    </div>
  );
};

export default ProvaApi;
