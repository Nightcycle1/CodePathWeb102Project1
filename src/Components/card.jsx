// Card.jsx
import React from "react";

const Card = ({ title, description, link, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" /> {}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
};

export default Card;