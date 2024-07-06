
import React from "react";
import { useNavigate } from "react-router-dom";
import '../Card.css';

const ProfileCard = ({ image, name, description, place }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/destination/${name}`, { state: { place } });
  };

  return (
    <div className="profile-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={handleViewDetails} className="profile-link">
        View Details
      </button>
    </div>
  );
};

const Card = ({ places }) => {
  return (
    <div className="card-container">
      {places.map((place, index) => (
        <ProfileCard
          key={index}
          image={place.image}
          name={place.name}
          description={place.description}
          place={place} // Pass the entire place object to ProfileCard
        />
      ))}
    </div>
  );
};

export default Card;
