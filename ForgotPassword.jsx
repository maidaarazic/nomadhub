import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/forgot-password', {
        email,
      });

      setMessage(response.data.message);
    } catch (error) {
      console.error(error.message);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Forgot Password</h1>
      <p style={styles.paragraph1}>Enter your email to reset your password:</p>
      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword} style={styles.button}>
        <b>Reset Password</b>
      </button>
      {message && <p style={styles.message}>{message}</p>}
      <p style={styles.paragraph1}>
        Remember your password? <a href="/Login" style={styles.link}>
          Login
        </a>
      </p>
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
      fontSize: '60px',
      marginBottom: '40px',
      color: '#fff',
    },

    input: {
      marginBottom: '30px',
      fontSize: '15px',
      padding: '10px', 
      height: '20px',
      borderRadius: '5px',
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
    paragraph1: {
      fontSize: '15px',
      color: '#fff',
      textAlign: 'center',
    },
    paragraph2: {
      fontSize: '15px',
      margin: '40px 30px',
      color: '#fff',
      textAlign: 'center',
    },

    link: {
      color: '#a30029',
      fontWeight: 'bold',
    },
  };

export default ForgotPassword;
