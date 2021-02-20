import React from "react";
import { Container, Row } from "react-bootstrap";
import Noticia, { useNews } from "./Noticia";

import f1 from "../assets/img/f1.png";
import "../scss/components/HomeInfo.scss";

export default function HomeInfo() {
  const newsData = useNews();

  return (
    <div id="contenedor-news" className="contenedor">
      <h2 className="titulo">
        <span>Últimas novedades</span>
        <img src={f1} className="logo" alt="f1" />
      </h2>
      <Container fluid>
        <Row xs={1} sm={1} md={1} lg={3} xl={4} className="news-row justify-content-md-center">
          {newsData.map((item) => (
            <Noticia key={item.id} title={item.title} img={item.img} text={item.text} date={item.date}/>
          ))}
        </Row>
      </Container>
    </div>
  );
}
