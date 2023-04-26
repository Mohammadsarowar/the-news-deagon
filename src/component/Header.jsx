import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <div className="container">
      <div className="text-center mt-4">
        <img src={logo} />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D YYYY")}</p>
      </div>
      <div className="d-flex ">
        <Button variant="danger">Latest</Button>{" "}
        <Marquee speed={40} pauseOnHover={true} className="bg-danger-subtle text-danger">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto ">
            <Nav.Link to="/category/0">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="pricing">Pricing</Nav.Link>
             
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Button variant="dark">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
