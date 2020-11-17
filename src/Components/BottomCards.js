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
                                <Card.Title>Card 1 Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Card Subtitle
                                </Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>;
                    </Col>
                    <Col>
                        <Card style={{ width: "20rem" }}>
                            <Card.Body>
                                <Card.Title>Card 2 Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Card Subtitle
                                </Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>;
                    </Col>
                    <Col>
                        <Card style={{ width: "20rem" }}>
                            <Card.Body>
                                <Card.Title>Card 3 Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Card Subtitle
                                </Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>;
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BottomCards;