import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      });

      console.log(response.data); 
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome back</h1>
      <p style={styles.paragraph1}>Enter your credentials to login:</p>
      <input style={styles.input}type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input style={styles.input}type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <p style={styles.paragraph2}><a href="ForgotPassword"style={styles.link}>Forgot password?</a></p>
      <button onClick={handleLogin} style={styles.button}><b>Login</b></button>
      <p style={styles.paragraph1}>Don't have an account? <a href="/Singup"style={styles.link}>Sign up</a></p>
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
      //margin: '40px 30px',
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

export default Login;
