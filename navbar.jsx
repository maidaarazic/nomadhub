import React from 'react';

function Navbar() {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#024b9e',
    color: '#fff',
    padding: '20px',
    margin: 0,
  };
  const leftStyle = {
    flex: 1,
    paddingLeft: '20px',
  };

  const rightStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '20px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 15px',
    cursor: 'pointer', // Add cursor style to indicate clickable
  };

  const TextStyle = {
    marginLeft: '10px',
    fontSize: '24px',
  };

  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="Navbar" style={navbarStyle}>
      <div style={leftStyle}>
        <span style={TextStyle}>Sarajevo Nomad Hub</span>
      </div>

      <div style={rightStyle}>
        <span style={linkStyle} onClick={() => navigateTo('/')}>
          Home
        </span>
        <span style={linkStyle} onClick={() => navigateTo('/ListPlacesPage')}>
          Explore places
        </span>
        <span style={linkStyle} onClick={() => navigateTo('/AddPlacesForm')}>
          Add Place
        </span>
        <span style={linkStyle} onClick={() => navigateTo('/Signup')}>
          Signup
        </span>
      </div>
    </nav>
  );
}

export default Navbar;