import React, { useEffect, useState } from 'react';

const FooterWithScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

   
    if (scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>Nomad Hub - Sarajevo-Based Remote Work and Networking Platform</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333', 
    color: '#FFF', 
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: isScrolled ? '0' : '-100px', 
    width: '100%',
    transition: 'bottom 0.3s ease-out', 
  },
  text: {
    margin: '0',
  },
};

export default FooterWithScroll;
