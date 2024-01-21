import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:9090/api/users/signup', {
        firstName,
        lastName,
        email,
        password,
      });

      const data = response.data;
      const status = response.status;

      if (status === 201) {
        setFeedbackMessage('Registration successful!');
        // Redirect to login or dashboard if needed
      } else {
        setFeedbackMessage('Registration failed. Please check your details and try again.');
      }
    } catch (error) {
      console.error(error.message);
      setFeedbackMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign up</h2>
      <p style={styles.paragraph}>Create your account</p>
      <input style={styles.input} type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input style={styles.input} type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input style={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input style={styles.input} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup} style={styles.button}> <b>Sign up</b> </button>
      {feedbackMessage && (
        <p style={feedbackMessage === 'Registration successful!' ? styles.successMessage : styles.errorMessage}>
          {feedbackMessage}
        </p>
      )}
      <p style={styles.paragraph}>Already have an account? <a href="/Login" style={styles.link}>Login</a></p>
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
    fontSize: '50px',
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

  paragraph: {
    fontSize: '15px',
    margin: '40px 30px',
    color: '#fff',
    textAlign: 'center',
  },

  link: {
    color: '#a30029',
    fontWeight: 'bold',
  },

  successMessage: {
    color: 'green',
    fontWeight: 'bold',
  },

  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
  },
};

export default Signup;
