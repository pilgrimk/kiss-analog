import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function BottomCards() {
    return (
        <div className="bottom-cards">
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: "20rem" }}>
                            <Card.Body>
                                <Card.Title>Recommended Equipment</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Card Subtitle
                                </Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "20rem" }}>
                            <Card.Body>
                                <Card.Title>Equipment For Sale</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Card Subtitle
                                </Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "20rem" }}>
                            <Card.Body>
                                <Card.Title style={{textAlign:"center"}}>Contact Addresses</Card.Title>
                                <Card.Text style={{textAlign:"left"}}>
                                    Mobile: (801) 651-1928<br></br>
                                    Email: eddieaho@gmail.com<br></br>
                                    <br></br>
                                    Social Media:
                                </Card.Text>
                                <Card.Link href="https://www.facebook.com/eddieaho">Facebook</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BottomCards;