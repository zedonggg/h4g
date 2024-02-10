import NavBar from "./Components/Nav";
import Footer from "./Components/Footer";
import { Container, Col, Row, Form, Card } from "react-bootstrap";
import "./NewsPage.css"

function NewsPage() {
    let newsdata = [
        { title: "first event of the day", content: "lsdjflksjfjkdlsfjklsdfkljsdlfjkldsfjklasdsadasdadsdadasdsadasdasdasdasdasdasdasddasasddadsdasadasdasdadasddsfjkldjkflkjlsdfjkl"},
        { title: "first event of the day", content: "lsdjflksjfjkdlsfjklsdfkljsdlfjkldsfjkldsfjkldjkflkjlsdfjkl"},
        { title: "first event of the day", content: "lsdjflksjfjkdlsfjklsdfkljsdlfjkldsfjkldsfjkldjkflkjlsdfjkl"},
        { title: "first event of the day", content: "lsdjflksjfjkdlsfjklsdfkljsdlfjkldsfjkldsfjkldjkflkjlsdfjkl"},
        { title: "first event of the day", content: "lsdjflksjfjkdlsfjklsdfkljsdlfjkldsfjkldsfjkldjkflkjlsdfjkl"},
        { title: "first event of the day", content: "lsdjflksjfjkdlsfjklsdfkljsdlfjkldsfjkldsfjkldjkflkjlsdfjkl"}
    ];

    return (
        <>
            <NavBar />
            <div className="newspage">
            <Container className="newpage">
                <Row>
                    <h2 style={{color : "black"}}>News</h2>
                </Row>
                <Row>
                    <Col className="col-3">
                        <h3>Search News</h3>
                    </Col>
                    <Col className="col-9">
                        { newsdata.map(x => {return (
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-truncate">{ x.title }</Card.Title>
                                    <Card.Text className="text-truncate">{ x.content }</Card.Text>
                                </Card.Body>
                            </Card>
                        )})}
                    </Col>
                </Row>
            </Container>
            </div>
            <Footer />
        </>
    )
}

export default NewsPage;