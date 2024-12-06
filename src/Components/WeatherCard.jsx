import { Button } from "react-bootstrap";
import ProvaApi from "./ProvaApi";
import { useState } from "react";

const WeatherCard = ({ city }) => {
  const [showCard, setShowCard] = useState(false);

  const handleClick = () => {
    setShowCard(true);
  };

  const closeButton = () => {
    setShowCard(false);
  };

  return (
    <>
      {!showCard && <Button onClick={handleClick}>{city}</Button>}
      {showCard && (
        <ProvaApi
          city={city}
          onClose={closeButton}
        />
      )}
    </>
  );
};

export default WeatherCard;
