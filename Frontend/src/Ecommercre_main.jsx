import React, { useState,useEffect } from "react";
import './Ecommerce_main.css';
import API_BASE_URL from "../api";
const Ecommercre_main = () => {
  let [homeProduct, setHomeProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch(`${API_BASE_URL}/getHomeProduct`);
        let data = await res.json();
        setHomeProduct(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <main className="main_Content">
      <div className="welcome">
        <h1>Welcome to Ecommerce Website</h1>
        <h3>
          Explore a wide range of products at unbeatable prices. Shop now and
          experience the best in online shopping!
        </h3>
      </div>

      <div className="home_Products">
        {homeProduct.map((p) => {
          console.log(p);
          let price = Number(p.price);
          let discount = Number(p.discount.replace(/[^0-9.]/g, ""));
          let currentprice = price - (price * discount) / 100;

          return (
            <div className="home_Div_Products" key={p.id}>
              <div className="imagehome">
                <img className="attraction" src={p.imageUrl} alt={p.name} />
                
              </div>
              <h2 className="name">{p.name}</h2>
              <div className="price_discount">
                <div className="current_price">
                  <h4>PRICE : {currentprice.toFixed()}$</h4>
                </div>
                <div className="discountprice">
                  <h3 className="price">Price:{p.price}$</h3>
                  <h3>Discount:{p.discount}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Ecommercre_main;
