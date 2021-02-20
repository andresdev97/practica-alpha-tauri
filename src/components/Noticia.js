import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "../scss/imghover.css";

import "../scss/components/Noticia.scss";

export default function Noticia(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <small className="text-muted">{props.date}</small>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Leer artículo</Button>
      </Card.Body>
    </Card>
  );
}

export function useNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const newsJSON = require("../assets/json/news.json");
    const loadData = () => JSON.parse(JSON.stringify(newsJSON));
    setNews(loadData);
  }, []);

  /*useEffect(() => {
        fetch(newsJSON)
        .then(response => response.json())
        .then(datos => {    
          setNews(datos)
        })
    }, [])*/

  return news;
}
