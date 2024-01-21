import React from 'react';

const FindPage = () => {
  const handleExploreClick = () => {
    window.location.href = "/ListPlacesPage";
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Discover places to work from</h2>
      <p style={styles.paragraph}>
        Find the perfect work environment for your tasks. Explore a curated list of remote workspaces,
        ranging from cozy cafes to collaborative coworking spaces. Wherever you are, we help you find
        inspiring places to enhance your productivity.
      </p>
      <button onClick={handleExploreClick} style={styles.button}>
        <b>Explore</b>
        </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#001F3F',
  },
  heading: {
    fontSize: '40px',
    marginBottom: '70px',
    color: '#fff',
  },

  paragraph: {
    fontSize: '20px',
    margin: '40px 30px',
    color: '#fff',
    textAlign: 'center',
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

export default FindPage;
