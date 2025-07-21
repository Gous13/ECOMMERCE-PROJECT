import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", padding: "40px 20px" }}>

      {/* -------------------- Hero Section -------------------- */}
      <section style={{
        background: "linear-gradient(to right, #ffffff, #e3f2fd)",
        borderRadius: "15px",
        padding: "50px 30px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        marginBottom: "60px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "30px"
      }}>
        <div style={{ flex: "1", minWidth: "280px", textAlign: "left" }}>
          <h1 style={{ fontSize: "3rem", color: "#2c3e50" }}>
            Welcome to <span style={{ color: "#ff6b6b" }}>EcomMart</span>
          </h1>
          <p style={{
            fontSize: "1.2rem",
            color: "#555",
            marginTop: "10px",
            maxWidth: "600px"
          }}>
            Shop top brands, trending collections, and unbeatable deals all in one place.
          </p>
          <button onClick={() => navigate('/products')} style={{
            marginTop: "20px",
            padding: "12px 24px",
            fontSize: "1rem",
            backgroundColor: "orangered",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            Start Shopping
          </button>
        </div>

        <div style={{ flex: "1", minWidth: "280px", textAlign: "center" }}>
          <img
            src="/h3.jpg"
            alt="ecommerce background"
            style={{
              width: "100%",
              maxWidth: "500px",
              
              borderRadius: "15px"
            }}
          />
        </div>
      </section>

      {/* -------------------- Trending Products Section -------------------- */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ textAlign: "center", color: "#2c3e50", marginBottom: "30px" }}>
          Trending Products
        </h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px"
        }}>
          {[
            { title: "Smart Watch", price: 1999, img: "/watch.png" },
            { title: "Wireless Earbuds", price: 1499, img: "/earbuds.png" },
            { title: "Sports Shoes", price: 2999, img: "/shoe.png" },
            { title: "Bluetooth Speaker", price: 999, img: "/bluetooth.png" },
            { title: "Gaming Mouse", price: 799, img: "/mouse.png" },
            { title: "Stylish Backpack", price: 1299, img: "/bag.png" }
          ].map((product, index) => (
            <div key={index} style={{
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "10px",
              width: "200px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
              textAlign: "center"
            }}>
              <img
                src={product.img || "/placeholder.png"}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  backgroundColor: "#eee"
                }}
              />
              <h4 style={{ fontSize: "1rem", marginTop: "10px" }}>{product.title}</h4>
              <p style={{ fontSize: "0.9rem", color: "#888" }}>₹{product.price}</p>
              <button style={{
                marginTop: "10px",
                padding: "8px 16px",
                fontSize: "0.9rem",
                backgroundColor: "#ff6b6b",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}>
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- Features Section -------------------- */}
      <section style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: "20px"
      }}>
        {[
          { icon: "🚚", title: "Fast Delivery", desc: "Get your orders quickly & safely" },
          { icon: "💳", title: "Secure Payment", desc: "100% protected transactions" },
          { icon: "📞", title: "24/7 Support", desc: "We're always here for help" },
        ].map((item, index) => (
          <div key={index} style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "20px",
            margin: "10px",
            width: "260px",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
          }}>
            <div style={{ fontSize: "2.5rem" }}>{item.icon}</div>
            <h3 style={{ marginTop: "10px", color: "#333" }}>{item.title}</h3>
            <p style={{ fontSize: "0.95rem", color: "#666" }}>{item.desc}</p>
          </div>
        ))}
      </section>

    </div>
  );
}

export default Home;
