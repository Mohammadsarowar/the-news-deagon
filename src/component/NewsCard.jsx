import moment from "moment";
import {
  FaBookmark,
  FaEye,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import {  Card, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  
  const {
    _id,
    title,
    details,
    image_url,
    rating,
    thumbnail_url,
    author,
    total_view,
  } = news;

  return (
    <div>
      <Card className=" mb-3">
        <Card.Header className="d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <Image
              style={{ height: "50px" }}
              className=""
              src={author?.img}
              roundedCircle
            />
            <div className="ms-3">
              <h4 className="mb-0">{author?.name}</h4>
              <p>
                <small>
                  {moment(author?.published_date).format("D-MM-YYYY")}
                </small>
              </p>
            </div>
          </div>
          <div className="d-flex">
            <FaBookmark />
            <FaShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <img className="container" src={image_url} />
          <Card.Text>
            {details?.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0.25)}....
                <Link to={`/news/${_id}`}>See More</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
          <div>
            <Rating
              placeholderRating={3.5}

              emptySymbol={
               <FaRegStar/>
              }
              placeholderSymbol={
                <FaStar/>
              }
              fullSymbol={
               <FaStar/>
              }
            />
            <span>{rating?.number}</span>
          </div>
          <div>
            <FaEye />
            <samp className="ms-1">{total_view}</samp>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
