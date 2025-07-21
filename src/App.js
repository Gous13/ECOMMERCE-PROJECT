import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import { useState } from 'react';
import Product from './pages/Product'; // ✅ Product page route
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : "light"} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Router>
        <Navbar cart={cart} darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
