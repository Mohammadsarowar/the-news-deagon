import { Button, Card } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";

const News = () => {
    let {_id} = useParams()
 const news = useLoaderData()
//   const {title} = news
  console.log(news);
  return (
    <div>
      <Card className="container">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
