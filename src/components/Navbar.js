import { Link } from 'react-router-dom';

function Navbar({ cart, darkMode, setDarkMode }) {
  const navbarStyle = {
    backgroundColor: darkMode ? '#111' : '#222',
    padding: '15px 30px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    color: '#fff',
  };

  const navContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  };

  const liStyle = {
    marginLeft: '25px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 600,
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <nav style={navbarStyle}>
      <div style={navContainer}>
        {/* Logo with Link to Home */}
        <Link to="/" style={{ ...linkStyle, fontSize: '20px' }}>
          EcomMart
        </Link>

        {/* Navigation */}
        <ul style={ulStyle}>
          <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
          <li style={liStyle}><Link to="/products" style={linkStyle}>Products</Link></li>
          <li style={liStyle}><Link to="/cart" style={linkStyle}>Cart ({cart.length})</Link></li>
          <li style={liStyle}><Link to="/register" style={linkStyle}>Register</Link></li>
          <li style={liStyle}><Link to="/login" style={linkStyle}>Login</Link></li>
          <li style={liStyle}>
            <span
              style={linkStyle}
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              Theme
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
