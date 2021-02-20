import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "../components/Form";

import '../scss/layouts/LayoutContact.scss';

export default function LayoutContact() {
  return (
    <Container fluid className="contenedor">
      <Row className="contenido">
        <Col className="justify-center-md" xs={8} sm={8} md={8} lg={6} xl={4}>
          <Form />
        </Col>
      </Row>
    </Container>
  );
}
