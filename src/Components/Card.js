import React from 'react';
import { Card } from 'react-bootstrap';

function ProjectCard() {
  return (
    <div>
      <Card  style={{ width: '18rem' }} className='card w-100 border border-dark rounded'>
      <Card.Img variant="top" src="../../public/no-image.jpg" />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum id lectus nec gravida. Curabitur sollicitudin molestie hendrerit. Pellentesque dignissim ut eros quis finibus.</Card.Subtitle>
      </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
