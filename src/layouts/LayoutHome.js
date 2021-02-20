import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarouselAlt from '../components/CarouselAlt';
import HomeInfo from '../components/HomeInfo';

import "../scss/layouts/LayoutHome.scss";

export default function LayoutHome() {
  return (
    <Container fluid id="contenedor-padre" className="contenedor">
      <Row className="contenido">
        <Col>
          <CarouselAlt />
          <HomeInfo />
        </Col>
      </Row>
    </Container>
  );
}
