import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Header = () => {
  const { user,LogOut} = useContext(AuthContext);
  return (
    <div className="container">
      <div className="text-center mt-4">
        <img src={logo} />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
          <small>{}</small>
        </p>
        <p>{moment().format("dddd, MMMM D YYYY")}</p>
      </div>
      <div className="d-flex ">
        <Button variant="danger">Latest</Button>
        <Marquee
          speed={40}
          pauseOnHover={true}
          className="bg-danger-subtle text-danger"
        >
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <Nav.Link>
                <Link to="/category/0">Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link href="#deets">
                  <FaUserCircle className="text-xl" />
                </Nav.Link>
              )}
              {user ? (
                <Button variant="dark" onClick={LogOut}>LogOut</Button>
              ) : (
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
