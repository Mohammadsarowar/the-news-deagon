
import Header from '../Header';
import { Col, Container, Row } from 'react-bootstrap';

import { Outlet, useLoaderData } from 'react-router-dom';
import RightNav from '../Sheard/RightNav';
import Footer from '../Footer';
import News from '../pages/News';

const newsLayout = () => {
    return (
        <div>
             <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
          <Outlet/>
           <News/>
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
        </div>
    );
};

export default newsLayout;