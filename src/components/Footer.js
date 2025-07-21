import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    fontSize: '14px',
    marginTop: 'auto', // 👈 Helps push to bottom in flex layout
    width: '100%',
  };

  const linkStyle = {
    color: '#aaa',
    textDecoration: 'none',
    margin: '0 8px',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} EcomMart. All rights reserved.</p>
      <p>
        <a href="/about" style={linkStyle}>About</a>|
        <a href="/contact" style={linkStyle}> Contact</a>|
        <a href="/privacy" style={linkStyle}> Privacy Policy</a>
      </p>
    </footer>
  );
};

export default Footer;
