import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProvaApi from "./Components/ProvaApi";
import { Container, Row, Col } from "react-bootstrap";
import CustomHeader from "./Components/CustomHeader";
import WeatherCard from "./Components/WeatherCard";

function App() {
  return (
    <div className="App h-100vh bg-dark">
      <header>
        <CustomHeader />
      </header>
      <main>
        <Container>
          <Row>
            <Col
              xs={12}
              md={6}
            >
              <WeatherCard city="Milan" />
              <WeatherCard city="Rome" />
              <WeatherCard city="Tokyo" />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
