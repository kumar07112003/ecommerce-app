import React, { useEffect, useState } from "react";
import "./Home.css";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API_BASE_URL from "../api";
import Nav from "./Nav";
import Footer from "./Footer";
const Home = () => {
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState("");
  let [currentPage, setCurrentPage] = useState(1);

  let [postPerPage, setPostPerPage] = useState(12);
  let [cartCount, setCartCount] = useState(0);
  let [description, setDescription] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    async function abc() {
      try {
        let res = await fetch(`${API_BASE_URL}/findAllProduct`);
        let data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    abc();

    async function cartCounting() {
      try {
        let res = await fetch(`${API_BASE_URL}/findAllCart`);
        let data = await res.json();
        setCartCount(data.length);
      } catch (err) {
        console.log(err);
      }
    }
    cartCounting();
  }, []);

  let lastPostIndex = currentPage * postPerPage;
  let firstPostIndex = lastPostIndex - postPerPage;
  let currentpost = products.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="Home">
      <Nav search={search} setSearch={setSearch} cartCount={cartCount}></Nav>
      <div className="products">
        {currentpost
          .filter((products) => {
            if (search === "") return true;
            else {
              return products.name.toLowerCase().includes(search.toLowerCase());
            }
          })
          .map((products) => {
            return (
              <div className="product" key={products.id}>
                <div className="pimg">
                  {" "}
                  <img src={products.imageUrl} alt={products.name} />
                </div>
                <h3>{products.name}</h3>
                <h4 className="description">
                  {products.description.slice(0, 40)}...
                  <span className="full-description">
                    {products.description}
                  </span>
                </h4>
                <div className="rate_price">
                  <h5>Price:{products.price}$</h5>
                  <h5>{products.rating}</h5>
                </div>
                {}
                <h4>Quantity:{products.stock}</h4>
                <button
                  className="addcart"
                  onClick={async () => {
                    await fetch(`${API_BASE_URL}/addToCart`, {
                      method: "POST",
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify({
                        productId: products.id,
                      }),
                    });
                    toast.success("Product Added to Cart Successfully");
                    navigate("/addToCart");
                  }}
                >
                  Addcart
                </button>
              </div>
            );
          })}
        {products.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ).length === 0 &&
          search.trim() !== "" && (
            <h1
              style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
              }}
            >
              Something Went Wrong
            </h1>
          )}
        <Pagination
          totalPost={products.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
