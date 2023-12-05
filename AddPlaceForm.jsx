import React, { useState } from 'react';
import axios from 'axios';

const AddPlaceForm = () => {
  const [placeInfo, setPlaceInfo] = useState({
    name: '',
    location: '',
  
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlaceInfo({ ...placeInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    await axios.post('http://localhost:8080/api/places', placeInfo);

    
  };

  return (
    <div>
      <h2>Add a New Place</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={placeInfo.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="location" value={placeInfo.location} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPlaceForm;
