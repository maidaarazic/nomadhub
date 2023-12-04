import React from 'react';
import MyComponent from './MyComponent';

const FindPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Find Places</h2>
      <p style={styles.description}>Discover places to work from...</p>
      <MyComponent />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Set height to 100% of the viewport height
    backgroundColor: '#001F3F',
  
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333', // Adjust the color to your preference
  },
  description: {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#555', // Adjust the color to your preference
  },
  link: {
    textDecoration: 'none',
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

export default FindPage;