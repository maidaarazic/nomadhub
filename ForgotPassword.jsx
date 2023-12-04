// src/components/ForgotPassword.js
import React, { useState } from 'react';
import firebase from '../firebase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      // Display a success message or redirect to a confirmation page
      console.log('Password reset email sent successfully');
    } catch (error) {
      console.error(error.message);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleForgotPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
