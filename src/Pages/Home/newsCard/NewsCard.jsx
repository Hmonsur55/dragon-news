import moment from 'moment';
import React from 'react';
import { Card, Image, Placeholder } from 'react-bootstrap';
import { FaBookmark, FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;

    return (
      <Card className=" mb-4">
        <Card.Header className=" d-flex align-items-center">
          <Image
            style={{ height: "50px", width: "50px" }}
            src={image_url}
            roundedCircle
          />
          <div className="ps-3 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p>
              <small>
                {moment(author?.published_date).format("YYYY.MM.D")}
              </small>
            </p>
          </div>
          <div>
            <FaRegBookmark className="me-2"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />

          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link to={`/news/${_id}`}>Read more</Link>
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex  align-items-center">
          <div className="d-flex flex-grow-1 gap-2  align-items-center">
            <div>
              <Rating
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              />
            </div>
            <p>{rating.number}</p>
          </div>
          <div>
            <FaEye></FaEye>
            <span className="ms-2">{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;