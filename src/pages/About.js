import React from 'react';

function About() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>About EcomMart</h1>
      
      <p>
        Welcome to <strong>EcomMart</strong> – your one-stop destination for seamless online shopping!
        Our mission is to deliver quality products at affordable prices while providing an intuitive and secure shopping experience.
      </p>

      <p>
        At EcomMart, we bring you a curated selection of top-rated items across categories like:
      </p>
      <ul style={{ marginLeft: '20px' }}>
        <li>Electronics</li>
        <li>Fashion & Apparel</li>
        <li>Mobile Phones</li>
        <li>Home & Kitchen Essentials</li>
        <li>Sports & Outdoors</li>
      </ul>

      <p>
        Whether you're a tech enthusiast, a fashion lover, or just looking for everyday essentials – we’ve got something for everyone!
        We partner with trusted brands and use real-time data to provide you with the latest and trending products.
      </p>

      <p>
        <strong>Why EcomMart?</strong>
      </p>
      <ul style={{ marginLeft: '20px' }}>
        <li>Fast and reliable delivery</li>
        <li>Secure payment gateways</li>
        <li>24/7 customer support</li>
        <li>User-friendly interface</li>
      </ul>

      <p>
        Thank you for choosing EcomMart. We are constantly evolving to serve you better. Happy shopping! 🛒
      </p>
    </div>
  );
}

export default About;
