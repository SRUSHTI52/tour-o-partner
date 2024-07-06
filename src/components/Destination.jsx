import React from "react";
import{useContext, useEffect} from 'react';
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext.jsx";
import "../Destination.css";

const Destination = () => {
  const { name } = useParams();
  const location = useLocation();
  const place = location.state?.place || location.state;

  const { user, setUser,fetchUserProfile } = useContext(UserContext);

  // const userId = user._id;
  const userId = user ? user._id : null; // Ensure user is not null before accessing id

  // useEffect(() => {
  //   console.log('User:', user); // Check if user is available
  //   console.log('UserID:', userId); // Check if userId is available
  // }, [user, userId]);
  // console.log('User ID:', userId);

  const addToWishlist = async (destinationName) => {
    try {
      const response = await axios.post('http://localhost:8000/wishlist', { userId, destinationName });
      await fetchUserProfile();
      setUser(response.data);
      toast.success('added to wishlist')
      console.log('Destination added to wishlist:', response.data);
    }
    catch (error) {
      toast.error('cannot add to wishlist')
      console.error('Error adding destination to wishlist:', error);
    }
  };

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
          <br/>
          <button className="wishlist" onClick={() => addToWishlist(place.name)}>Add to Wishlist</button>
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
