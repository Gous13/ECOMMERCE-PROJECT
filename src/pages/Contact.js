import React from 'react';

const Contact = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2>Contact Us</h2>
      <p>Have any questions? We'd love to hear from you!</p>
      <form>
        <input type="text" placeholder="Your Name" style={inputStyle} required />
        <input type="email" placeholder="Your Email" style={inputStyle} required />
        <textarea placeholder="Your Message" rows="5" style={inputStyle} required></textarea>
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
