import React from 'react';
import background from './images/close-up-man-typing-laptop.png';

const AddPage = ({ onAddPlaceClick }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>You own a place and want to promote it? Or did you have an amazing experience working at a particular place and want more people to know about it? Add it now!</h2>
      <button style={styles.button} onClick={() => onAddPlaceClick('Login')}>
        <b>Add Place</b>
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
  },
  heading: {
    fontSize: '25px',
    margin: '30px 45px',
    color: '#FFF',
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
};

export default AddPage;
