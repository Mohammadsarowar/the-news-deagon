import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle,FaGithub,FaFacebook,FaTwitterSquare,FaInstagramSquare } from 'react-icons/fa';
import QZone from "./Qzone";
import bg from "../../assets/bg.png"
const RightNav = () => {
  return (
    <>
    <div>
      <h2>Login With</h2>
      <Button variant="outline-primary mt-2"><FaGoogle></FaGoogle> Login with Google</Button>{" "}
      <Button variant="outline-secondary mt-2"><FaGithub/> Login with Github</Button>{" "}
    </div>
    <div className="mt-3">
        <h3>Find Us On</h3>
        <ListGroup>
      <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitterSquare/>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagramSquare/> Instagram</ListGroup.Item>
    </ListGroup>
    </div>
    <div>
        <QZone/>
    </div>
     <img className="w-100 mt-3" src={bg}/>
    </>
  );
};

export default RightNav;
