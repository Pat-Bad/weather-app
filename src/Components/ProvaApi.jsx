import { useState, useEffect } from "react";
import { Alert, Button, Card, Spinner } from "react-bootstrap";

const ProvaApi = ({ onClose, city }) => {
  const [apiCall, setApiCall] = useState(null); //RICEVO UN OGGETTO!
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b4ca4daa573ac5284d06732627e596c4`
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
        setIsLoading(false);
      })

      .catch((err) => {
        console.log("Errore", err);
        setError(true);
        setIsLoading(false);
      });
  }, [city]);

  const convertDegrees = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };
  if (error) {
    return (
      <Alert variant={"warning"}>Errore! Ritenta e sarai più fortunat*!</Alert>
    );
  }

  if (isLoading) {
    return (
      <Spinner
        animation="border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={apiCall.weather[0].icon}
        />
        <Card.Body>
          <Card.Title>
            <h1>{apiCall.name}</h1>
          </Card.Title>
          <Card.Text>
            <h4>{apiCall.weather[0].main}</h4>

            <p>
              {convertDegrees(apiCall.main.temp)}°C but it feels like{" "}
              {convertDegrees(apiCall.main.feels_like)}°C
            </p>
            <p>
              Min temp. {convertDegrees(apiCall.main.temp_min)}°C - Max temp.{" "}
              {convertDegrees(apiCall.main.temp_max)}°C
            </p>
            <p>Humidity levels are at {apiCall.main.humidity}%</p>
            <p>What about the wind?</p>
            <p>
              Well... brace yourself! Its speed is at {apiCall.wind.speed} {""}
              m/s
            </p>
          </Card.Text>
          <Button
            variant="danger"
            onClick={onClose}
          >
            X
          </Button>
          <Button variant="primary">Let's go back in time...</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProvaApi;
