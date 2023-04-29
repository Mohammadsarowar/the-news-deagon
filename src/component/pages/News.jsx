import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";

const News = () => {
  let { _id } = useParams();

  const news = useLoaderData();

  const [useData, setUseData] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/news/${_id}`)
      .then((res) => res.json())
      .then((data) => setUseData(data));
  }, []);
  return (
    <div>
      <Card className="container">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{useData?.details}</Card.Text>
          <Button variant="primary" >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
