import { useState } from 'react';
import './Register.css'; // recommended for cleanliness

function Register() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-heading">Create Account</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="register-input"
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="register-input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="register-input"
        />
        <button className="register-button">Register</button>
      </div>
    </div>
  );
}

export default Register;
