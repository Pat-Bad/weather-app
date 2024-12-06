import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import CustomHeader from "./Components/CustomHeader";
import WeatherCard from "./Components/WeatherCard";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <div className="App h-100 nunito-carattere">
      <header>
        <CustomHeader />
      </header>
      <main className="h-100vh">
        <Container className="fluid d-flex flex-wrap h-100">
          <Row className="d-flex flex-wrap">
            <Col
              xs={12}
              className="d-flex flex-wrap"
            >
              <WeatherCard city="Milan" />

              <WeatherCard city="Rome" />
              <WeatherCard city="Tokyo" />
              <WeatherCard city="Seoul" />
              <WeatherCard city="Berlin" />
              <WeatherCard city="Kiev" />
              <WeatherCard city="Bali" />
              <WeatherCard city="Dakar" />
              <WeatherCard city="London" />
              <WeatherCard city="Bari" />
              <WeatherCard city="Montreal" />
              <WeatherCard city="Amsterdam" />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;

//perché non vedo l'icona?..............
