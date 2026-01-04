import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Order.css";
import API_BASE_URL from "../api";

const Order = () => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  let[address,setAddressFormData]=useState([]);

  // Fetch cart data
  useEffect(() => {
    async function getAddress() {
      try{
        const res = await fetch(`${API_BASE_URL}/getAddress`);
        const data = await res.json();
        setAddressFormData(data);
      }catch(error){
        console.error("Error fetching address:", error);
      }finally{ 
        // Handle address data if needed
      }
      
    }
    async function fetchOrderData() {
      try {
        const res = await fetch(`${API_BASE_URL}/findAllCart`);
        const data = await res.json();

        // If backend returns { data: [...] }
        const cartItems = Array.isArray(data) ? data : data.data;

        setOrder(cartItems || []);
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrderData();
    getAddress();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="order-page">
        <h2>Loading your cart...</h2>
      </div>
    );
  }

  // Empty cart
  if (order.length === 0) {
    return (
      <div className="empty-order">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate("/")}>Shop Now</button>
      </div>
    );
  }

  // Calculate total price
  const totalPrice = order.reduce(
    (sum, item) => sum + Number(item.price) * (item.quantity || 1),
    0
  );

  return (
    <div className="order-page">
      <h2>Order Summary</h2>

      {/* Address Section */}
      <div className="order-address">
        <h3>Delivery Address</h3>
        <div className="addresssave">
          {address.map((p)=>{
            return(
            <div key={p.id}>
                <p>{p.name}</p>
                <p>{p.address} {p.pincode}</p>  
            </div>
          )})}
          
        </div>
      </div>

      {/* Cart Items */}
      <div className="order-items">
        {order.map((item) => (
          <div className="order-item" key={item.id || item.pid}>
            <img src={item.imageUrl} alt={item.name} />

            <div className="item-details">
              <h4>{item.name}</h4>
              <p>Quantity: {item.quantity || 1}</p>
              <p className="price">
                {Number(item.price) * (item.quantity || 1)}$
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Price Details */}
      <div className="order-price">
        <h3>Price Details</h3>
        <p>Total Items: {order.length}</p>
        <p>Total Price: ₹{(totalPrice).toFixed()}$</p>
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
