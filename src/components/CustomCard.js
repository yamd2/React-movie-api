import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movie, func }) => {
  console.log(movie);
  return (
    <Card style={{ width: "18rem", color: "black" }}>
      <Card.Img variant="top" src={movie?.Poster} />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Text>{movie?.Plot}</Card.Text>
        <Card.Text>Rating: {movie?.imdbRating}</Card.Text>
        <Card.Text>Year:{movie?.Year}</Card.Text>

        <div className="d-flex justify-content-between">
          <Button
            onClick={() => func({ ...movie, type: "happy" })}
            variant="danger"
          >
            happy
          </Button>
          <Button
            onClick={() => func({ ...movie, type: "lazy" })}
            variant="info"
          >
            lazy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
