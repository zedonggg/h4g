import NavBar from "./Components/Nav";
import HomeCaro from "./Components/HomeCaro";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./HomePage.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Components/Footer";

function HomePage() {
    AOS.init();

    return (
        <>
        <NavBar />
        <HomeCaro />
        <div className="hero-1">
            <Container >
                <Row className="hero" >
                    <Col>
                        <h1>Come find your volunasia with us.</h1>
                        <p>Moment when you forget you're volunteering to help change lives, because it's changing yours</p>
                        <Button href="#">About Us</Button>
                    </Col>
                    <Col className="float-end">
                        <img src="https://codingyaar.com/wp-content/uploads/banner.jpg"></img>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="hero-1 hero-2">
            <Container >
                <Row className="hero" >
                    <Col>
                        <img src="https://codingyaar.com/wp-content/uploads/banner.jpg"></img>
                    </Col>
                    <Col className="float-end">
                        <h1 className="text-end">Come find your volunasia with us.</h1>
                        <p className="text-end">Moment when you forget you're volunteering to help change lives, because it's changing yours</p>
                        <Button href="#" className="float-end">About Us</Button>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="testimonials">
            <Container>
                <Row>
                    <h1 className="text-center volunteer" data-aos="slide-up">Hear from our Volunteers</h1>
                </Row>
                <Row>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx} className="cards"  data-aos="slide-up">
          <Card className="card-grid">
            <Card.Img variant="top" src="https://static.wixstatic.com/media/014c07_2f0429b5b2b14f5881d9df10d876f48e~mv2.png/v1/fill/w_622,h_468,fp_0.50_0.50,q_95,enc_auto/014c07_2f0429b5b2b14f5881d9df10d876f48e~mv2.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
            </Container>
        </div>
        <Footer />
        </>
    )
}

export default HomePage;