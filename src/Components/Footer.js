import "./Footer.css";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Form, Button } from "react-bootstrap";


function Footer() {
    return (
        <div className="footer">
            <Container>
            <Row>
                <Col>
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <a href="/"><li>News</li></a>
                        <a href="/"><li>Events</li></a>
                        <a href="/"><li>Volunteering</li></a>
                        <a href="/"><li>About</li></a>
                    </ul>
                </Col>
                <Col>
                    <h3>Contact Us</h3>
                    <p>team@bigatheart.org</p>
                    <p>+65 8776 5740</p>
                </Col>
                <Col>
                    <h3>Join our mailing list</h3>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Footer;