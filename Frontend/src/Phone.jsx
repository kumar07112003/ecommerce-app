import React, { useEffect, useState } from "react";
import API_BASE_URL from "../api";
import "./phone.css";
import Nav from "./Nav";
import { FaStar } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "./Footer";
const Phone = () => {
  const [phone, setPhone] = useState([]);
  let [search, setSearch] = useState(" ");
  let totalDiscount = 10;
  // Generate random discount between 10% and 50%
  const generateDiscount = () => {
    return Math.floor(Math.random() * (50 - 10 + 1)) + 10;
  };

  useEffect(() => {
    async function phoneData() {
      try {
        const res = await fetch(`${API_BASE_URL}/findAll/Phone`);
        const data = await res.json();

        // Add discount to each product
        const updatedPhone = data.map((p) => ({
          ...p,
          discount: generateDiscount(),
        }));

        setPhone(updatedPhone);
      } catch (error) {
        console.error(error);
      }
    }

    phoneData();
  }, []);

  async function HandleAddCart(productId) {
    try {
      const res = await fetch(`${API_BASE_URL}/addToCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: productId, quantity: 1 }),
      });

      if (!res.ok) {
        throw new Error("Failed to add cart");
      }

      alert("Product added to cart");
    } catch (error) {
      console.error(error);
    }
  }
  // Calculate discounted price
  const discountPrice = (price, discount) => {
    return Math.round(price - (price * discount) / 100);
  };

  let filtersearch = phone.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="phone">
      <Nav Search={search} setSearch={setSearch} />

      <div className="pcontainer">
        {filtersearch.length > 0 ? (
          filtersearch.map((p) => (
            <div className="phone-container" key={p.pid}>
              <div className="phonedetails">
                {/* Image Section */}
                <div className="phone-img">
                  <img src={p.imageUrl} alt={p.name} />

                  <div className="addcart-buynow">
                    <button onClick={() => HandleAddCart(p.pid)}>
                      <FaShoppingCart className="cartbutton" />
                      ADD TO CART
                    </button>
                    <button>
                      <AiFillThunderbolt className="thunder" />
                      BUY NOW
                    </button>
                  </div>
                </div>

                {/* Details Section */}
                <div className="phone-img-rating">
                  <div className="ratingbutton">
                    <div className="sponsored">
                      <p>Sponsored</p>
                    </div>

                    <p>{p.name?.toUpperCase()}</p>

                    <button>
                      {p.rating}
                      <FaStar className="yellow" />
                    </button>
                  </div>

                  <div className="img-content">
                    <ul>
                      <li>
                        {p.ram} RAM | {p.rom} ROM
                      </li>
                      <li>
                        {p.displayCm} | {p.displayInches} | {p.displayType}
                      </li>
                      <li>
                        {p.rearCamera} | {p.frontCamera} Front Camera
                      </li>
                      <li>{p.batteryMah} Battery</li>
                      <li>
                        {p.warrantyPeriod} Year Manufacturer Warranty for Device
                        and 6 Month for In-Box Accessories
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Price Section */}
              <div className="phone-price-offers">
                <div className="disprice">
                  <p className="discounted-price">
                    ₹{discountPrice(p.price, p.discount)}
                  </p>
                  <p className="assured">
                    <b>Assured</b>
                  </p>
                </div>
                <div className="price-offer">
                  <p className="original-price">₹{p.price}</p>
                  <p className="discount-percent">{p.discount}% OFF</p>
                </div>

                <div className="discountUpto">
                  <p className="superdeal">Super Deals</p>
                  <p className="totaldis">
                    Upto <b>{((p.price * totalDiscount) / 100).toFixed()}</b>{" "}
                    off on Exchange
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="noresult" style={{ textAlign: "Center" }}>
            No products found
          </h2>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Phone;
