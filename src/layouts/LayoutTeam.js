import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamSection from '../components/TeamSection';

export default function LayoutTeam() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <TeamSection />
                </Col>
            </Row>
        </Container>
    );
}