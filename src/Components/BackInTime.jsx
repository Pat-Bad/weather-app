//ci ho provato :D

import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Spinner } from "react-bootstrap";

const BackInTime = () => {
  const { city } = useParams();
  const [pastWeather, setPastWeather] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://history.openweathermap.org/data/2.5/history/city?${lat}&${lon}&appid=b4ca4daa573ac5284d06732627e596c4`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then((pastWeather) => {
        console.log(pastWeather);
        setPastWeather();
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Errore", error);
        setError(true);
        setIsLoading(false);
      });
  }, [city]);

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

  if (isLoading || !pastWeather) {
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
            <h1>{pastWeather.name}</h1>
          </Card.Title>
          <Card.Text>
            <h4>{apiCall.weather[0].main}</h4>
            <p>The temperature was {pastWeather.current.temp} °C</p>

            <p>
              and the weather was quite{" "}
              {pastWeather.current.weather[0].description}😊
            </p>
          </Card.Text>
          <Button
            variant="danger"
            onClick={onClose}
          >
            X
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
