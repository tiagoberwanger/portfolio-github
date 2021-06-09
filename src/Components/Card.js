import React from 'react';
import { Card } from 'react-bootstrap';

function ProjectCard(props) {
  const { index, card } = props;
  return (
    <div>
      <Card >
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum id lectus nec gravida. Curabitur sollicitudin molestie hendrerit. Pellentesque dignissim ut eros quis finibus.</Card.Text>
      </Card.Body>
      <Card.Link href={card.html_url}>Link</Card.Link>
      </Card>
    </div>
  );
}

export default ProjectCard;
