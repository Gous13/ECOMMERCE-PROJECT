import { useState } from 'react';
import './Register.css'; // ✅ same style reused

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Login</h2>
        <input
          className="register-input"
          type="email"
          placeholder="Email Address"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className="register-input"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="register-button">Login</button>
      </div>
    </div>
  );
}

export default Login;
