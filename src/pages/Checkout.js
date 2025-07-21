function Checkout() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Checkout</h2>
      <form>
        <input placeholder="Full Name" /><br /><br />
        <input placeholder="Address" /><br /><br />
        <input placeholder="City" /><br /><br />
        <input placeholder="Pincode" /><br /><br />
        <button>Place Order</button>
      </form>
    </div>
  );
}
export default Checkout;
