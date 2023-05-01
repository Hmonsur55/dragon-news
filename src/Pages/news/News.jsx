import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import InsightEditor from './InsightEditor';

const News = () => {
    const newsDetails = useLoaderData();

    const {
      _id,
      title,
      details,
      image_url,
      author,
      total_view,
      rating,
      category_id,
    } = newsDetails;
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to={`/category/${category_id}`}>
              <Button variant="primary">All Category News</Button>
            </Link>
          </Card.Body>
            </Card>
            <InsightEditor></InsightEditor>
      </div>
    );
};

export default News;