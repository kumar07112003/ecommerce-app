import React, { useEffectEvent, useState } from "react";
import API_BASE_URL from "../api";
import "./phone.css";
import Nav from "./Nav";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

const Phone = () => {
  let [phone, setPhone] = useState([]);
  useEffect(() => {
    async function phoneData() {
      try {
        let res = await fetch(`${API_BASE_URL}/findAll/Phone`);
        let data = await res.json();
        setPhone(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    phoneData();
  }, []);
  return (
    <div className="phone">
      <Nav></Nav>
      <div className="pcontainer">
        {phone.map((p) => {
          return (
            <div className="phone-container">
              <div className="phonedetails" key={p.pid}>
                <div className="phone-img">
                  <img src={p.imageUrl} alt={p.name} />
                  <div className="addcart-buynow">
                    <button>
                      <FaShoppingCart className="cartbutton" />
                      ADD TO CART
                    </button>
                    <button>
                      <AiFillThunderbolt className="thunder" />
                      BUY NOW
                    </button>
                  </div>
                </div>

                <div className="phone-img-rating">
                  <div className="ratingbutton">
                    <div className="sponsored">
                      {" "}
                      <p>Sponsored</p>
                    </div>
                    <p>{p.name.toUpperCase()}</p>
                    <button>
                      {p.rating}
                      <FaStar className="yellow" />
                    </button>
                  </div>
                  <div className="img-content">
                    <ul>
                      <p>
                        <li>
                          {p.ram}RAM | {p.rom} ROM
                        </li>
                        <li>
                          {p.displayCm}| {p.displayInches}| {p.displayType}
                        </li>
                        <li>
                          {p.rearCamera}|{p.frontCamera} Front Camera
                        </li>
                        <li>{p.batteryMah}Battery</li>
                        <li>
                          {p.warrantyPeriod} Year Manufacturer Warranty for
                          Device and 6 Month for In-Box Accessories
                        </li>
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="phone-price-offers">
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Phone;
