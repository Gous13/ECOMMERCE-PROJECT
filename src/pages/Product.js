import { useEffect, useState } from 'react';
import axios from 'axios';

function Product({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAdd = (product) => {
    setCart([...cart, product]);
  };

  const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#222' }}>🛒 Product Categories</h2>

      {/* Category Buttons */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              margin: '5px',
              padding: '8px 14px',
              border: 'none',
              borderRadius: '20px',
              backgroundColor: category === cat ? '#ff6b6b' : '#ddd',
              color: category === cat ? '#fff' : '#333',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Box */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '10px 16px',
            width: '300px',
            border: '2px solid #ccc',
            borderRadius: '30px',
            fontSize: '16px'
          }}
        />
      </div>

      {/* Product Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {filteredProducts.map(p => (
          <div
            key={p.id}
            style={{
              border: '1px solid #e0e0e0',
              padding: '15px',
              borderRadius: '12px',
              width: '220px',
              textAlign: 'center',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              background: '#fff',
              transition: '0.3s',
              position: 'relative'
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ height: '150px', objectFit: 'contain', marginBottom: '10px' }}
            />
            <h4 style={{ fontSize: '16px', height: '40px' }}>{p.title.slice(0, 40)}...</h4>
            <p style={{ margin: '5px 0', fontWeight: 'bold', color: '#333' }}>₹ {p.price}</p>
            <p style={{ color: '#ffa534', fontSize: '14px' }}>⭐ {p.rating.rate}</p>
            <button
              onClick={() => handleAdd(p)}
              style={{
                marginTop: '10px',
                padding: '6px 12px',
                backgroundColor: '#28a745',
                color: '#fff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
