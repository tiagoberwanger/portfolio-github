import React from 'react';
import { Card } from 'react-bootstrap';

function ProjectCard(props) {
  const { index, card } = props;

  const cardStyle = {
    backgroundColor: '#d2f8d2',
    margin: '50px',
    textAlign: 'center',

  }

  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
  }

  const cardLinkStyle = {
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid #04AA6D',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
  }

  return (
    <div>
      <Card style={cardStyle}>
      <Card.Body>
        <Card.Title style={cardTitleStyle} key={`title-${index}`}>{card.name}</Card.Title>
        <Card.Text key={`text-${index}`}>{card.description}</Card.Text>
      </Card.Body>
      <Card.Link style={cardLinkStyle} key={`link-${index}`} href={card.html_url}>Repositório</Card.Link>
      </Card>
    </div>
  );
}

export default ProjectCard;
