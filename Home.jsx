import React from 'react';
import background from './images/background_home.png'


function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${background}?opacity=0.01)`,
    height: '100vh',
    marginTop: "-70px",
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    color: 'black',
  };

  const headerStyle = {
    fontSize: '36px',
    marginBottom: '100px',
    textAlign: 'center',
    whiteSpace: 'pre-wrap', 
  };

  const paragraphStyle = {
    fontSize: '25px',
    textAlign: 'center',
    margin: '0 35px',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <b><h1>Sarajevo Nomad Hub</h1><br />Your Portal to Sarajevo's Remote Work and Networking Community</b>
      </header>
      <main>
        <section className="intro">
          <p style={paragraphStyle}>
            Welcome to Sarajevo Nomad Hub, your gateway to the vibrant world of remote work, networking, and community in Sarajevo. Whether you're a digital nomad searching for the perfect workspace, a local eager to connect with like-minded professionals, or a workspace owner looking to showcase your venue, Sarajevo Nomad Hub has you covered.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Home;
