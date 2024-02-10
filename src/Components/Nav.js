import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Nav.css";
import $ from 'jquery'

function NavBar() {

	$(function() {
		var header = $(".navbar-header");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.addClass("onscroll");
			} else {
				header.removeClass("onscroll");
			}
		});
	});		

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-header" fixed='top'>
      <Container className='NavC'>
        <Navbar.Brand href="/"><i className="fa-solid fa-heart"></i> Big At Heart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-left navmain" style={{ flex: 1}}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="#link">Events</Nav.Link>
            <Nav.Link href="#link">Volunteer Centers</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;