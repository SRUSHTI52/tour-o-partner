import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Search.css';
import placesDesc from '../placesDesc';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const handleSearch = () => {
      const place = placesDesc.find(p => p.name.toLowerCase() === searchTerm.toLowerCase());
      if (place) {
        navigate(`/destination/${place.name}`, { state: place });
      }
    };

  return (
    <div className="parent-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* {placesDesc.map(place => (
        <div key={place.name} className="profile-card">
          <img src={place.image} alt={place.name} />
          <h3>{place.name}</h3>
          <p>{place.description}</p>
          <a href={`/destination/${place.name}`} state={place} className="profile-link">View Details</a>
        </div>
      ))} */}
    </div>
  )
}

export default Search;




