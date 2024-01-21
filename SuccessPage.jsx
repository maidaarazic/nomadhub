import React from 'react';

const SuccessPage = () => {
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
    text: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>Successfully Submitted!</p>
    </div>
  );
};

export default SuccessPage;
