// AddPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AddPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add a Place</h2>
      <p style={styles.text}>Didn't find your place? Add it now.</p>
      <Link to="/add-place">
        <button style={styles.button}>Add Place</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#001F3F', // Adjust the color to your preference
  },
  heading: {
    fontSize: '24px',
    margin: '10px 0',
  },
  text: {
    fontSize: '16px',
    color: '#555', // Adjust the color to your preference
  },
  button: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#a30029', // Adjust the color to your preference
    color: '#FFF', // Adjust the color to your preference
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AddPage;
