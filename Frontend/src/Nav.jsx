import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import "./Nav.css";
const Nav = ({ search, setSearch, cartCount }) => {
  let [searchActive, setSearchActive] = useState(false);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <nav>
        <div className="logo">Logo</div>
        <div className="centre">
          <Link to="/home">Home</Link>
          <Link to="/products">Product</Link>
          <Link to="/category">Category</Link>
          <Link
            className="cartcontent"
            to="/addToCart"
          >
            <div className="cart_Count">
              <p>{cartCount}</p>
              <span className="carticon">
                <FaCartShopping />
              </span>
            </div>{" "}
            Cart
          </Link>
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
    </div>
  );
};

export default Nav;
