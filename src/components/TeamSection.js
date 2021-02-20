import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamMember, { useTeam } from '../components/TeamMember';

import '../scss/components/TeamSection.scss';

export default function TeamSection() {

    const teamData = useTeam();

    return(
        <Container fluid className="contenedor">
            <Row className="row-title">
                <Col className="col-title"><h1 className="title">Team</h1></Col>
            </Row>
            <Row xs={1} sm={1} md={3} lg={3} xl={3} className="justify-content-md-center contenedor-team">
                {teamData.map((item) => (
                <TeamMember 
                key={item.id} 
                name={item.name} 
                img={item.img}
                number={item.number} 
                lastname={item.lastname} 
                age={item.age}
                nac={item.nac}
                role={item.role}/>
                ))}
            </Row>
        </Container>
    );
}