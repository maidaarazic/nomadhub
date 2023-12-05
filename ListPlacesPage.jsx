
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListPlacesPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await axios.get('http://localhost:8080/api/places');
      setPlaces(response.data);
    };

    fetchPlaces();
  }, []);

  return (
    <div>
      <h2>List of Places</h2>
      {places.map((place) => (
        <div key={place.id}>
          <p>Name: {place.name}</p>
          <p>Location: {place.location}</p>
        </div>
      ))}
    </div>
  );
};

export default ListPlacesPage;
