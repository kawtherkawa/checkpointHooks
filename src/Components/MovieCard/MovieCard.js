import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movie }) => {
  
  const firstExample = {
    size: 30,
    value:movie.rate,
    edit: false
  };
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
         
          <Card.Text>
            {movie.title}
          </Card.Text>
          <Card.Text>
            {movie.description}
          </Card.Text>
          <Card.Text>
            {movie.Type}
          </Card.Text>

          <ReactStars {...firstExample} />
        </Card.Body>
      </Card>



    </div>
  )
}

export default MovieCard