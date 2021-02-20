import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Row, Col } from "react-bootstrap";

import "../scss/components/CarouselAlt.scss";

import alpha1 from "../assets/img/alpha-carousel1.jpg";
import alpha2 from "../assets/img/alpha-carousel2.jpg";
import alpha3 from "../assets/img/alpha-carousel3.jpg";

export default function CarouselAlt() {
  const { Item, Caption } = Carousel;
  return (
    <Carousel>
      <Item>
        <img src={alpha1} alt="First slide" />
        <Caption>
          <Row>
            <Col xs={12} md={12} lg={10}>
              <h3>First slide labeljojasojfoasjof ojasdojasod</h3>
            </Col>
          </Row>
        </Caption>
      </Item>
      <Item>
        <img src={alpha2} alt="Third slide" />
        <Caption>
          <Row>
            <Col xs={12} md={12} lg={10}>
              <h3>Second slide label</h3>
            </Col>
          </Row>
        </Caption>
      </Item>
      <Item>
        <img src={alpha3} alt="Third slide" />
        <Caption>
          <Row>
            <Col xs={12} md={12} lg={10}>
              <h3>Third slide label</h3>
            </Col>
          </Row>
        </Caption>
      </Item>
    </Carousel>
  );
}
