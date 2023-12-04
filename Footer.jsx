import React, { useEffect, useState } from 'react';

const FooterWithScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Adjust the threshold based on when you want the footer to appear
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
    backgroundColor: '#333', // Adjust the color to your preference
    color: '#FFF', // Adjust the color to your preference
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: isScrolled ? '0' : '-100px', // Adjust the position based on the scroll
    width: '100%',
    transition: 'bottom 0.3s ease-out', // Add smooth transition
  },
  text: {
    margin: '0',
  },
};

export default FooterWithScroll;
