import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Order.css";

const Order = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Get cart data safely (NO context)
  const cart = state?.cart || [];

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  // If user refreshes page or cart is empty
  if (cart.length === 0) {
    return (
      <div className="empty-order">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/cart")}>
          Go Back to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="order-page">
      <h2>Order Summary</h2>

      {/* Address Section */}
      <div className="order-address">
        <h3>Delivery Address</h3>
        <p>
          Muthu Kumar <br />
          Tirunelveli, Tamil Nadu <br />
          627001
        </p>
      </div>

      {/* Cart Items */}
      <div className="order-items">
        {cart.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p className="price">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Price Details */}
      <div className="order-price">
        <h3>Price Details</h3>
        <p>Total Items: {cart.length}</p>
        <p>Total Price: ₹{totalPrice}</p>
      </div>

      {/* Confirm Order */}
      <button
        className="confirm-order"
        onClick={() => {
          alert("Order placed successfully 🎉");
          navigate("/");
        }}
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Order;
