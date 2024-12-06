import { useState, useEffect } from "react";
import { Alert, Button, Card, Spinner, Col } from "react-bootstrap";

const ProvaApi = ({ onClose, city }) => {
  const [apiCall, setApiCall] = useState(null); //RICEVO UN OGGETTO!
  const [apiCall2, setApiCall2] = useState(null);
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

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b4ca4daa573ac5284d06732627e596c4`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((hourlyData) => {
        console.log(hourlyData);
        setApiCall2(hourlyData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Errore!", err);
        setError(true);
        setIsLoading(false);
      });
  }, [city]);

  const convertDegrees = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  if (error) {
    return (
      <Alert
        variant={"warning"}
        className="mx-3 my-3"
      >
        Errore! Ritenta e sarai più fortunat*!
      </Alert>
    );
  }

  if (isLoading || !apiCall2) {
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
    <Col
      xs={12}
      md={6}
    >
      <Card className="bg-primary mx-5 my-5 border-0 rounded">
        <Card.Img
          variant="top"
          src="https://wmo.int/sites/default/files/2023-12/thumbnails_5.jpg"
          alt="weather icon"
        />
        <Card.Body className="Card-background">
          <Card.Title>
            <h1>{apiCall.name}</h1>
          </Card.Title>
          <Card.Text>
            <h4>{apiCall.weather[0].main}</h4>

            <p>
              It's {convertDegrees(apiCall.main.temp)}°C but it feels like{" "}
              {convertDegrees(apiCall.main.feels_like)}°C 😊
            </p>
            <p className="border border-2 rounded-pill mx-0">
              Min temp. {convertDegrees(apiCall.main.temp_min)}°C - Max temp.{" "}
              {convertDegrees(apiCall.main.temp_max)}°C
            </p>
            <p>Humidity levels are at {apiCall.main.humidity}%</p>
            <p>🎐 What about the wind? 🎐</p>
            <p>
              Well... brace yourself! Its speed is at {apiCall.wind.speed} {""}
              m/s
            </p>
            <h5>
              In the next few hours...
              {apiCall2 &&
                apiCall2.list.slice(0, 1).map((hour, i) => {
                  return <p key={i}> {hour.weather[0].description}!</p>;
                })}
            </h5>
          </Card.Text>
          <Button
            variant="danger"
            onClick={onClose}
            className="m-1 px-2"
          >
            X
          </Button>
          <Button
            variant="primary"
            className="ms-2"
          >
            Let's go back in time
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProvaApi;
