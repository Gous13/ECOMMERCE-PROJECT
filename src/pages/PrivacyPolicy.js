import React from 'react';

const PrivacyPolicy = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    lineHeight: '1.6',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  return (
    <div style={containerStyle}>
      <h2>Privacy Policy</h2>
      <p>
        At EcomMart, your privacy is our priority. We are committed to protecting the personal information you share with us.
      </p>
      <h4>Information We Collect</h4>
      <p>
        We collect information such as your name, email address, and purchase history when you use our site.
      </p>
      <h4>How We Use Your Information</h4>
      <ul>
        <li>To provide and improve our services</li>
        <li>To process transactions</li>
        <li>To communicate updates and promotions</li>
      </ul>
      <h4>Data Security</h4>
      <p>
        We use secure technologies and procedures to protect your information from unauthorized access.
      </p>
      <h4>Your Consent</h4>
      <p>
        By using our website, you consent to our privacy policy.
      </p>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default PrivacyPolicy;
