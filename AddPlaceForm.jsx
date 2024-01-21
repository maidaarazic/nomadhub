import React, { useState } from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#001F3F',
    color: '#FFF',
  },
  form: {
    width: '300px',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#001F3F',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '3px',
    marginTop: '5px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#a30029',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  checkboxContainer: {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: '5px',
  },
};

const WifiCheckbox = ({ checked, onChange }) => {
  return (
    <div style={styles.checkboxContainer}>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} style={styles.checkbox} />
        Wi-Fi
      </label>
    </div>
  );
};

const PowerOutletsCheckbox = ({ checked, onChange }) => {
  return (
    <div style={styles.checkboxContainer}>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} style={styles.checkbox} />
        Power Outlets
      </label>
    </div>
  );
};

const AddPlaceForm = ({ onSubmit, onSuccess }) => {
  const [placeInfo, setPlaceInfo] = useState({
    name: '',
    location: '',
    category: '',
    wifi: false,
    halal: false,
    powerOutlets: false,
  });

  const handleInputChange = (e) => {
    const { name, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : e.target.value;
    setPlaceInfo({ ...placeInfo, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(placeInfo);
    onSuccess();
  };

  return (
    <div style={styles.container}>
      <h2>Add a New Place</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={placeInfo.name}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Location:</label>
          <input
            type="text"
            name="location"
            value={placeInfo.location}
            onChange={handleInputChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Category:</label>
          <select
            name="category"
            value={placeInfo.category}
            onChange={handleInputChange}
            style={styles.input}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="coworking">Coworking Space</option>
            <option value="coffeeShop">Coffee Shop</option>
            <option value="restaurant">Restaurant</option>
          </select>
        </div>
        <WifiCheckbox checked={placeInfo.wifi} onChange={handleInputChange} />
        <PowerOutletsCheckbox checked={placeInfo.powerOutlets} onChange={handleInputChange} />
        <button type="submit" style={styles.button}>
          <b>Submit</b>
        </button>
      </form>
    </div>
  );
};

export default AddPlaceForm;
