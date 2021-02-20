import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import "../scss/components/TeamMember.scss";

export default function TeamMember(props) {
  return (
    <Card>
      <Card.Img className="img" src={props.img} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{props.lastname}</Card.Title>
        <Card.Subtitle>{props.name}</Card.Subtitle>
        <Card.Text>{props.age} años</Card.Text>
        <Card.Text className="rol">{props.role}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export function useTeam() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const teamJSON = require("../assets/json/team.json");
    const loadData = () => JSON.parse(JSON.stringify(teamJSON));
    setTeam(loadData);
  }, []);

  return team;
}
