import Header from "./Header";
import Footer from "./Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "./Sheard/RightNav";
import LeftNav from "./Sheard/LeftNav";
import { Outlet } from "react-router-dom";



const Main = () => {
  return (
    <div>
      <Header></Header>
      
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
          <Outlet/>
            
            <h2>Main Component coming</h2>
          </Col>
          <Col lg={3}>
            <div className="">
              <RightNav></RightNav>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
