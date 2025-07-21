function Cart({ cart, setCart }) {
  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            borderBottom: '1px solid #ccc',
            padding: '10px 0'
          }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '80px', height: '80px', objectFit: 'contain' }}
            />
            <div style={{ flex: 1 }}>
              <h4>{item.title.slice(0, 40)}...</h4>
              <p style={{ margin: '5px 0' }}>₹ {item.price}</p>
            </div>
            <button
              onClick={() => removeItem(i)}
              style={{
                padding: '6px 12px',
                backgroundColor: '#ff4d4d',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <h3 style={{ marginTop: '20px' }}>Total: ₹ {total}</h3>
      )}
    </div>
  );
}

export default Cart;
