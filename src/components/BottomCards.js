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
                                <Card.Title style={{textAlign:"center"}}>Recommended Equipment</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptate voluptas 
                                voluptatibus voluptatem obcaecati error molestiae iure tempore? Dolorem excepturi 
                                delectus quaerat maiores numquam quasi voluptates labore. Adipisci, reprehenderit ut.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "20rem" }}>
                            <Card.Body>
                                <Card.Title style={{textAlign:"center"}}>Equipment For Sale</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe nisi nostrum 
                                tenetur nihil repudiandae ad quisquam ducimus temporibus iusto. Sed beatae neque minima 
                                sequi tempora dignissimos assumenda id magnam?
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "20rem" }}>
                            <Card.Body>
                                <Card.Title style={{textAlign:"center"}}>Contact Us</Card.Title>
                                <Card.Text style={{textAlign:"left"}}>
                                    Mobile: (801) 651-1928<br></br>
                                    Email: eddieaho@gmail.com<br></br>
                                </Card.Text>
                                <Card.Link href="https://www.facebook.com/eddieaho">Facebook</Card.Link>
                                <Card.Link href="https://www.youtube.com/channel/UCD5GUs2SVXDaqDo6WMtdsqw">YouTube</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BottomCards;