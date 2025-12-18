import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaCartShopping } from "react-icons/fa6";
import Pagination from "./pagination";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API_BASE_URL from "../api";
const Home = () => {
  let [search, setSearch] = useState("");
  let [products, setProducts] = useState([]);
  let [searchActive, setSearchActive] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [postPerPage, setPostPerPage] = useState(12);
  let [cartCount,setCartCount]=useState(0);
  let navigate = useNavigate();
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  

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

    async function cartCounting()
    {
     try{
       let res= await fetch(`${API_BASE_URL}/findAllCart`);
      let data= await res.json();
      setCartCount(data.length);
     }
     catch(err){
      console.log(err)
     }
    }
    cartCounting();
  }, []);
  // let filtered=products.filter(p=>{
  //   p.name.toLowerCase().includes(search.toLowerCase())
  // })
  let lastPostIndex = currentPage * postPerPage;
  let firstPostIndex = lastPostIndex - postPerPage;
  let currentpost = products.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="Home">
      <nav>
        <div className="logo">Logo</div>
         <div className="centre">
          <Link to="/home">Home</Link>
          <Link to="/products">Product</Link>
          <Link to="/category">Category</Link>
          <a className="cartcontent" onClick={()=>{
            navigate("/addToCart")
          }}>
            <div className="cart_Count">
              <p>{cartCount}</p>
              <span className="carticon"><FaCartShopping /></span></div> Cart</a>
        </div>
        
        <div className="search">
          <input
            type="text"
            name="search"
            onClick={() => setSearchActive(!searchActive)}
            placeholder={!search ? "Search" : " "}
            value={search}
            onChange={handleSearch}
          />
          <div className="search_icon">
            <CiSearch />
          </div>
        </div>
      </nav>

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
                <img src={products.imageUrl} alt={products.name} />
                <h3>{products.name}</h3>
                <h4>{products.description.slice(0,40)}...</h4>
                <div className="rate_price">
                  <h5>Price:{products.price}$</h5>
                  <h5>{products.rating}</h5>
                </div>
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
            <h1 style={{ textAlign: "center", width: "100%" }}>
              Data Not Found
            </h1>
          )}
        <Pagination
          totalPost={products.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default Home;
