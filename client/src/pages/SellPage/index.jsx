import Carousel from 'react-bootstrap/Carousel';
import liv_room_1 from "../../assets/liv_room_1.jpg";
import lux_kit_1 from "../../assets/lux_kit_1.png";
import lux_kit_2 from "../../assets/lux_kit_2.png";

import "./styles.css";



const SellPage = (props) => {


  return (
    <Carousel fade>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src={liv_room_1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Available</h3>
        <p>Beautiful Luxury Homes</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src={lux_kit_1}
        alt="Second slide"
      />
      <Carousel.Caption>
      <h3>Available</h3>
        <p>Beautiful Luxury Homes</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={lux_kit_2}
        alt="Third slide"
      />
      <Carousel.Caption>
      <h3>Available</h3>
        <p>Beautiful Luxury Homes</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default SellPage;
