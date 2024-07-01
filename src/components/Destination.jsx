import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "../Destination.css";

const Destination = () => {
  const { name } = useParams();
  const location = useLocation();
  const place = location.state?.place || location.state;
  

  if (!place) {
    return (
      <div className="destination-details-container">
        <h1>Destination not found</h1>
        <p>
          The destination details are not available. Please go back and try
          again.
        </p>
      </div>
    );
  }

  const renderList = (items) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div className="destination-details-container">
  
      <div className="first">
        <span>
          <h1>{place.heading}</h1>
          <br/>
          <p>{place.description}</p>
        </span>
        <img src={place.image} alt={place.name} className="cityimg" />
      </div>

      <h2>Best Time to Visit</h2>
      <p>{place.bestTimeToVisit}</p>

      <h2>Important Destinations</h2>
      <div className="list">
        {Array.isArray(place.importantDestinations) ? (
          renderList(place.importantDestinations)
        ) : (
          <p>{place.importantDestinations}</p>
        )}
      </div>

      <h2>Overview</h2>
      <p>{place.overallInfo}</p>

      <h2>Temperature</h2>
      <p>Average High: {place.temperature.averageHigh}</p> 
      <p>Average Low: {place.temperature.averageLow}</p>
    </div>
  );
};

export default Destination;
